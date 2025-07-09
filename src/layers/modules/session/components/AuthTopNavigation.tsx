import { TopNavigation } from '@src/layers/components/Navigation';
import { LOCAL_STORAGE_KEYS } from '@src/shared/constants/localStorage';
import { useUnit } from 'effector-react';

import { $sessionStore, resetAuth } from '../store/authStore';

export const AuthTopNavigation = () => {
	const { isAuth } = useUnit($sessionStore);

	return (
		<TopNavigation
			isAuth={isAuth}
			logout={() => {
				localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
				resetAuth();
			}}
		/>
	);
};
