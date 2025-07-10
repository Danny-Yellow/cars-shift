import { Crescent, Exit, Logo, Sun, Time, User } from '@src/layers/components/icons';
import { Link } from '@src/layers/ui';
import { Container } from '@src/layers/ui/Container';
import { IconButton } from '@src/layers/ui/IconButton';
import { ROUTES } from '@src/shared/constants';
import { useTheme } from '@src/shared/hooks';
import { Link as RouterLink, useLocation } from 'react-router';

interface TopNavigationProps {
	isAuth: boolean;
	logout: () => void;
}

export const TopNavigation = ({ isAuth, logout }: TopNavigationProps) => {
	const { pathname } = useLocation();
	const { isLight, toggleTheme } = useTheme();

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
					<Link
						isActive={pathname === ROUTES.ORDERS_HISTORY}
						startIcon={<Time />}
						to={ROUTES.ORDERS_HISTORY}
					>
						История
					</Link>
				</div>
				<div className="flex gap-8">
					{isAuth ? (
						<Link onClick={() => logout()} startIcon={<Exit />} to={''}>
							Выйти
						</Link>
					) : (
						<Link isActive={pathname === ROUTES.SIGNIN} to={ROUTES.SIGNIN}>
							Войти
						</Link>
					)}
					{isLight ? (
						<IconButton onClick={() => toggleTheme('dark')}>
							<Crescent />
						</IconButton>
					) : (
						<IconButton onClick={() => toggleTheme('light')}>
							<Sun />
						</IconButton>
					)}
				</div>
			</Container>
		</nav>
	);
};
