import type { BaseCar, Car } from '@src/shared/types/car';

import { api } from '../instance';


export interface CarsQuery extends Partial<BaseCar> {
	limit?: number;
	maxPrice?: number;
	minPrice?: number;
	page?: number;
	search?: string;
}

export const getCars = async (config?: AxiosRequestConfig<CarsQuery>) =>
	api.get<DefaultResponse<Car[]>>('/cars/info', config);

export const getCar = async (id: string, config?: AxiosRequestConfig) =>
	api.get<DefaultResponse<Car>>(`/cars/info/${id}`, config);
