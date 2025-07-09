import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

const buttonStyles = cva(
	'inline-flex cursor-pointer items-center justify-center rounded-2xl py-4 text-center font-semibold',
	{
		variants: {
			variant: {
				contained: 'text-white',
				outlined: 'outline-gray-70 bg-transparent text-black outline-1 dark:text-white',
			},
			size: {
				full: 'w-full',
				lg: 'w-80',
			},
			isLoading: {
				true: 'pointer-events-none opacity-60',
				false: null,
			},
			color: {
				primary: null,
				secondary: null,
			},
		},
		compoundVariants: [
			{
				variant: 'contained',
				color: 'primary',
				className: 'bg-primary',
			},
			{
				variant: 'contained',
				color: 'secondary',
				className: 'bg-gray-30 dark:bg-gray-80 dark:text-black',
			},
		],
		defaultVariants: {
			variant: 'contained',
			size: 'full',
			isLoading: false,
			color: 'primary',
		},
	},
);

type ButtonVariants = VariantProps<typeof buttonStyles>;

interface ButtonProps extends Omit<ComponentProps<'button'>, 'color'>, ButtonVariants {
	endIcon?: ReactNode;
	startIcon?: ReactNode;
}

export const Button = ({
	endIcon,
	startIcon,
	className,
	type = 'button',
	variant,
	color,
	size,
	isLoading = false,
	children,
	disabled,
	...props
}: ButtonProps) => (
	<button
		className={clsx(
			className,
			buttonStyles({ variant, size, isLoading, color }),
			disabled && 'opacity-50',
		)}
		disabled={isLoading || disabled}
		type={type}
		{...props}
	>
		{isLoading && (
			<span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent align-middle" />
		)}
		<span className="flex items-center gap-2">
			{startIcon && <span>{startIcon}</span>}
			{children}
			{endIcon && <span>{endIcon}</span>}
		</span>
	</button>
);
