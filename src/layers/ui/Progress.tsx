import type { ComponentProps } from 'react';

import * as RadixProgress from '@radix-ui/react-progress';
import clsx from 'clsx';

export const Progress = ({
	className,
	value,
	max = 100,
	...props
}: ComponentProps<typeof RadixProgress.Root>) => (
	<RadixProgress.Root
		className={clsx(
			className,
			'relative h-1 w-full transform-gpu overflow-hidden rounded-md bg-gray-200',
		)}
		max={max}
		value={value}
		{...props}
	>
		<RadixProgress.Indicator
			className={clsx(
				className,
				'h-full w-full bg-green-500 transition-transform duration-660 ease-out',
			)}
			style={{ transform: `translateX(-${100 - (value / max) * 100}%)` }}
			{...props}
		/>
	</RadixProgress.Root>
);
