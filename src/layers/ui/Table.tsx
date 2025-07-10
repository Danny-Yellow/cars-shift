import type { ComponentProps } from 'react';

import clsx from 'clsx';

export const Table = ({ className, ...props }: ComponentProps<'table'>) => (
	<div className="w-full overflow-hidden">
		<table className={clsx('w-full min-w-[400px] border-collapse', className)} {...props} />
	</div>
);

export const TableHeader = ({ className, ...props }: ComponentProps<'thead'>) => (
	<thead className={clsx('text-left', className)} {...props} />
);

export const TableHead = ({ className, ...props }: ComponentProps<'th'>) => (
	<th
		className={clsx('leading-sm text-sm font-normal text-gray-50 first:pl-0 last:pr-0', className)}
		{...props}
	/>
);

export const TableBody = (props: ComponentProps<'tbody'>) => <tbody {...props} />;

export const TableRow = (props: ComponentProps<'tr'>) => <tr {...props} />;

export const TableCell = ({ className, ...props }: ComponentProps<'td'>) => (
	<td
		className={clsx('border-gray-90 leading-base border-b py-6 first:pl-0 last:pr-0', className)}
		{...props}
	/>
);
