import type { ComponentProps } from 'react';

import { Settings } from '@src/layers/components/icons';
import {
	Button,
	Label,
	Popover,
	PopoverAnchor,
	PopoverContent,
	PopoverPortal,
	PopoverTrigger,
	TextField,
	Typography,
} from '@src/layers/ui';
import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { useState } from 'react';

import { $search, changeSearch } from '../../store/paramsStore';
import { Filter } from './Filter';
import { RentDate } from './RentDate';

export const Options = ({ className, ...props }: ComponentProps<'div'>) => {
	const search = useUnit($search);
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
					<RentDate />
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
			<PopoverPortal>
				<PopoverContent
					style={{
						width: 'var(--radix-popover-trigger-width)',
					}}
					className="border-gray-70 mt-2 rounded-2xl border-1 bg-white p-6 dark:bg-black"
				>
					<Filter onShow={() => setOpen(false)} />
				</PopoverContent>
			</PopoverPortal>
		</Popover>
	);
};
