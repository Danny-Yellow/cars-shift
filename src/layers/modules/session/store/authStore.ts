import type { Signin } from '@src/shared/types';

import { getSession, signin } from '@src/shared/api';
import { LOCAL_STORAGE_KEYS } from '@src/shared/constants';
import { createEffect, createEvent, createStore } from 'effector';

export const fetchSessionFx = createEffect(async () => {
	const result = await getSession({});
	return result.data;
});

export const signinFx = createEffect(async (data: Signin) => {
	const result = await signin({ data });
	return result.data;
});

export const resetAuth = createEvent();

export const $sessionStore = createStore({
	isAuth: false,
	user: {
		phone: '',
		firstname: '',
		middlename: '',
		lastname: '',
		email: '',
		city: '',
	},
})
	.on(fetchSessionFx.doneData, (_, { user }) => ({
		isAuth: true,
		user: {
			phone: user.phone ?? '',
			firstname: user.firstname ?? '',
			middlename: user.middlename ?? '',
			lastname: user.lastname ?? '',
			email: user.email ?? '',
			city: user.city ?? '',
		},
	}))
	.on(signinFx.doneData, (_, { user, token }) => {
		localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, token);

		return {
			isAuth: true,
			user: {
				phone: user.phone ?? '',
				firstname: user.firstname ?? '',
				middlename: user.middlename ?? '',
				lastname: user.lastname ?? '',
				email: user.email ?? '',
				city: user.city ?? '',
			},
		};
	})
	.reset(resetAuth);
