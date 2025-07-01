import type { ComponentProps } from 'react';

export const Container = ({ ...props }: ComponentProps<'div'>) => (
	<div className="max-w-[960px] sm:px-4 md:px-8" {...props} />
);
