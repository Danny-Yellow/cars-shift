export type Brand =
	| 'Garden car'
	| 'Geely'
	| 'Grocery cart'
	| 'Haier'
	| 'Haval'
	| 'Hyundai'
	| 'Invalid'
	| 'Kia'
	| 'Mercedes'
	| 'Volkswagen';
export type Color = 'black' | 'blue' | 'grey' | 'orange' | 'red' | 'silver' | 'white';
export type BodyType = 'cabriolet' | 'coupe' | 'hatchback' | 'sedan' | 'suv';
export type Transmission = 'automatic' | 'manual';
export type Steering = 'left' | 'right';

export interface BaseCar {
	bodyType: BodyType;
	brand: Brand;
	color: Color;
	transmission: Transmission;
}

export interface Car extends BaseCar {
	id: string;
	location: string;
	name: string;
	price: number;
	steering: Steering;
	media: {
		url: string;
		isCover: boolean;
	}[];
	meta: {
		total: number;
		page: number;
		limit: number;
		totalPages: number;
	};
}
