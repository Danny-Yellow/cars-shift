import type { VariantProps } from 'class-variance-authority';
import type { Component, ComponentProps } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

const inputStyles = cva('outline-gray-70 rounded-md bg-white px-3 py-3 text-gray-50 outline-1', {
	variants: {
		size: {
			full: 'w-full',
		},
		hasError: {
			true: 'border-red-500 focus:ring-red-500',
			false: '',
		},
	},
	defaultVariants: {
		size: 'full',
		hasError: false,
	},
});

type InputVariants = VariantProps<typeof inputStyles>;

interface InputProps extends Omit<ComponentProps<'input'>, 'size'>, InputVariants {
	component?: Component;
}

export const Input = ({ className, size, hasError = false, ...props }: InputProps) => (
	<input className={clsx(className, inputStyles({ size, hasError }))} type="text" {...props} />
);

const labelStyles = cva('grid gap-1.5');

export const InputLabel = ({ className, ...props }: ComponentProps<'label'>) => (
	<label className={clsx(className, labelStyles())} {...props} />
);
