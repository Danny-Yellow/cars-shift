import { userPipes } from '@src/shared/lib/pipes/user';
import * as v from 'valibot';

const { firstname, lastname, middlename, phone, email, birthdate } = userPipes;

export const PersonalFormSchema = v.object({
	firstname,
	lastname,
	middlename,
	phone,
	email,
	birthdate,
	comment: v.string('Некорректный формат'),
});
