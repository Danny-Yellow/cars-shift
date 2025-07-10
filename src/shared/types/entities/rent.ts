import type { Car } from './car';
import type { Date } from './date';
import type { Location } from './location';
import type { BookingUser } from './user';

export type RentStatus = 0 | 1;

export interface Rent extends Location, BookingUser, Date {
	carInfo: Car;
	status: RentStatus;
	totalPrice: number;
}
