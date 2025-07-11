import { api } from '../instance';

export const cancelRent = ({
	data,
	config,
}: AxiosRequestConfig<undefined, { carRentId: string }>) =>
	api.put<DefaultResponse>('/cars/rent/cancel', data, config);
