import type { ProfileUser } from '@src/shared/types/entities';

import { api } from '../instance';

export interface GetSessionResponse extends DefaultResponse {
	user: ProfileUser;
}

export const getSession = ({ config }: AxiosRequestConfig) =>
	api.get<GetSessionResponse>('/users/session', config);
