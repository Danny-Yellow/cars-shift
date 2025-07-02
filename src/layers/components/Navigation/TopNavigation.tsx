import { Crescent, Exit, Logo, Sun, Time, User } from '@src/layers/components/Icons';
import { Link } from '@src/layers/ui';
import { Container } from '@src/layers/ui/Container';
import { IconButton } from '@src/layers/ui/IconButton';
import { ROUTES } from '@src/shared/constants';
import { Link as RouterLink, useLocation } from 'react-router';

export const TopNavigation = ({ isAuth, logout }: { isAuth: boolean; logout: () => void }) => {
	const { pathname } = useLocation();

	const isLight: boolean = true;

	return (
		<nav className="border-gray-70 grid h-[82px] items-center border-b-[1px]">
			<Container className="flex w-full justify-between">
				<div className="flex gap-8">
					<RouterLink to={ROUTES.CATALOG}>
						<Logo />
					</RouterLink>
					<Link isActive={pathname === ROUTES.PROFILE} startIcon={<User />} to={ROUTES.PROFILE}>
						Профиль
					</Link>
					<Link isActive={pathname === ROUTES.ORDERS} startIcon={<Time />} to={ROUTES.ORDERS}>
						История
					</Link>
				</div>
				<div className="flex gap-8">
					{isAuth ? (
						<Link onClick={() => logout()} startIcon={<Exit />} to={''}>
							Выйти
						</Link>
					) : (
						<Link isActive={pathname === ROUTES.LOGIN} to={ROUTES.LOGIN}>
							Войти
						</Link>
					)}
					{isLight ? (
						<IconButton>
							<Crescent />
						</IconButton>
					) : (
						<IconButton>
							<Sun />
						</IconButton>
					)}
				</div>
			</Container>
		</nav>
	);
};
