import type { IndicatorColor } from '@src/layers/ui';
import type { Rent } from '@src/shared/types';

import { AdaptivePageTitle } from '@src/layers/components';
import {
	Indicator,
	PropertyColumn,
	PropertyItem,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	Typography,
} from '@src/layers/ui';
import { ROUTES } from '@src/shared/constants';
import { STATUS_CODE, STATUS_INDICATOR } from '@src/shared/constants/status';
import { getFormattedDateRange } from '@src/shared/helpers';
import { useDevice } from '@src/shared/hooks';
import { Link } from 'react-router';

export const OrdersHistory = ({ orders }: { orders: Rent[] }) => {
	const { isMobile } = useDevice();

	return (
		<>
			<AdaptivePageTitle>
				<Typography tag="h2" variant="h2">
					Заказы
				</Typography>
			</AdaptivePageTitle>
			{isMobile ? (
				orders.map((order, index) => (
					<PropertyColumn key={index} className="border-gray-90 border-b-1 py-6">
						<PropertyItem property="Статус">
							<div className="flex items-center gap-3">
								<Indicator color="success" />
								<Typography variant="p_16_regular">Создано</Typography>
							</div>
						</PropertyItem>
						<PropertyItem property="Автомобиль">
							<Typography variant="p_16_regular">{order.carInfo.name}</Typography>
						</PropertyItem>
						<PropertyItem property="Дата брони">
							<Typography variant="p_16_regular">
								{getFormattedDateRange({
									from: new Date(order.startDate),
									to: new Date(order.endDate),
								})}
							</Typography>
						</PropertyItem>
						<Link to={ROUTES.ORDER_DETAILS.replace(':id', order.carInfo.id)}>
							<Typography underline variant="p_12_regular" color="secondary">
								Подробнее
							</Typography>
						</Link>
					</PropertyColumn>
				))
			) : (
				<Table className="mt-6">
					<TableHeader>
						<TableRow>
							<TableHead>Автомобиль</TableHead>
							<TableHead>Дата брони</TableHead>
							<TableHead>Статус брони</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{orders?.map((order) => (
							<TableRow key={order._id}>
								<TableCell>{order.carInfo.name}</TableCell>
								<TableCell>
									{getFormattedDateRange({
										from: new Date(order.startDate),
										to: new Date(order.endDate),
									})}
								</TableCell>
								<TableCell>
									<div className="flex items-center gap-3">
										<Indicator color={STATUS_INDICATOR[order.status] as IndicatorColor} />
										<span>{STATUS_CODE[order.status]}</span>
									</div>
								</TableCell>
								<TableCell>
									<Link to={ROUTES.ORDER_DETAILS.replace(':id', order._id)}>
										<Typography underline variant="p_12_regular" color="secondary">
											Подробнее
										</Typography>
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}
		</>
	);
};
