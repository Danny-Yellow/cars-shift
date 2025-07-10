import type { DateStore } from '@src/shared/types';

import { Pencil } from '@src/layers/components/icons';
import { Button, IconButton, Typography } from '@src/layers/ui';
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

	const card =
		'bg-gray-90 grid grid-cols-[1fr_1fr_1fr_auto] gap-6 rounded-2xl px-12 py-6 items-start';
	const column = 'grid gap-6';
	const group = 'grid gap-0.5';

	return (
		<div className="grid gap-6">
			<article className={card}>
				<Typography variant="p_16_medium">Данные брони</Typography>
				<div className={column}>
					<div className={group}>
						<Typography variant="p_12_regular" color="secondary">
							Автомобиль
						</Typography>
						<Typography variant="p_16_regular">{carName}</Typography>
					</div>
					<div className={group}>
						<Typography variant="p_12_regular" color="secondary">
							Дата
						</Typography>
						<Typography variant="p_16_regular">{date.formattedRange}</Typography>
					</div>
				</div>
				<div className={column}>
					<div className={group}>
						<Typography variant="p_12_regular" color="secondary">
							Место получения
						</Typography>
						<Typography variant="p_16_regular">{pickupLocation}</Typography>
					</div>
					<div className={group}>
						<Typography variant="p_12_regular" color="secondary">
							Место возврата
						</Typography>
						<Typography variant="p_16_regular">{returnLocation}</Typography>
					</div>
				</div>
				<IconButton onClick={() => setStep(1)}>
					<Pencil />
				</IconButton>
			</article>
			<article className={card}>
				<Typography variant="p_16_medium">Данные заказчика</Typography>
				<div className={column}>
					<div className={group}>
						<Typography variant="p_12_regular" color="secondary">
							ФИО
						</Typography>
						<Typography variant="p_16_regular">
							{person.firstname} {person.lastname} {person.middlename}
						</Typography>
					</div>
					<div className={group}>
						<Typography variant="p_12_regular" color="secondary">
							Дата рождения
						</Typography>
						<Typography variant="p_16_regular">{person.birthdate}</Typography>
					</div>
					<div className={group}>
						<Typography variant="p_12_regular" color="secondary">
							Номер телефона
						</Typography>
						<Typography variant="p_16_regular">{person.phone}</Typography>
					</div>
				</div>
				<div className={column}>
					<div className={group}>
						<Typography variant="p_12_regular" color="secondary">
							Электронная почта
						</Typography>
						<Typography variant="p_16_regular">{person.email}</Typography>
					</div>
					<div className={group}>
						<Typography variant="p_12_regular" color="secondary">
							Комментарий
						</Typography>
						<Typography variant="p_16_regular">{person.comment || 'Отсутствует'}</Typography>
					</div>
				</div>
				<IconButton onClick={() => setStep(2)}>
					<Pencil />
				</IconButton>
			</article>
			<div className="py-3">
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
