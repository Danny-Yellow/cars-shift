type Brand = 'Geely' | 'Haval' | 'Hyundai' | 'Kia' | 'Volkswagen';
type Color = 'black' | 'blue' | 'grey' | 'orange' | 'red' | 'silver' | 'white';
type BodyType = 'cabriolet' | 'coupe' | 'hatchback' | 'sedan' | 'suv';

export interface BaseCar {
	bodyType: BodyType;
	brand: Brand;
	color: Color;
	transmission: 'automatic' | 'manual';
}

export interface Car extends BaseCar{
	id: string;
	location: string;
	name: string;
	price: number;
	steering: 'left' | 'right';
	media: {
		url: string;
		isCover: boolean;
	};
	meta: {
		total: number;
		page: number;
		limit: number;
		totalPages: number;
	};
}
