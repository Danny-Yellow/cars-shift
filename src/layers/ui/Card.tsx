import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

const styles = cva('rounded-2xl p-4 px-12', {
	variants: {
		outlined: {
			false: null,
			true: 'outline-gray-70 outline-1',
		},
		color: {
			transparent: 'bg-transparent',
			primary: 'bg-gray-90',
		},
	},
	defaultVariants: {
		color: 'primary',
		outlined: false,
	},
});

type CardVariants = VariantProps<typeof styles>;

export const Card = ({
	className,
	outlined,
	color,
	...props
}: CardVariants & ComponentProps<'div'>) => {
	return <article className={clsx(className, styles({ outlined, color }))} {...props} />;
};
