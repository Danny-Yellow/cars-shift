import { userPipes } from '@src/shared/lib/pipes/user';
import * as v from 'valibot';

const { firstname, lastname, middlename, phone, email, birthDate } = userPipes;

export const PersonalFormSchema = v.object({
	firstName: firstname,
	lastName: lastname,
	middleName: middlename,
	phone,
	email,
	birthDate,
	comment: v.string('Некорректный формат'),
});
