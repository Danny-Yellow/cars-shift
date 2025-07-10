import type { Signin, User } from '@src/shared/types';

import { api } from '../instance';

export interface SigninResponse extends DefaultResponse {
	token: string;
	user: User;
}

export const signin = ({ config, data }: AxiosRequestConfig<undefined, Signin>) =>
	api.post<SigninResponse>('/users/signin', data, config);
