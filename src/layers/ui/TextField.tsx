import type { VariantProps } from 'class-variance-authority';
import type { Component, ComponentProps } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

const textFieldStyles = cva(
	'outline-gray-70 dark:text-gray-70 dark:placeholder:text-gray-70 rounded-md bg-white px-3 py-3 text-black outline-1 placeholder:text-gray-50 dark:bg-black',
	{
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
	},
);

type TextFieldVariants = VariantProps<typeof textFieldStyles>;

interface TextFieldProps extends Omit<ComponentProps<'input'>, 'size'>, TextFieldVariants {
	component?: Component;
}

export const TextField = ({ className, size, hasError = false, ...props }: TextFieldProps) => (
	<input className={clsx(className, textFieldStyles({ size, hasError }))} type="text" {...props} />
);
