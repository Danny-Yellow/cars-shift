import type { Profile, ProfileUser } from '@src/shared/types';

import { api } from '../instance';

export interface UpdateProfile {
	phone: string;
	profile: Profile;
}

export interface UpdateProfileResponse extends DefaultResponse {
	user: ProfileUser;
}

export const updateProfile = ({ data, config }: AxiosRequestConfig<undefined, UpdateProfile>) =>
	api.patch<UpdateProfileResponse>('/users/profile', data, config);
