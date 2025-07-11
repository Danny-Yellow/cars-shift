import type { UpdateProfile } from '@src/shared/api/actions/updateProfile';

import { PhoneInput } from '@src/layers/components';
import { Button, Form, Label, TextField, Typography } from '@src/layers/ui';
import { useForm } from '@tanstack/react-form';
import { useUnit } from 'effector-react';
import { useState } from 'react';

import { PROFILE_FIELDS } from '../constants/profileForm';
import { ProfileFormSchema } from '../lib/ProfileFormSchema';
import { $sessionStore } from '../store';

export const ProfileForm = ({ onSubmit }: { onSubmit: (profile: UpdateProfile) => void }) => {
	const [updateIsClicked, setUpdateIsClicked] = useState(false);

	const { user } = useUnit($sessionStore);

	const { Field, Subscribe, handleSubmit } = useForm({
		defaultValues: user,
		onSubmit: ({ value }) => {
			const { phone, ...profile } = value;
			onSubmit({ phone, profile });
		},
		validators: {
			onChange: ProfileFormSchema,
		},
	});

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit();
			}}
		>
			<Typography tag="h1" variant="h1">
				Профиль
			</Typography>
			{PROFILE_FIELDS.map(({ label, name, placeholder }) => (
				<Field
					key={name}
					children={({ state, handleChange }) => {
						const error = (state.meta.errors[0] as { message: string })?.message;
						const errorIsShown = updateIsClicked && !!error;

						return (
							<Label>
								<Typography variant="p_14_regular" color={errorIsShown ? 'error' : 'primary'}>
									{label}
								</Typography>

								{name === 'phone' ? (
									<PhoneInput
										disabled
										value={state.value}
										hasError={errorIsShown}
										onChange={(event) => handleChange(event.target.value)}
										placeholder={placeholder}
									/>
								) : (
									<TextField
										value={state.value}
										hasError={errorIsShown}
										onChange={(event) => handleChange(event.target.value)}
										placeholder={placeholder}
									/>
								)}
								{errorIsShown && (
									<Typography variant="p_14_regular" color="error">
										{error}
									</Typography>
								)}
							</Label>
						);
					}}
					name={name}
				/>
			))}
			<Subscribe
				children={() => (
					<div>
						<Button type="submit" onClick={() => setUpdateIsClicked(true)}>
							Обновить данные
						</Button>
					</div>
				)}
			/>
		</Form>
	);
};
