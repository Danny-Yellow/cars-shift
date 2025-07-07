import type { ComponentProps } from 'react';

export const ChevronDown = (props: ComponentProps<'svg'>) => (
	<svg
		fill="none"
		height="20"
		width="20"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		{...props}
	>
		<path
			d="M16.6868 7.49998L11.5605 12.6262C11.17 13.0167 10.5369 13.0167 10.1463 12.6262L5.0201 7.49998"
			stroke="#637083"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.5"
		/>
	</svg>
);
