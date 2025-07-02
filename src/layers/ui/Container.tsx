import type { ComponentProps } from 'react';

import clsx from 'clsx';

export const Container = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={clsx(className, 'mx-auto max-w-[960px]')} {...props} />
);
