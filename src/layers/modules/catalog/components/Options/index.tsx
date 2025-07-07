import type { ComponentProps } from 'react';

import * as Popover from '@radix-ui/react-popover';
import { Settings } from '@src/layers/components/icons';
import {
	Button,
	TextField,
	TextFieldLabel,
	Typography,
} from '@src/layers/ui';
import clsx from 'clsx';
import { useUnit } from 'effector-react';

import { $search, changeSearch } from '../../store/paramsStore';
import { Filter } from './Filter';
import { RentDate } from './RentDate';

export const Options = ({ className, ...props }: ComponentProps<'div'>) => {
	const search = useUnit($search);

	return (
		<Popover.Root open>
			<Popover.Anchor asChild>
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
					<Filter />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
};
