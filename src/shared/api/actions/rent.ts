import type { BookingUser, Date, Location, Rent } from '@src/shared/types/entities';

import { api } from '../instance';

export interface RentRequest extends Location, BookingUser, Date {
	carId: string;
}

export interface RentResponse extends DefaultResponse {
	rent: Rent;
}

export const rent = ({ config, data }: AxiosRequestConfig<undefined, RentRequest>) =>
	api.post<RentResponse>('/cars/rent', data, config);
