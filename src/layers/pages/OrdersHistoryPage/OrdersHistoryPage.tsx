import { OrdersHistory } from '@src/layers/modules/orders/components';
import { $ordersList, getOrdersFx } from '@src/layers/modules/orders/store/ordersStore';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';

import { EmptyPage } from './EmptyPage';

export const OrdersHistoryPage = () => {
	const [orders, isLoading] = useUnit([$ordersList, getOrdersFx.pending]);

	console.log(orders);

	useEffect(() => {
		getOrdersFx();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!orders?.length) {
		return <EmptyPage />;
	}

	return <OrdersHistory orders={orders} />;
};
