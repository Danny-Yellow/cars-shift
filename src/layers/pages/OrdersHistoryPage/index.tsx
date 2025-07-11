import { OrdersHistory } from '@src/layers/modules/orders/components';
import {
	$ordersList,
	getOrdersFx,
	resetOrdersList,
} from '@src/layers/modules/orders/store/ordersStore';
import { Spinner } from '@src/layers/ui';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';

import { EmptyPage } from './EmptyPage';

export const OrdersHistoryPage = () => {
	const [orders, isLoading] = useUnit([$ordersList, getOrdersFx.pending]);

	useEffect(() => {
		resetOrdersList();
		getOrdersFx();
	}, []);

	if (orders === null) {
		return null;
	}

	if (isLoading) {
		return (
			<div className="mt-20 flex justify-center">
				<Spinner />
			</div>
		);
	}

	if (!orders?.length) {
		return <EmptyPage />;
	}

	return <OrdersHistory orders={orders} />;
};
