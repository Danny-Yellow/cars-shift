import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

const buttonStyles = cva('inline-flex items-center justify-center rounded-2xl py-4 font-semibold text-center cursor-pointer', {
	variants: {
		variant: {
			contained: 'bg-primary hover:bg-primary/90 text-white',
			outlined: 'outline-gray-70 bg-transparent text-black outline-1',
		},
		size: {
			full: 'w-full',
			lg: 'px-6',
			sm: 'px-3',
		},
		isLoading: {
			true: 'pointer-events-none opacity-60',
			false: '',
		},
	},
	defaultVariants: {
		variant: 'contained',
		size: 'full',
		isLoading: false,
	},
});

type ButtonVariants = VariantProps<typeof buttonStyles>;

interface ButtonProps extends ComponentProps<'button'>, ButtonVariants {
	endIcon?: ReactNode;
	startIcon?: ReactNode;
}

export const Button = ({
	endIcon,
	startIcon,
	className,
	type = 'button',
	variant,
	size,
	isLoading = false,
	children,
	...props
}: ButtonProps) => (
	<button
		className={clsx(className, buttonStyles({ variant, size, isLoading }))}
		disabled={isLoading || props.disabled}
		type={type}
		{...props}
	>
		{isLoading && (
			<span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent align-middle" />
		)}
		{startIcon && <span>{startIcon}</span>}
		{children}
		{endIcon && <span>{endIcon}</span>}
	</button>
);
