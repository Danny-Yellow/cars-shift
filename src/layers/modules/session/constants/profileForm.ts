import type { Field, ProfileUser } from '@src/shared/types';

export const PROFILE_FIELDS: Field<keyof ProfileUser>[] = [
	{ name: 'lastname', placeholder: 'Иванов', label: 'Фамилия' },
	{ name: 'phone', placeholder: 'Иванов', label: 'Номер телефона' },
	{ name: 'firstname', placeholder: 'Иван', label: 'Имя' },
	{ name: 'email', placeholder: 'Email', label: 'Email' },
	{ name: 'middlename', placeholder: 'Иванович', label: 'Отчество' },
	{ name: 'city', placeholder: 'Город', label: 'Город' },
];
