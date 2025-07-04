import type { ComponentProps } from 'react';

export const ChevronRight = (props: ComponentProps<'svg'>) => (
	<svg
		fill="none"
		height="25"
		width="25"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 25 25"
		{...props}
	>
		<path
			d="M10.5584 6.5L9.14844 7.91L13.7284 12.5L9.14844 17.09L10.5584 18.5L16.5584 12.5L10.5584 6.5Z"
			fill="#344051"
		/>
	</svg>
);
