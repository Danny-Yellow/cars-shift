import { Palette } from '@src/layers/components';
import {
	Button,
	Label,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Toggle,
	ToggleItem,
	Typography,
} from '@src/layers/ui';
import { useUnit } from 'effector-react';

import type { Filter as TFilter } from '../../types/filter';

import { BODY_TYPES, BRANDS, COLORS } from '../../constants/filter';
import {
	$filter,
	resetFilter,
	setBodyType,
	setBrand,
	setColors,
	setTransmission,
	showCars,
} from '../../store/paramsStore';
import { Price } from './Price';

interface FilterProps {
	onShow?: () => void;
}

export const Filter = ({ onShow }: FilterProps) => {
	const filter = useUnit($filter);

	return (
		<>
			<div className="xs:grid-cols-1 grid grid-cols-2 gap-6">
				<Label>
					<Typography variant="p_14_regular">Марка</Typography>
					<Select
						value={filter.brand ?? ''}
						onValueChange={(value: TFilter['brand']) => setBrand(value)}
					>
						<SelectTrigger>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{BRANDS.map((mark) => (
								<SelectItem key={mark} value={mark}>
									{mark}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</Label>
				<Label>
					<Typography variant="p_14_regular">Тип кузова</Typography>
					<Select
						value={filter.bodyType ?? ''}
						onValueChange={(value: TFilter['bodyType']) => setBodyType(value)}
					>
						<SelectTrigger>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{Object.entries(BODY_TYPES).map(([key, value]) => (
								<SelectItem key={key} value={key}>
									{value}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</Label>
				<Label>
					<Typography variant="p_14_regular">Коробка передач</Typography>
					<Toggle
						defaultValue="any"
						type="single"
						value={filter.transmission}
						onValueChange={(value: TFilter['transmission']) => setTransmission(value)}
					>
						<ToggleItem value="any">Любая</ToggleItem>
						<ToggleItem value="automatic">Автомат</ToggleItem>
						<ToggleItem value="manual">Механика</ToggleItem>
					</Toggle>
				</Label>
				<Price />
				<Label>
					<Typography variant="p_14_regular">Цвет</Typography>
					<Palette
						type="multiple"
						value={filter.colors ?? []}
						colors={COLORS}
						onValueChange={(value) => {
							setColors(value as any);
						}}
					/>
				</Label>
			</div>
			<div className="xs:flex-col mt-10 flex justify-between gap-4 pb-4">
				<Button size="lg" variant="outlined" onClick={() => resetFilter()}>
					Сбросить все фильтры
				</Button>
				<Button
					size="lg"
					variant="contained"
					onClick={() => {
						showCars();
						onShow?.();
					}}
				>
					Показать
				</Button>
			</div>
		</>
	);
};
