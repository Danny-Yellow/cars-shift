import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router';

const styles = cva('flex items-center gap-4 sm:gap-2', {
	variants: {
		color: {
			primary: null,
			secondary: 'text-gray-60',
		},
		isActive: {
			false: null,
			true: 'text-primary',
		},
	},
	defaultVariants: {
		color: 'primary',
		isActive: false,
	},
});

type LinkVariants = VariantProps<typeof styles>;

interface LinkProps
	extends Omit<ComponentProps<typeof RouterLink>, keyof LinkVariants>,
		LinkVariants {
	startIcon?: ReactNode;
}

export const Link = ({ className, color, children, startIcon, isActive, ...props }: LinkProps) => {
	const variants = { color, isActive };

	return (
		<RouterLink {...props} className={clsx(className, styles(variants))}>
			{startIcon}
			{children}
		</RouterLink>
	);
};
