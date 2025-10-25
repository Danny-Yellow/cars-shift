import type { ComponentProps } from 'react';

import { RentDate } from '@src/layers/components';
import { Settings } from '@src/layers/components/icons';
import {
	Button,
	Label,
	Popover,
	PopoverAnchor,
	PopoverContent,
	PopoverTrigger,
	TextField,
	Typography,
} from '@src/layers/ui';
import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { useState } from 'react';

import { $date, $search, changeSearch, setDate } from '../../store/paramsStore';
import { Filter } from './Filter';

export const Options = ({ className, ...props }: ComponentProps<'div'>) => {
	const search = useUnit($search);
	const date = useUnit($date);

	const [open, setOpen] = useState(false);

	return (
		<Popover onOpenChange={setOpen} open={open}>
			<PopoverAnchor asChild>
				<div
					className={clsx(
						'bg-gray-90 dark:bg-gray-30 xs:bg-white xs:dark:bg-black xs:px-0 flex items-end gap-4 rounded-2xl px-6 py-4 sm:flex-col sm:gap-6',
						className,
					)}
					{...props}
				>
					<Label className="w-full">
						<Typography variant="p_14_regular">Поиск</Typography>
						<TextField
							value={search}
							onChange={(event) => changeSearch(event.target.value)}
							placeholder="Поиск"
						/>
					</Label>
					<RentDate date={date} setDate={setDate} />
					<PopoverTrigger asChild>
						<Button
							className="h-14 max-w-48 sm:max-w-full"
							variant="contained"
							color="secondary"
							startIcon={<Settings />}
						>
							Фильтры
						</Button>
					</PopoverTrigger>
				</div>
			</PopoverAnchor>
			<PopoverContent
				style={{
					width: 'var(--radix-popover-trigger-width)',
				}}
				className="mt-2 rounded-2xl"
				forceMount
			>
				<Filter onShow={() => setOpen(false)} />
			</PopoverContent>
		</Popover>
	);
};
