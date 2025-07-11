import {
	$orderDetails,
	getOrderDetailsFx,
	resetOrdersList,
} from '@src/layers/modules/orders/store/ordersStore';
import { Button, PropertyColumn, PropertyItem, Typography } from '@src/layers/ui';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { OrderCard } from './OrderCard';

export const OrderDetails = () => {
	const [order, isLoading] = useUnit([$orderDetails, getOrderDetailsFx.pending]);

	const { id } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		resetOrdersList();
		getOrderDetailsFx(id);
	}, [id]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!order) {
		return null;
	}

	return (
		<div>
			<Typography className="mb-6" tag="h1" variant="h1">
				Детали бронирования
			</Typography>
			<OrderCard
				carName={order.carInfo.name}
				className="grid grid-cols-2 gap-12"
				endDate={order.endDate}
				startDate={order.startDate}
				status={order.status}
				pickupLocation={order.pickupLocation}
				returnLocation={order.returnLocation}
			>
				<PropertyColumn>
					<PropertyItem property="ФИО">
						{order.firstName} {order.lastName} {order.middleName}
					</PropertyItem>
					<PropertyItem property="Дата рождения">{order.birthDate}</PropertyItem>
					<PropertyItem property="Номер телефона">{order.phone}</PropertyItem>
					<PropertyItem property="Электронная почта">{order.email}</PropertyItem>
					<PropertyItem property="Комментарий">{order.comment}</PropertyItem>
				</PropertyColumn>
				<div className="flex gap-6">
					<Button variant="outlined" onClick={() => navigate(-1)}>
						Назад
					</Button>
					<Button variant="contained">Отменить</Button>
				</div>
			</OrderCard>
		</div>
	);
};
