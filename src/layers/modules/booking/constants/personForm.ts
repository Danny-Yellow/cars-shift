import type { Field } from '@src/shared/types';
import type { BookingUser } from '@src/shared/types/entities/user';

export const personFields: Field<keyof BookingUser>[] = [
	{
		label: 'Фамилия',
		name: 'lastName',
		placeholder: 'Фамилия',
	},
	{
		label: 'Имя',
		name: 'firstName',
		placeholder: 'Имя',
	},
	{
		label: 'Отчество',
		name: 'middleName',
		placeholder: 'Отчество',
	},
	{
		label: 'Дата рождения',
		name: 'birthDate',
	},
	{
		label: 'Номер телефона',
		name: 'phone',
		placeholder: 'Номер телефона',
	},
	{
		label: 'Электронная почта',
		name: 'email',
		placeholder: 'Электронная почта',
	},
	{
		label: 'Комментарий',
		name: 'comment',
		placeholder: 'Комментарий',
	},
];
