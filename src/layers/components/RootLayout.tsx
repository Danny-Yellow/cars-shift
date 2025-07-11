import type { ReactNode } from 'react';

import { Container } from '@src/layers/ui/Container';
import { Outlet } from 'react-router';

interface RootLayoutProps {
	header: ReactNode;
}

export const RootLayout = ({ header }: RootLayoutProps) => (
	<>
		<header className="xs:hidden">{header}</header>
		<main className="xs:mt-0 mt-12">
			<Container>
				<Outlet />
			</Container>
		</main>
	</>
);
