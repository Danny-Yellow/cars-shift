import type { ComponentProps } from 'react';

import * as RadixPopover from '@radix-ui/react-popover';
import clsx from 'clsx';

export const Popover = (props: ComponentProps<typeof RadixPopover.Root>) => (
	<RadixPopover.Root {...props} />
);

export const PopoverTrigger = ({
	className,
	...props
}: ComponentProps<typeof RadixPopover.Trigger>) => (
	<RadixPopover.Trigger className={className} {...props} />
);

export const PopoverContent = ({
	className,
	...props
}: ComponentProps<typeof RadixPopover.Content>) => (
	<RadixPopover.Content
		className={clsx('border-gray-70 border-1 bg-white p-4 shadow-2xl dark:bg-black', className)}
		{...props}
	/>
);

export const PopoverAnchor = ({
	className,
	...props
}: ComponentProps<typeof RadixPopover.Anchor>) => (
	<RadixPopover.Anchor className={className} {...props} />
);

export const PopoverPortal = (props: ComponentProps<typeof RadixPopover.Portal>) => (
	<RadixPopover.Portal {...props} />
);
