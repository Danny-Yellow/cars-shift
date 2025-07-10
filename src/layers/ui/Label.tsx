import type { ComponentProps } from 'react';

import clsx from 'clsx';

export const Label = ({ className, ...props }: ComponentProps<'label'>) => (
	<label className={clsx(className, 'grid gap-1.5')} {...props} />
);
