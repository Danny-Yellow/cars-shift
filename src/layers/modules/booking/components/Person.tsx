import { BirthdateInput, PhoneInput } from '@src/layers/components';
import { Button, Form, Label, TextField, Typography } from '@src/layers/ui';
import { useForm } from '@tanstack/react-form';
import { useUnit } from 'effector-react';
import { useState } from 'react';

import { personFields } from '../constants/personForm';
import { PersonalFormSchema } from '../lib/PersonFormSchema';
import { $person, decrementStep, incrementStep, setPerson } from '../store';

export const Person = () => {
	const [continueIsClicked, setContinueIsClicked] = useState(false);

	const person = useUnit($person);

	const { Field, handleSubmit } = useForm({
		defaultValues: {
			birthdate: person.birthdate ?? '',
			comment: person.comment ?? '',
			email: person.email ?? '',
			firstname: person.firstname ?? '',
			lastname: person.lastname ?? '',
			middlename: person.middlename ?? '',
			phone: person.phone ?? '',
		},
		onSubmit: ({ value }) => {
			setPerson(value);
			incrementStep();
		},
		validators: {
			onChange: PersonalFormSchema,
		},
	});

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit();
			}}
		>
			{personFields.map(({ label, name, placeholder }) => (
				<Field
					key={name}
					children={({ state, handleChange }) => {
						const error = (state.meta.errors[0] as { message: string })?.message;
						const errorIsShown = continueIsClicked && !!error;

						return (
							<Label>
								<Typography variant="p_14_regular" color={errorIsShown ? 'error' : 'primary'}>
									{label}
								</Typography>
								{name === 'birthdate' && (
									<BirthdateInput
										value={state.value}
										hasError={errorIsShown}
										onChange={(event) => {
											handleChange(event.target.value);
										}}
									/>
								)}
								{name === 'phone' && (
									<PhoneInput
										value={state.value}
										hasError={errorIsShown}
										onChange={(event) => {
											handleChange(event.target.value);
										}}
										placeholder={placeholder}
									/>
								)}
								{name !== 'birthdate' && name !== 'phone' && (
									<TextField
										value={state.value}
										hasError={errorIsShown}
										onChange={(event) => {
											handleChange(event.target.value);
										}}
										placeholder={placeholder}
									/>
								)}
								{continueIsClicked && !!state.meta.errors.length && (
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
			<div className="mt-10 mb-20 flex gap-6">
				<Button variant="outlined" onClick={() => decrementStep()}>
					Назад
				</Button>
				<Button type="submit" onClick={() => setContinueIsClicked(true)}>
					Продолжить
				</Button>
			</div>
		</Form>
	);
};
