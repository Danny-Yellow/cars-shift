import { Auth } from '@src/layers/modules/auth/components';
import { signinFx } from '@src/layers/modules/session/store';
import { ROUTES } from '@src/shared/constants';
import { useUnit } from 'effector-react';
import { useNavigate } from 'react-router';

export const AuthPage = () => {
	const [signinIsLoading] = useUnit([signinFx.pending]);
	const navigate = useNavigate();

	return (
		<Auth
			signin={(data) =>
				signinFx(data).then((res) => {
					if (res.success) {
						navigate(ROUTES.ORDERS_HISTORY);
					}
				})
			}
			signinIsLoading={signinIsLoading}
		/>
	);
};
