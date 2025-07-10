import type { ComponentProps } from 'react';

import * as RadixSlider from '@radix-ui/react-slider';
import clsx from 'clsx';

export const Slider = ({ className, ...props }: ComponentProps<typeof RadixSlider.Root>) => (
	<RadixSlider.Root
		className={clsx('relative flex h-6 w-full touch-none items-center select-none', className)}
		{...props}
	/>
);

export const SliderTrack = ({ className, ...props }: ComponentProps<typeof RadixSlider.Track>) => (
	<RadixSlider.Track
		className={clsx(className, 'bg-gray-70 relative h-1 grow-1 rounded-full')}
		{...props}
	/>
);

export const SliderRange = ({ className, ...props }: ComponentProps<typeof RadixSlider.Range>) => (
	<RadixSlider.Range
		className={clsx(className, 'absolute h-full rounded-full bg-black dark:bg-white')}
		{...props}
	/>
);

export const SliderThumb = ({ className, ...props }: ComponentProps<typeof RadixSlider.Thumb>) => (
	<RadixSlider.Thumb
		className={clsx(
			className,
			'flex h-6 w-6 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black',
		)}
		{...props}
	>
		<svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				d="M9.39115 14.9255C9.58966 15.123 9.59006 15.4441 9.39206 15.6421V15.6421C9.19441 15.8398 8.87395 15.8398 8.6763 15.6421L5.73981 12.7056C5.34986 12.3157 5.3492 11.6837 5.73834 11.2929L8.65955 8.35946C8.85713 8.16106 9.17823 8.16072 9.37622 8.35871V8.35871C9.57392 8.5564 9.57392 8.87693 9.37622 9.07463L6.45085 12L9.39115 14.9255Z"
				fill="currentColor"
			/>
			<path
				d="M14.6772 14.9255C14.4787 15.123 14.4783 15.4441 14.6763 15.6421V15.6421C14.874 15.8398 15.1944 15.8398 15.3921 15.6421L18.3285 12.7056C18.7185 12.3157 18.7192 11.6837 18.33 11.2929L15.4088 8.35946C15.2112 8.16106 14.8901 8.16072 14.6921 8.35871V8.35871C14.4944 8.5564 14.4944 8.87693 14.6921 9.07463L17.6175 12L14.6772 14.9255Z"
				fill="currentColor"
			/>
		</svg>
	</RadixSlider.Thumb>
);
