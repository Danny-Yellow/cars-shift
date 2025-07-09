import { $sessionStore } from '@src/layers/modules/session/store';
import { ROUTES } from '@src/shared/constants';
import { useUnit } from 'effector-react';
import { Navigate, Outlet, useLocation } from 'react-router';

export const ProtectedRoute = ({ access }: { access: 'forAll' | 'onlyAuth' | 'onlyUnAuth' }) => {
	const { isAuth } = useUnit($sessionStore);
	const location = useLocation();

	if (access === 'onlyAuth' && !isAuth) {
		return <Navigate replace to={ROUTES.SIGNIN} />;
	}

	if (access === 'onlyUnAuth' && isAuth) {
		const { from } = location.state ?? { from: { pathname: '/' } };
		return <Navigate replace to={from} />;
	}

	return <Outlet />;
};
