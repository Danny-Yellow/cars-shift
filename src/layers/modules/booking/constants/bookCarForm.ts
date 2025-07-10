import type { Location } from '@src/shared/types/entities';

interface BookCarField {
	label: string;
	name: keyof Location;
	placeholder: string;
}

export const bookCarFields: BookCarField[] = [
	{
		label: 'Место получения',
		name: 'pickupLocation',
		placeholder: 'Место получения',
	},
	{
		label: 'Место возврата',
		name: 'returnLocation',
		placeholder: 'Место возврата',
	},
];
