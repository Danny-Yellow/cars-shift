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

export interface BookingUser extends BaseUser {
	birthdate: string;
	comment: string;
	email: string;
}
