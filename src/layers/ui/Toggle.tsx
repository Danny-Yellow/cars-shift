import type { ComponentProps } from 'react';

import * as RadixToggle from '@radix-ui/react-toggle-group';
import clsx from 'clsx';

export const Toggle = ({ className, ...props }: ComponentProps<typeof RadixToggle.Root>) => (
	<RadixToggle.Root
		className={clsx(className, 'bg-gray-90 flex rounded-2xl p-0.5 text-sm')}
		{...props}
	/>
);

export const ToggleItem = ({ className, ...props }: ComponentProps<typeof RadixToggle.Item>) => (
	<RadixToggle.Item
		className={clsx(
			className,
			'bg-gray-90 w-full cursor-pointer rounded-[14px] px-4 py-2.5 text-gray-50 transition-colors data-[state=on]:bg-white data-[state=on]:text-black',
		)}
		{...props}
	/>
);
