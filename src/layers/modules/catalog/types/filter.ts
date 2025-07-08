import type { BodyType, Brand, Color, Transmission } from '@src/shared/types';


export interface Filter {
	bodyType?: BodyType;
	brand?: Brand;
	colors?: Color[];
	transmission: 'any' | Transmission;
}
