import { Label, Slider, SliderRange, SliderThumb, SliderTrack, Typography } from '@src/layers/ui';
import { useUnit } from 'effector-react';

import { $price, setPrice } from '../../store/paramsStore';

export const Price = () => {
	const price = useUnit($price);

	return (
		<Label>
			<Typography variant="p_14_regular">Стоимость</Typography>
			<Slider
				max={10000}
				min={1000}
				step={100}
				value={[price]}
				onValueChange={(value) => setPrice(value[0])}
			>
				<SliderTrack>
					<SliderRange />
				</SliderTrack>
				<SliderThumb />
			</Slider>
			<div className="flex items-center justify-between gap-2">
				<Typography variant="p_12_regular" color="secondary">
					1 000 ₽
				</Typography>
				{price && (
					<Typography variant="p_12_regular" color="primary">
						{price} ₽
					</Typography>
				)}
				<Typography variant="p_12_regular" color="secondary">
					10 000 ₽
				</Typography>
			</div>
		</Label>
	);
};
