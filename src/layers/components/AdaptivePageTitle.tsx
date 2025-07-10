import type { ReactNode } from 'react';

import { useDevice } from '@src/shared/hooks';

export const AdaptivePageTitle = ({
	children,
	mobileButton,
}: {
	children?: ReactNode;
	mobileButton?: ReactNode;
}) => {
	const { isMobile } = useDevice();

	return isMobile ? (
		<header className="flex items-center gap-8 sm:py-3">
			{isMobile && mobileButton}
			{children}
		</header>
	) : (
		children
	);
};
