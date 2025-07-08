import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

const styles = cva('border-gray-70 relative size-10 cursor-pointer rounded-full border-1', {
	variants: {
		color: {
			black: "after:absolute after:inset-0.5 after:rounded-full after:bg-black after:content-['']",
			white: "after:absolute after:inset-0.5 after:rounded-full after:bg-white after:content-['']",
			red: "after:absolute after:inset-0.5 after:rounded-full after:bg-red-500 after:content-['']",
			silver:
				"after:absolute after:inset-0.5 after:rounded-full after:bg-gray-400 after:content-['']",
			blue: "after:absolute after:inset-0.5 after:rounded-full after:bg-blue-500 after:content-['']",
			grey: "after:absolute after:inset-0.5 after:rounded-full after:bg-gray-600 after:content-['']",
			orange:
				"after:absolute after:inset-0.5 after:rounded-full after:bg-orange-500 after:content-['']",
		},
		isSelected: {
			true: 'border-black',
			false: 'border-gray-70',
		},
	},
});

type ColorVariants = VariantProps<typeof styles>;

export type Colors = ColorVariants['color'];

export const Color = ({
	className,
	color,
	isSelected = false,
	...props
}: ComponentProps<'div'> & ColorVariants) => (
	<div className={clsx(className, styles({ color, isSelected }))} {...props}>
		{isSelected && (
			<span className="pointer-events-none absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
				<span className="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-500/60" />
				<svg
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					fill="none"
					height="20"
					width="20"
					viewBox="0 0 20 20"
				>
					<path
						d="M5 10.5L9 14.5L15 7.5"
						stroke="#fff"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
					/>
				</svg>
			</span>
		)}
	</div>
);
