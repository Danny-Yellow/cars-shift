import type { ComponentProps } from 'react';

import clsx from 'clsx';

export const IconButton = ({ className, ...props }: ComponentProps<'button'>) => (
	<button className={clsx(className, 'grid cursor-pointer place-items-center')} {...props} />
);
