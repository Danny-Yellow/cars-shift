import { Button, Typography } from '@src/layers/ui';
import { ENV } from '@src/shared/constants';
import { formatNumberWithSpaces } from '@src/shared/utils';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';

import { $carsList, fetchCarsFx } from '../store/carsListStore';

const TRANSMISSIONS_RU = {
	automatic: 'Автомат',
	manual: 'Механика',
};

export const CarsList = () => {
	const carsList = useUnit($carsList);

	useEffect(() => {
		fetchCarsFx();
	}, []);

	return (
		<div className="grid grid-cols-3 gap-y-12 gap-x-8">
			{carsList?.map((car) => (
				<article key={car.id} className="max-w-72">
					<img
						alt={car.name}
						className="mb-6 h-56 w-full object-contain"
						src={ENV.BASE_URL + car.media[0]?.url}
					/>
					<Typography className="mb-2" tag="h2" variant="h3">
						{car.name}
					</Typography>
					<Typography className="mb-8" variant="p_16_regular">
						{TRANSMISSIONS_RU[car.transmission]}
					</Typography>
					<div className="mb-6 flex items-center justify-between">
						<Typography variant="h3">{formatNumberWithSpaces(car.price)} ₽</Typography>
						<Typography variant="p_16_regular">{`${formatNumberWithSpaces(car.price * 14)} ₽ за 14 дней`}</Typography>
					</div>
					<Button>Выбрать</Button>
				</article>
			))}
		</div>
	);
};
