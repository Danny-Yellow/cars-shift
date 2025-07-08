import type { BodyType, Brand, Color } from '@src/shared/types';

export const BRANDS: Brand[] = [
	'Haval',
	'Hyundai',
	'Volkswagen',
	'Kia',
	'Geely',
	'Mercedes',
	'Garden car',
	'Grocery cart',
	'Haier',
];

export const BODY_TYPES: Record<BodyType, string> = {
	sedan: 'Седан',
	suv: 'Внедорожник',
	coupe: 'Купе',
	hatchback: 'Хэтчбек',
	cabriolet: 'Кабриолет',
};

export const COLORS: Color[] = ['black', 'white', 'red', 'silver', 'blue', 'grey', 'orange'];
