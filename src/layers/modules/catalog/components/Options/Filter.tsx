import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Slider,
	SliderRange,
	SliderThumb,
	SliderTrack,
	TextFieldLabel,
	Typography,
} from '@src/layers/ui';

const marks = [
	'Haval',
	'Hyundai',
	'Volkswagen',
	'Kia',
	'Geely',
	'Mercedes',
	'Garden car',
	'Grocery cart',
	'Haier',
	'Invalid',
];

const bodyTypes = {
	sedan: 'Седан',
	suv: 'Внедорожник',
	coupe: 'Купе',
	hatchback: 'Хэтчбек',
	cabriolet: 'Кабриолет',
};

export const Filter = () => {
	return (
		<div className="grid grid-cols-2 gap-6">
			<TextFieldLabel>
				<Typography variant="p_14_regular">Марка</Typography>
				<Select>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{marks.map((mark) => (
							<SelectItem key={mark} value={mark}>
								{mark}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</TextFieldLabel>
			<TextFieldLabel>
				<Typography variant="p_14_regular">Тип кузова</Typography>
				<Select>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{Object.entries(bodyTypes).map(([key, value]) => (
							<SelectItem key={key} value={key}>
								{value}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</TextFieldLabel>
			<TextFieldLabel>
				<Typography variant="p_14_regular">Стоимость</Typography>
				<Slider max={10000} min={3000} step={100}>
					<SliderTrack>
						<SliderRange />
					</SliderTrack>
					<SliderThumb />
				</Slider>
				<div className="flex items-center justify-between gap-2">
					<Typography variant="p_12_regular" color="secondary">
						3 000 ₽
					</Typography>
					<Typography variant="p_12_regular" color="secondary">
						10 000 ₽
					</Typography>
				</div>
			</TextFieldLabel>
		</div>
	);
};
