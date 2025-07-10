import { AdaptivePageTitle } from '@src/layers/components';
import { ChevronLeft, Cross } from '@src/layers/components/icons';
import { BookCar, CheckData, Person } from '@src/layers/modules/booking/components';
import {
	$currentStep,
	$location,
	$person,
	decrementStep,
	resetCurrentStep,
	resetLocation,
	resetPerson,
} from '@src/layers/modules/booking/store';
import { IconButton, Progress, Typography } from '@src/layers/ui';
import { ROUTES } from '@src/shared/constants';
import { convertToISO, stripNonDigits } from '@src/shared/helpers';
import { useMountEffect } from '@src/shared/hooks';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import {
	$date,
	$selectedCar,
	resetDate,
	resetSelectedCar,
	setDate,
} from '../modules/catalog/store';
import { bookCarFx } from '../modules/orders/store/ordersStore';

export const BookingPage = () => {
	const currentStep = useUnit($currentStep);

	const date = useUnit($date);
	const person = useUnit($person);
	const location = useUnit($location);

	const navigate = useNavigate();

	const car = useUnit($selectedCar);

	useEffect(() => {
		if (!car) {
			navigate(ROUTES.CATALOG);
		}
	}, [car]);

	useMountEffect(() => {
		return () => {
			resetSelectedCar();
			resetDate();
			resetPerson();
			resetLocation();
			resetCurrentStep();
		};
	}, []);

	const stepsMap = [
		{
			title: 'Бронирование авто',
			component: <BookCar date={date} setDate={setDate} />,
		},
		{
			title: 'Введите ваши данные',
			component: <Person />,
		},
		{
			title: 'Проверка данных',
			component: (
				<CheckData
					carName={car?.name}
					carPrice={car?.price}
					date={date}
					book={() =>
						bookCarFx({
							...date.range,
							...person,
							...location,
							carId: car?.id,
							endDate: date.range.to.getTime(),
							startDate: date.range.from.getTime(),
							birthDate: convertToISO(person.birthDate),
							phone: stripNonDigits(person.phone),
						}).then((res) => {
							if (res.success) {
								navigate(ROUTES.ORDER_REQUEST);
							}
						})
					}
				/>
			),
		},
	];

	return (
		<div className="grid gap-6">
			<AdaptivePageTitle
				mobileButton={
					currentStep > 1 ? (
						<IconButton onClick={() => decrementStep()}>
							<ChevronLeft />
						</IconButton>
					) : (
						<IconButton onClick={() => navigate('/')}>
							<Cross />
						</IconButton>
					)
				}
			>
				<Typography tag="h1" variant="h2">
					{stepsMap[currentStep - 1].title}
				</Typography>
			</AdaptivePageTitle>
			<div className="grid max-w-[464px] gap-2">
				<Typography variant="p_12_regular">
					Шаг {currentStep} из {3}
				</Typography>
				<Progress max={3} value={currentStep} />
			</div>
			{stepsMap[currentStep - 1].component}
		</div>
	);
};
