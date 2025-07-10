import type { Car } from './car';
import type { Date } from './date';
import type { Location } from './location';
import type { BookingUser } from './user';

export interface Rent extends Location, BookingUser, Date {
	carInfo: Car;
	status: 0 | 1;
	totalPrice: number;
}
