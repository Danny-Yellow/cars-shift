import type { ComponentProps } from 'react';

import clsx from 'clsx';

export const IconButton = ({ className, ...props }: ComponentProps<'button'>) => (
	<button className={clsx(className, 'grid place-items-center cursor-pointer')} {...props} />
);
