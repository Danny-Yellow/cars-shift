import type { ComponentProps } from 'react';

import { Settings } from '@src/layers/components/icons';
import { Button, Input, InputLabel, Typography } from '@src/layers/ui';
import clsx from 'clsx';

export const Options = ({ className, ...props }: ComponentProps<'div'>) => (
	<div
		className={clsx('bg-gray-90 flex items-end gap-4 rounded-2xl px-6 py-4', className)}
		{...props}
	>
		<InputLabel className="w-full">
			<Typography variant="p_14_regular">Поиск</Typography>
			<Input placeholder="Поиск" />
		</InputLabel>
		<InputLabel className="w-full">
			<Typography variant="p_14_regular">Дата аренды</Typography>
			<Input type="date" placeholder="Выберите дату"/>
		</InputLabel>
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
