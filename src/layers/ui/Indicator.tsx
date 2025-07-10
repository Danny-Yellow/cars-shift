import type { ComponentProps } from 'react';

import { cva } from 'class-variance-authority';

export type IndicatorColor = 'attention' | 'error' | 'success';

interface IndicatorProps extends ComponentProps<'span'> {
	color: IndicatorColor;
}
const styles = cva('inline-block h-2 w-2 rounded-full', {
	variants: {
		color: {
			error: 'bg-red-500',
			attention: 'bg-yellow-500',
			success: 'bg-green-500',
		},
	},
});
export const Indicator = ({ className, color, ...props }: IndicatorProps) => {
	return <span className={styles({ color })} {...props} />;
};
