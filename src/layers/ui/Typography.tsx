import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

const styles = cva('', {
	variants: {
		color: {
			primary: 'text-black dark:text-white',
			error: 'text-red-500',
			invert: 'text-white dark:text-black',
		},
		variant: {
			h1: 'text-4xl font-bold',
			h2: 'text-3xl font-bold',
			h3: 'text-2xl font-semibold',
			p_12_regular: 'text-xs font-normal',
			p_14_medium: 'text-sm font-medium',
			p_14_regular: 'text-sm font-normal',
			p_16_medium: 'text-base font-medium',
			p_16_regular: 'text-base font-normal',
			p_24_light: 'text-2xl font-light',
			p_24_medium: 'text-2xl font-medium',
		},
		underline: {
			true: 'underline',
			false: null,
		},
	},
	defaultVariants: {
		color: 'primary',
		underline: false,
	},
});

type TypographyVariants = VariantProps<typeof styles>;

type TypographyProps<Tag extends TypographyTag> = ComponentProps<Tag> &
	TypographyVariants & {
		tag?: TypographyTag;
		variant: NonNullable<TypographyVariants['variant']>;
	};

export const Typography = <Tag extends TypographyTag = 'p'>({
	tag = 'p',
	variant,
	color,
	underline,
	className,
	children,
	...props
}: TypographyProps<Tag>) => {
	const Component = tag;
	const variants = {color, variant, underline};

	return (
		<Component
			className={clsx(className, styles(variants))}
			{...props}
		>
			{children}
		</Component>
	);
};
