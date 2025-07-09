import { createOtp } from '@src/shared/api';
import { createEffect, createEvent, createStore } from 'effector';

export interface AuthState {
	isContinued: boolean;
	phone: string | null;
	retryDelay: number;
}

export const setPhone = createEvent<string>();
export const setIsContinued = createEvent<boolean>();
export const reset = createEvent();

export const createOtpFx = createEffect(async (phone: string) => {
	const result = await createOtp({ data: { phone } });
	return result.data;
});

export const $auth = createStore<AuthState>({
	phone: null,
	isContinued: false,
	retryDelay: 0,
})
	.on(setPhone, (state, phone) => ({ ...state, phone }))
	.on(setIsContinued, (state, isContinued) => ({ ...state, isContinued }))
	.on(createOtpFx.done, (state, { result }) => ({
		...state,
		isContinued: true,
		retryDelay: result.retryDelay,
	}))
	.reset(reset);
