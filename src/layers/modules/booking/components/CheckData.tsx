import type { DateStore } from '@src/shared/types';

import { Pencil } from '@src/layers/components/icons';
import { Button, Card, IconButton, PropertyColumn, PropertyItem, Typography } from '@src/layers/ui';
import { formatNumberWithSpaces } from '@src/shared/helpers';
import { useUnit } from 'effector-react';

import { $location, $person, decrementStep, setStep } from '../store';

interface CheckDataProps {
	carName: string;
	carPrice: number;
	date: DateStore;
	book: () => void;
}

export const CheckData = ({ carName, carPrice, date, book }: CheckDataProps) => {
	const { pickupLocation, returnLocation } = useUnit($location);
	const person = useUnit($person);

	return (
		<div className="grid gap-6">
			<Card className="grid grid-cols-[1fr_1fr_1fr_auto] items-start" color="primary">
				<Typography variant="p_16_medium">Данные брони</Typography>
				<PropertyColumn>
					<PropertyItem property="Автомобиль">{carName}</PropertyItem>
					<PropertyItem property="Дата">{date.formattedRange}</PropertyItem>
				</PropertyColumn>
				<PropertyColumn>
					<PropertyItem property="Место получения">{pickupLocation}</PropertyItem>
					<PropertyItem property="Место возврата">{returnLocation}</PropertyItem>
				</PropertyColumn>
				<IconButton onClick={() => setStep(1)}>
					<Pencil />
				</IconButton>
			</Card>
			<Card className="grid grid-cols-[1fr_1fr_1fr_auto] items-start" color="primary">
				<Typography variant="p_16_medium">Данные заказчика</Typography>
				<PropertyColumn>
					<PropertyItem property="ФИО">
						{person.firstName} {person.lastName} {person.middleName}
					</PropertyItem>
					<PropertyItem property="Дата рождения">{person.birthDate}</PropertyItem>
					<PropertyItem property="Номер телефона">{person.phone}</PropertyItem>
				</PropertyColumn>
				<PropertyColumn>
					<PropertyItem property="Электронная почта">{person.email}</PropertyItem>
					<PropertyItem property="Комментарий">{person.comment || 'Отсутствует'}</PropertyItem>
				</PropertyColumn>
				<IconButton onClick={() => setStep(2)}>
					<Pencil />
				</IconButton>
			</Card>
			<div className="grid gap-4 py-3">
				<Typography variant="h3">
					Итого: {formatNumberWithSpaces(carPrice * date.daysCount)} ₽
				</Typography>
				<Typography variant="p_16_regular" color="secondary">
					Аренда: {date.formattedRange} ({date.daysCount} {date.daysDeclension})
				</Typography>
			</div>
			<div className="flex justify-between py-4">
				<Button size="lg" variant="outlined" onClick={() => decrementStep()}>
					Назад
				</Button>
				<Button size="lg" variant="contained" onClick={book}>
					Забронировать
				</Button>
			</div>
		</div>
	);
};
