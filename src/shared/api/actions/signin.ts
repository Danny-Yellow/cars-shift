import type { ProfileUser, Signin } from '@src/shared/types/entities';

import { api } from '../instance';

export interface SigninResponse extends DefaultResponse {
	token: string;
	user: ProfileUser;
}

export const signin = ({ config, data }: AxiosRequestConfig<undefined, Signin>) =>
	api.post<SigninResponse>('/users/signin', data, config);
