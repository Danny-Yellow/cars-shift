import type { ComponentProps } from 'react';

export const ChevronLeft = (props: ComponentProps<'svg'>) => (
	<svg
		fill="none"
		height="25"
		width="25"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 25 25"
		{...props}
	>
		<path
			d="M16.5584 7.91L15.1484 6.5L9.14844 12.5L15.1484 18.5L16.5584 17.09L11.9784 12.5L16.5584 7.91Z"
			fill="#97A1AF"
		/>
	</svg>
);
