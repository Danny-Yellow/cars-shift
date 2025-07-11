import type { RentStatus } from '@src/shared/types';
import type { ComponentProps } from 'react';

import { Card, Indicator, PropertyColumn, PropertyItem, Typography } from '@src/layers/ui';
import { getFormattedDateRange } from '@src/shared/helpers';
import clsx from 'clsx';

interface RentCardProps extends ComponentProps<typeof Card> {
	carName: string;
	endDate: number;
	pickupLocation: string;
	returnLocation: string;
	startDate: number;
	status: RentStatus;
}

export const OrderCard = ({
	children,
	className,
	carName,
	endDate,
	pickupLocation,
	returnLocation,
	startDate,
	status,
}: RentCardProps) => {
	const date = getFormattedDateRange({
		from: new Date(startDate),
		to: new Date(endDate),
	});

	const statusWithIcon = {
		0: (
			<div className="flex items-center gap-2">
				<Indicator color="success" />
				<Typography variant="p_16_regular">Создано</Typography>
			</div>
		),
		1: (
			<div className="flex items-center gap-2">
				<Indicator color="error" />
				<Typography variant="p_16_regular">Отменено</Typography>
			</div>
		),
	};

	return (
		<Card className={clsx('px-12 py-6', className)} color="transparent" outlined>
			<PropertyColumn>
				<PropertyItem property="Статус">{statusWithIcon[status]}</PropertyItem>
				<PropertyItem property="Автомобиль">{carName}</PropertyItem>
				<PropertyItem property="Дата брони">{date}</PropertyItem>
				<PropertyItem property="Место получения">{pickupLocation}</PropertyItem>
				<PropertyItem property="Место возврата">{returnLocation}</PropertyItem>
			</PropertyColumn>
			{children}
		</Card>
	);
};
