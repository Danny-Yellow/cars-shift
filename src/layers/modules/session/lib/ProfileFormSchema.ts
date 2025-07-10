import { userPipes } from '@src/shared/lib/pipes/user';
import * as v from 'valibot';

const { firstname, lastname, middlename, phone, email, city } = userPipes;

export const ProfileFormSchema = v.object({
	firstname,
	lastname,
	middlename,
	phone,
	email,
	city,
});
