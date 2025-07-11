import { OrderDetails } from '@src/layers/modules/orders/components';
import {
	$orderDetails,
	getOrderDetailsFx,
	resetCancelOrder,
	resetOrderDetails,
} from '@src/layers/modules/orders/store';
import { Spinner } from '@src/layers/ui';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import { CancelOrderModal } from './CancelOrderModal';

export const OrderDetailsPage = () => {
	const [order, isLoading] = useUnit([$orderDetails, getOrderDetailsFx.pending]);

	const { id } = useParams();

	useEffect(() => {
		getOrderDetailsFx(id);

		return () => {
			resetCancelOrder();
			resetOrderDetails();
		};
	}, []);

	if (!order) {
		return null;
	}

	if (isLoading) {
		return (
			<div className="mt-20 flex justify-center">
				<Spinner />
			</div>
		);
	}

	return (
		<>
			<OrderDetails order={order} />
			<CancelOrderModal orderId={id} />
		</>
	);
};
