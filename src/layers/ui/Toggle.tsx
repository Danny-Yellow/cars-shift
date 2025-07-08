import type { ComponentProps } from 'react';

import * as RadixToggle from '@radix-ui/react-toggle-group';
import clsx from 'clsx';

export const Toggle = ({ className, ...props }: ComponentProps<typeof RadixToggle.Root>) => (
	<RadixToggle.Root
		className={clsx(className, 'bg-gray-90 dark:bg-gray-30 flex rounded-2xl p-0.5 text-sm')}
		{...props}
	/>
);

const darkToggleItem =
	'dark:bg-gray-30 dark:text-gray-70 dark:data-[state=on]:bg-black dark:data-[state=on]:text-white';

export const ToggleItem = ({ className, ...props }: ComponentProps<typeof RadixToggle.Item>) => (
	<RadixToggle.Item
		className={clsx(
			className,
			darkToggleItem,
			'bg-gray-90 w-full cursor-pointer rounded-[14px] px-4 py-2.5 text-gray-50 transition-colors data-[state=on]:bg-white data-[state=on]:text-black',
		)}
		{...props}
	/>
);
