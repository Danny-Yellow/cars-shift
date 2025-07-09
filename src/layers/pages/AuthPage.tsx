import { Auth } from '@src/layers/modules/auth';

export const AuthPage = () => {
	return (
		<>
			<Auth
				signin={() => {
					// signin
					// navigate to orders page
				}}
				signinIsLoading={false}
			/>
		</>
	);
};
