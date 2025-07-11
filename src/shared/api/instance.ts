import { ENV, LOCAL_STORAGE_KEYS } from '@src/shared/constants';
import axios from 'axios';

export const api = axios.create({
	baseURL: ENV.BASE_URL,
});

api.interceptors.request.use(
	(request) => {
		const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
		if (token) {
			request.headers.Authorization = `Bearer ${token}`;
		}
		return request;
	},
	(error) => Promise.reject(error),
);

export const apiAddress = axios.create({ baseURL: ENV.GEO_URL });

apiAddress.interceptors.request.use(
	(request) => {
		const token = ENV.GEO_TOKEN;
		request.headers.Authorization = `Token ${token}`;
		return request;
	},
	(error) => Promise.reject(error),
);
