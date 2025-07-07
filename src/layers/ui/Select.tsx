import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';

import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDown } from '@src/layers/components/icons';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';

const triggerStyles = cva(
	'outline-gray-70 flex w-full cursor-pointer items-center justify-between rounded-lg bg-white outline-1',
	{
		variants: {
			padding: {
				base: 'p-3',
			},
		},
		defaultVariants: {
			padding: 'base',
		},
	},
);

type TriggerVariants = VariantProps<typeof triggerStyles>;

export const Select = RadixSelect.Root;

export const SelectValue = RadixSelect.Value;

export const SelectTrigger = ({
	className,
	withChevron = true,
	startIcon = null,
	children,
	padding,
	asChild = false,
	...props
}: ComponentProps<typeof RadixSelect.Trigger> & {
	withChevron?: boolean;
	startIcon?: ReactNode;
} & TriggerVariants) => (
	<RadixSelect.Trigger className={clsx(className, triggerStyles({ padding }))} {...props}>
		<div className="flex gap-1">
			{startIcon}
			{asChild ? children : <p className="leading-5">{children}</p>}
		</div>

		{withChevron && (
			<RadixSelect.Icon asChild>
				<ChevronDown />
			</RadixSelect.Icon>
		)}
	</RadixSelect.Trigger>
);

export const SelectContent = ({
	className,
	position = 'popper',
	...props
}: ComponentProps<typeof RadixSelect.Content>) => (
	<RadixSelect.Portal>
		<RadixSelect.Content
			className={clsx(
				className,
				'animate-in fade-in-0 slide-in-from-top-2 mt-2 w-[var(--radix-select-trigger-width)] bg-white duration-200',
			)}
			position={position}
			{...props}
		/>
	</RadixSelect.Portal>
);

export const SelectViewport = RadixSelect.Viewport;

export const SelectItem = ({
	children,
	className,
	...props
}: ComponentProps<typeof RadixSelect.Item>) => (
	<RadixSelect.Item
		className={clsx('hover:bg-gray-90 cursor-pointer rounded p-2 outline-none', className)}
		{...props}
	>
		<RadixSelect.ItemText>{children}</RadixSelect.ItemText>
	</RadixSelect.Item>
);
