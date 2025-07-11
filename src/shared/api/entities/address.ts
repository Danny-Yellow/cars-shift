import { apiAddress } from '../instance';

interface AddressQuery {
	count?: number;
	language?: string;
	query: string;
}

interface AddressResponse {
	suggestions: {
		value: string;
	}[];
}

export const getAddresses = async (config?: AxiosRequestConfig<AddressQuery>) =>
	apiAddress.get<AddressResponse>('/address', config);
