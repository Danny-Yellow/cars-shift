import type { ReactNode } from 'react';

import { Container } from '@src/layers/ui/Container';
import { Outlet } from 'react-router';

interface LayoutProps {
	header: ReactNode;
}

export const RootLayout = ({ header }: LayoutProps) => (
	<>
		<header>{header}</header>
		<main className='mt-12'>
			<Container>
				<Outlet />
			</Container>
		</main>
	</>
);
