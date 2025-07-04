import { Button, Typography } from '@src/layers/ui';
import { ENV } from '@src/shared/constants';
import { formatNumberWithSpaces } from '@src/shared/utils';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { $carsList, $hasMore, fetchCarsFx, setNextPage } from '../../store/carsListStore';
import { CarCardSkeleton } from './CarCardSkeleton';

const TRANSMISSIONS_RU = {
	automatic: 'Автомат',
	manual: 'Механика',
};

export const CarsList = () => {
	const { ref, inView } = useInView();

	const [carsList, hasMore, isLoading] = useUnit([$carsList, $hasMore, fetchCarsFx.pending]);

	useEffect(() => {
		if (inView && !isLoading && hasMore) {
			setNextPage();
		}
	}, [inView, isLoading, hasMore]);

	return (
		<div className="grid grid-cols-3 gap-x-8 gap-y-12">
			{carsList?.map((car) => (
				<article key={car.id}>
					<img
						alt={car.name}
						className="mb-6 h-56 w-full rounded-2xl object-contain"
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
			{isLoading && <CarCardSkeleton count={3} />}
			{!isLoading && <div ref={ref} />}
		</div>
	);
};
