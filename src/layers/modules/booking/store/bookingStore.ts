import type { BookingUser, Location } from '@src/shared/types';

import { createEvent, createStore } from 'effector';

export const incrementStep = createEvent();
export const decrementStep = createEvent();
export const setStep = createEvent<number>();
export const setLocation = createEvent<Location>();
export const setPerson = createEvent<BookingUser>();
export const resetPerson = createEvent();
export const resetLocation = createEvent();
export const resetCurrentStep = createEvent();

export const $currentStep = createStore<number>(1)
	.on(incrementStep, (state) => state + 1)
	.on(decrementStep, (state) => state - 1)
	.on(setStep, (_, step) => step)
	.reset(resetCurrentStep);

export const $location = createStore<Location>({
	pickupLocation: '',
	returnLocation: '',
})
	.on(setLocation, (_, location) => location)
	.reset(resetLocation);

export const $person = createStore<BookingUser>({
	birthdate: '',
	comment: '',
	email: '',
	firstname: '',
	lastname: '',
	middlename: '',
	phone: '',
})
	.on(setPerson, (_, person) => person)
	.reset(resetPerson);
