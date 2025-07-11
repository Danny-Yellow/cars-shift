import type { Rent } from '@src/shared/types';

import { Button, PropertyColumn, PropertyItem, Typography } from '@src/layers/ui';
import { useNavigate } from 'react-router';

import { openCancelOrderModal } from '../store';
import { OrderCard } from './OrderCard';

export const OrderDetails = ({ order }: { order: Rent }) => {
	const navigate = useNavigate();

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
					<Button variant="contained" onClick={() => openCancelOrderModal()}>
						Отменить
					</Button>
				</div>
			</OrderCard>
		</div>
	);
};
