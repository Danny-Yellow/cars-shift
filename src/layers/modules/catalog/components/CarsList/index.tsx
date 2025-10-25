import { Button, Typography } from '@src/layers/ui';
import { ENV, ROUTES } from '@src/shared/constants';
import { formatNumberWithSpaces } from '@src/shared/helpers';
import { useDevice, useMountEffect } from '@src/shared/hooks';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router';

import { TRANSMISSIONS_RU } from '../../constants/car';
import { $carsList, $hasMore, fetchCarsFx, setNextPage } from '../../store/carsListStore';
import { showCars } from '../../store/paramsStore';
import { CarCardSkeleton } from './CarCardSkeleton';

export const CarsList = () => {
	const { ref, inView } = useInView();
	const navigate = useNavigate();
	const isMobile = useDevice();

	const [carsList, hasMore, isLoading] = useUnit([$carsList, $hasMore, fetchCarsFx.pending]);

	useMountEffect(() => {
		showCars();
	}, []);

	useEffect(() => {
		if (inView && !isLoading && hasMore) {
			setNextPage();
		}
	}, [inView, isLoading, hasMore]);

	return (
		<div className="grid-cols-auto-fill-300 xs:grid-cols-2 xs:gap-y-6 grid justify-center gap-x-7.5 gap-y-12">
			{carsList?.map((car) => (
				<article
					key={car.id}
					onClick={() => isMobile && navigate(ROUTES.CAR_DETAILS.replace(':id', car.id))}
				>
					<img
						alt={car.name}
						className="xs:mb-0 xs:h-auto xs: mb-6 h-56 rounded-2xl"
						src={ENV.BASE_URL + car.media[0]?.url}
						style={{ aspectRatio: '16/12' }}
					/>
					<div>
						<Typography className="xs:mb-0 mb-2 truncate" tag="h2" variant="h3">
							{car.name}
						</Typography>
						<Typography className="xs:mb-2 mb-8" variant="p_16_regular">
							{TRANSMISSIONS_RU[car.transmission]}
						</Typography>
						<div className="xs:block xs:mb-2 mb-6 flex items-center justify-between">
							<Typography variant="h3">{formatNumberWithSpaces(car.price)} ₽</Typography>
							<Typography variant="p_16_regular">{`${formatNumberWithSpaces(car.price * 14)} ₽ за 14 дней`}</Typography>
						</div>
						<Button onClick={() => navigate(ROUTES.CAR_DETAILS.replace(':id', car.id))}>
							Выбрать
						</Button>
					</div>
				</article>
			))}
			{isLoading && <CarCardSkeleton count={3} />}
			{!isLoading && <div ref={ref} />}
		</div>
	);
};
