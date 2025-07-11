import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

const spinnerStyles = cva('absolute inline-flex items-center justify-center');

const circleStyles = cva(
	'border-primary animate-spin rounded-full border-4 border-solid border-r-transparent',
	{
		variants: {
			size: {
				sm: 'h-7 w-7',
				md: 'h-12 w-12',
				lg: 'h-16 w-16',
			},
		},
		defaultVariants: {
			size: 'md',
		},
	},
);

interface SpinnerProps extends ComponentProps<'div'>, VariantProps<typeof circleStyles> {}

export const Spinner = ({ size = 'md', className, ...props }: SpinnerProps) => {
	return (
		<div className={clsx(spinnerStyles(), className)} {...props}>
			<div className={circleStyles({ size })} />
		</div>
	);
};
