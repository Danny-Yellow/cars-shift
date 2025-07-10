import type { ComponentProps } from 'react';

import clsx from 'clsx';

export const PropertyColumn = (props: ComponentProps<'div'>) => (
	<div className="grid gap-6" {...props} />
);

export const PropertyItem = ({ property, className, children }: ComponentProps<'div'>) => (
	<div className={clsx(className, 'grid gap-0.5')}>
		<p className="text-xs text-gray-50">{property}</p>
		<p>{children}</p>
	</div>
);
