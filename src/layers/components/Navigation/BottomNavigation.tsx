import { Car, Time, User } from '@src/layers/components/icons';
import { Link } from '@src/layers/ui';
import { ROUTES } from '@src/shared/constants';
import { useLocation } from 'react-router';

export const BottomNavigation = () => {
	const { pathname } = useLocation();

	return (
		<>
			<nav className="xs:block fixed bottom-0 left-0 z-30 hidden w-full bg-white dark:bg-black">
				<div className="flex">
					<Link
						className="flex w-full flex-col items-center gap-[2px] py-[10px]"
						isActive={pathname === ROUTES.CATALOG}
						color="secondary"
						startIcon={<Car />}
						to={ROUTES.CATALOG}
					>
						Авто
					</Link>
					<Link
						className="flex w-full flex-col items-center gap-[2px] py-[10px]"
						isActive={pathname === ROUTES.ORDERS_HISTORY}
						color="secondary"
						startIcon={<Time />}
						to={ROUTES.ORDERS_HISTORY}
					>
						Заказы
					</Link>
					<Link
						className="flex w-full flex-col items-center gap-[2px] py-[10px]"
						isActive={pathname === ROUTES.PROFILE}
						color="secondary"
						startIcon={<User />}
						to={ROUTES.PROFILE}
					>
						Профиль
					</Link>
				</div>
			</nav>
			<div className="h-[77px]" />
		</>
	);
};
