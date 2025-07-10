import type { Rent } from '@src/shared/types';

import { api } from '../instance';

interface RentsResponse extends DefaultResponse {
	rents: Rent[];
}

type RentResponse = DefaultResponse & Rent;

export const getRents = async (config?: AxiosRequestConfig) =>
	api.get<RentsResponse>('/cars/rent', config);

export const getRent = async (id: string, config?: AxiosRequestConfig) =>
	api.get<RentResponse>(`/cars/rent/${id}`, config);
