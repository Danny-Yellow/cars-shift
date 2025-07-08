import type { ComponentProps } from 'react';

import * as Popover from '@radix-ui/react-popover';
import { Settings } from '@src/layers/components/icons';
import { Button, Label, TextField, Typography } from '@src/layers/ui';
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
		<Popover.Root onOpenChange={setOpen} open={open}>
			<Popover.Anchor asChild>
				<div
					className={clsx('bg-gray-90 flex items-end gap-4 rounded-2xl px-6 py-4', className)}
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
					<Popover.Trigger asChild>
						<Button
							className="h-14 max-w-48"
							variant="contained"
							color="secondary"
							startIcon={<Settings />}
						>
							Фильтры
						</Button>
					</Popover.Trigger>
				</div>
			</Popover.Anchor>
			<Popover.Portal>
				<Popover.Content
					style={{
						width: 'var(--radix-popover-trigger-width)',
					}}
					className="border-gray-70 mt-2 rounded-2xl border-1 bg-white p-6"
				>
					<Filter onShow={() => setOpen(false)} />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
};
