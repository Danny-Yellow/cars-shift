import type { BodyType, Brand, Color, Steering } from '@src/shared/types/entities';

export const TRANSMISSIONS_RU = {
	automatic: 'Автомат',
	manual: 'Механика',
};

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

export const COLORS: Record<Color, string> = {
	black: 'Черный',
	white: 'Белый',
	red: 'Красный',
	silver: 'Серебристый',
	blue: 'Синий',
	grey: 'Серый',
	orange: 'Оранжевый',
};

export const STEERING_RU: Record<Steering, string> = {
	left: 'Левый',
	right: 'Правый',
};
