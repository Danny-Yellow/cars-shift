import type { Signin } from '@src/shared/types/entities';

import { AdaptivePageTitle, OTPCode, PhoneInput } from '@src/layers/components';
import { Cross } from '@src/layers/components/icons';
import { Button, Form, IconButton, Typography } from '@src/layers/ui';
import { stripNonDigits } from '@src/shared/helpers';
import { useForm } from '@tanstack/react-form';
import { useUnit } from 'effector-react';
import { useNavigate } from 'react-router';

import { $auth, createOtpFx, setIsContinued } from '../store/authStore';
import { ResendCodeManager } from './ResendCodeManager';

export const Auth = ({
	signin,
	signinIsLoading,
}: {
	signin: (data: Signin) => void;
	signinIsLoading: boolean;
}) => {
	const [{ isContinued, retryDelay }, otpIsLoading] = useUnit([$auth, createOtpFx.pending]);
	const navigate = useNavigate();

	const { Field, Subscribe, handleSubmit, state } = useForm({
		defaultValues: {
			phone: '',
			code: '',
		},
		onSubmit: ({ value }) => {
			const phone = stripNonDigits(value.phone);

			if (isContinued) {
				signin({ code: +value.code, phone });
				return;
			}

			createOtpFx(phone);
		},
	});

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit();
			}}
		>
			<AdaptivePageTitle
				mobileButton={
					<IconButton onClick={() => navigate('/')}>
						<Cross />
					</IconButton>
				}
			>
				<Typography variant="h2">Авторизация</Typography>
			</AdaptivePageTitle>
			<Typography variant="p_16_regular">
				Введите номер телефона для входа в личный кабинет
			</Typography>

			<Field
				children={({ state, handleChange }) => (
					<PhoneInput
						value={state.value}
						onChange={(event) => {
							setIsContinued(false);
							handleChange(event.target.value);
						}}
					/>
				)}
				name="phone"
			/>
			{!isContinued ? (
				<div>
					<Subscribe
						children={({ values }) => {
							const isDisabled = stripNonDigits(values.phone).length !== 11;

							return (
								<Button
									className="xs:w-full"
									disabled={isDisabled}
									size="lg"
									type="submit"
									isLoading={otpIsLoading}
								>
									Продолжить
								</Button>
							);
						}}
					></Subscribe>
				</div>
			) : (
				<>
					<Field
						children={({ state, handleChange }) => (
							<OTPCode value={state.value} onChange={(value: string) => handleChange(value)} />
						)}
						name="code"
					/>
					<div>
						<Subscribe
							children={({ values }) => {
								const isDisabled = stripNonDigits(values.code).length !== 6;

								return (
									<Button
										className="xs:w-full"
										disabled={isDisabled}
										size="lg"
										type="submit"
										isLoading={signinIsLoading}
									>
										Войти
									</Button>
								);
							}}
						></Subscribe>
					</div>
					<ResendCodeManager
						delay={retryDelay / 1000}
						retry={() => createOtpFx(state.values.phone)}
					/>
				</>
			)}
		</Form>
	);
};
