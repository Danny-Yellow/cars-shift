import type { ComponentProps } from 'react';

import { Settings } from '@src/layers/components/icons';
import { Button, TextField, TextFieldLabel, Typography } from '@src/layers/ui';
import clsx from 'clsx';
import { useUnit } from 'effector-react';

import { $search, changeSearch } from '../../store/paramsStore';
import { RentDate } from './RentDate';

export const Options = ({ className, ...props }: ComponentProps<'div'>) => {
	const search = useUnit($search);

	return (
		<div
			className={clsx('bg-gray-90 flex items-end gap-4 rounded-2xl px-6 py-4', className)}
			{...props}
		>
			<TextFieldLabel className="w-full">
				<Typography variant="p_14_regular">Поиск</Typography>
				<TextField
					value={search}
					onChange={(event) => changeSearch(event.target.value)}
					placeholder="Поиск"
				/>
			</TextFieldLabel>
			<RentDate />
			<Button
				className="h-14 max-w-48"
				variant="contained"
				color="secondary"
				startIcon={<Settings />}
			>
				Фильтры
			</Button>
		</div>
	);
};
