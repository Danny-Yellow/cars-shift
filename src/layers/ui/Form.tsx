import type { ComponentProps } from 'react';

import clsx from 'clsx';

export const Form = ({ className, ...props }: ComponentProps<'form'>) => (
	<form className={clsx(className, 'grid max-w-[468px] gap-6')} {...props} />
);
