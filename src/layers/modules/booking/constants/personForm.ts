import type { Field } from '@src/shared/types';
import type { BookingUser } from '@src/shared/types/entities/user';

export const personFields: Field<keyof BookingUser>[] = [
	{
		label: 'Фамилия',
		name: 'lastname',
		placeholder: 'Фамилия',
	},
	{
		label: 'Имя',
		name: 'firstname',
		placeholder: 'Имя',
	},
	{
		label: 'Отчество',
		name: 'middlename',
		placeholder: 'Отчество',
	},
	{
		label: 'Дата рождения',
		name: 'birthdate',
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
