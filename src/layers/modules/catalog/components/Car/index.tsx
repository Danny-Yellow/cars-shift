import { BrowserView } from '@src/layers/components';
import { ChevronLeft } from '@src/layers/components/icons';
import { Button, Link, Typography } from '@src/layers/ui';
import { ENV, ROUTES } from '@src/shared/constants';
import { formatNumberWithSpaces } from '@src/shared/helpers';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { BODY_TYPES, COLORS, STEERING_RU, TRANSMISSIONS_RU } from '../../constants/car';
import { $date, setDate } from '../../store/paramsStore';
import { $selectedCar, fetchCarFx, resetSelectedCar } from '../../store/selectedCarStore';

export const Car = () => {
	const { id } = useParams();

	const navigate = useNavigate();

	const car = useUnit($selectedCar);
	const date = useUnit($date);

	useEffect(() => {
		resetSelectedCar();

		if (!date.range) {
			setDate({ from: new Date(Date.now()), to: new Date(Date.now()) });
		}
	}, []);

	useEffect(() => {
		if (id) {
			fetchCarFx(id);
		}
	}, [id]);

	if (!car) return null;

	return (
		<div>
			<BrowserView>
				<nav>
					<Link color="secondary" startIcon={<ChevronLeft />} to="..">
						Назад
					</Link>
				</nav>
			</BrowserView>
			<div className="mt-6 flex gap-10">
				<div className="mb-4 w-full max-w-[500px]">
					<img alt={car.name} className="rounded-2xl" src={ENV.BASE_URL + car.media[0]?.url} />
					<div className="grid grid-cols-3 justify-center gap-4">
						{car.media[1]?.url && (
							<img alt={car.name} className="rounded-2xl" src={ENV.BASE_URL + car.media[1]?.url} />
						)}
						{car.media[2]?.url && (
							<img alt={car.name} className="rounded-2xl" src={ENV.BASE_URL + car.media[2]?.url} />
						)}
						{car.media[3]?.url && (
							<img alt={car.name} className="rounded-2xl" src={ENV.BASE_URL + car.media[3]?.url} />
						)}
					</div>
				</div>
				<article className="w-full max-w-[420px]">
					<Typography className="mb-8" tag="h2" variant="h1">
						{car.name}
					</Typography>
					<Typography className="pb-6" tag="h3" variant="h2">
						Характеристики
					</Typography>
					<div className="border-gray-80 grid grid-cols-2 border-t-1 py-6">
						<Typography variant="p_16_medium">Коробка передач</Typography>
						<Typography variant="p_16_medium">{TRANSMISSIONS_RU[car.transmission]}</Typography>
					</div>
					<div className="border-gray-80 grid grid-cols-2 border-t-1 py-6">
						<Typography variant="p_16_medium">Руль</Typography>
						<Typography variant="p_16_medium">{STEERING_RU[car.steering]}</Typography>
					</div>
					<div className="border-gray-80 grid grid-cols-2 border-t-1 py-6">
						<Typography variant="p_16_medium">Тип кузова</Typography>
						<Typography variant="p_16_medium">{BODY_TYPES[car.bodyType]}</Typography>
					</div>
					<div className="border-gray-80 grid grid-cols-2 border-t-1 pt-6 pb-8">
						<Typography variant="p_16_medium">Цвет</Typography>
						<Typography variant="p_16_medium">{COLORS[car.color]}</Typography>
					</div>
					<Typography className="pb-6" tag="h3" variant="h2">
						Стоимость
					</Typography>
					<div className="border-gray-80 grid grid-cols-2 border-t-1 py-6">
						<Typography variant="p_16_medium">
							Аренда на {date.daysCount} {date.daysDeclension}
						</Typography>
						<Typography variant="p_16_medium">{date.formattedRange}</Typography>
					</div>
					<div className="border-gray-80 grid grid-cols-2 border-t-1 pt-6 pb-8">
						<Typography variant="p_24_medium">Итого</Typography>
						<Typography variant="p_24_medium">
							{formatNumberWithSpaces(car.price * date.daysCount)} ₽
						</Typography>
					</div>
					<div className="flex gap-6">
						<Button variant="outlined" onClick={() => navigate(-1)}>
							Назад
						</Button>
						<Button onClick={() => navigate(ROUTES.BOOKING)}>Забронировать</Button>
					</div>
				</article>
			</div>
		</div>
	);
};
