import type { DateStore } from '@src/shared/types';
import type { DateRange } from 'react-day-picker';

import { RentDate } from '@src/layers/components';
import { FieldWithHints } from '@src/layers/components/FieldWithHints';
import {
	Button,
	Form,
	Label,
	Typography,
} from '@src/layers/ui';
import { useForm } from '@tanstack/react-form';
import { useUnit } from 'effector-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { bookCarFields } from '../constants/bookCarForm';
import { $location, incrementStep, setLocation } from '../store';

interface BookCarProps {
	addresses: { value: string }[];
	date: DateStore;
	onChangeField: (field: string, value: string) => void;
	setDate: (date: DateRange) => void;
}

export const BookCar = ({ date, setDate, onChangeField, addresses }: BookCarProps) => {
	const [continueIsClicked, setContinueIsClicked] = useState(false);
	const navigate = useNavigate();

	const location = useUnit($location);

	const { Field, handleSubmit } = useForm({
		defaultValues: {
			pickupLocation: location.pickupLocation ?? '',
			returnLocation: location.returnLocation ?? '',
		},
		onSubmit: ({ value }) => {
			setLocation(value);
			incrementStep();
		},
	});

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit();
			}}
		>
			<RentDate date={date} setDate={setDate} />
			{bookCarFields.map(({ label, name, placeholder }) => (
				<Field
					key={name}
					children={({ state, handleChange }) => {
						const error = state.meta.errors[0]?.toString().split(', ')[0];
						const errorIsShown = continueIsClicked && !!error;

						return (
							<Label>
								<Typography variant="p_14_regular" color={errorIsShown ? 'error' : 'primary'}>
									{label}
								</Typography>
								<FieldWithHints
									hints={addresses}
									value={state.value}
									onChange={(event) => {
										handleChange(event.target.value);
										onChangeField(name, event.target.value);
									}}
									onHintSelect={(value) => {
										handleChange(value);
									}}
									placeholder={placeholder}
								/>

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
			<div className="mt-10 flex gap-6">
				<Button variant="outlined" onClick={() => navigate('..')}>
					Назад
				</Button>
				<Button type="submit" onClick={() => setContinueIsClicked(true)}>
					Продолжить
				</Button>
			</div>
		</Form>
	);
};
