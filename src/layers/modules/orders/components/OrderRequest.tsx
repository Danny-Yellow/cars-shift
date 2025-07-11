import { AdaptivePageTitle } from '@src/layers/components';
import { Cross } from '@src/layers/components/icons';
import { Success } from '@src/layers/components/icons/Success';
import { Button, IconButton, Typography } from '@src/layers/ui';
import { ROUTES } from '@src/shared/constants';
import { useDevice } from '@src/shared/hooks';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { $orderRequest } from '../store/ordersStore';
import { OrderCard } from './OrderCard';

export const OrderRequest = () => {
	const rent = useUnit($orderRequest);
	const navigate = useNavigate();

	const { isMobile } = useDevice();

	useEffect(() => {
		if (!rent) {
			navigate(ROUTES.CATALOG);
		}
	}, [rent, navigate]);

	return (
		<div className="xs:flex xs:min-h-screen xs:flex-col xs:gap-0 w-full md:flex md:justify-center">
			<AdaptivePageTitle
				mobileButton={
					<IconButton onClick={() => navigate('/')}>
						<Cross />
					</IconButton>
				}
			/>
			<div className="xs:-mt-20 xs:flex xs:flex-1 xs:flex-col xs:items-center xs:justify-center xs:gap-4 xs:text-center grid max-w-[600px] gap-6">
				<div className="xs:grid xs:justify-items-center xs:gap-4 flex flex-wrap items-center gap-9 p-3">
					<Success />
					<Typography tag="h2" variant="h2">
						Автомобиль забронирован
					</Typography>
				</div>
				{!isMobile && (
					<OrderCard
						carName={rent.carInfo.name}
						endDate={rent.endDate}
						startDate={rent.startDate}
						status={rent.status}
						pickupLocation={rent.pickupLocation}
						returnLocation={rent.returnLocation}
					>
						<Typography className="mt-6" variant="p_14_regular" color="secondary">
							Вся информация была продубирована в XSS
						</Typography>
					</OrderCard>
				)}
				<div>
					{!isMobile ? (
						<div className="flex max-w-[464px] gap-6">
							<Button variant="outlined" onClick={() => navigate(ROUTES.ORDERS_HISTORY)}>
								Посмотреть статус
							</Button>
							<Button onClick={() => navigate('/')}>На главную</Button>
						</div>
					) : (
						<Button onClick={() => navigate(ROUTES.ORDERS_HISTORY)}>Посмотреть статус</Button>
					)}
				</div>
			</div>
		</div>
	);
};
