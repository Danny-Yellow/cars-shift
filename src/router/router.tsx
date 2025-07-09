import type { RouteObject } from 'react-router';

import { RootLayout } from '@src/layers/components/RootLayout';
import { AuthTopNavigation } from '@src/layers/modules/session/components';
import { AuthPage } from '@src/layers/pages/AuthPage';
import { CatalogPage } from '@src/layers/pages/CatalogPage';
import { ROUTES } from '@src/shared/constants';
import { createBrowserRouter, Navigate } from 'react-router';

const routes = [
	{
		element: <RootLayout header={<AuthTopNavigation />} />,
		children: [
			{
				path: ROUTES.CATALOG,
				Component: CatalogPage,
			},
			{
				path: ROUTES.SIGNIN,
				Component: AuthPage,
			},
		],
	},
	{
		index: true,
		element: <Navigate to={ROUTES.CATALOG} />,
	},
] satisfies RouteObject[];

export const router = createBrowserRouter(routes);
