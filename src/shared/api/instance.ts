import { ENV } from '@src/shared/constants';
import axios from 'axios';

export const api = axios.create({
	baseURL: ENV.BASE_URL,
});