export interface BaseUser {
	firstname?: string;
	lastname?: string;
	middlename?: string;
	phone: string;
}

export interface ProfileUser extends BaseUser {
	city?: string;
	email?: string;
	phone: string;
}

export interface BookingUser {
	birthDate: string;
	comment: string;
	email: string;
	firstName: string;
	lastName: string;
	middleName: string;
	phone: string;
}
