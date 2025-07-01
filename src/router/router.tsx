import type { RouteObject } from 'react-router';

import { RootLayout } from '@src/layers/components/RootLayout';
import { CatalogPage } from '@src/layers/pages/CatalogPage';
import { ROUTES } from '@src/shared/constants';
import { createBrowserRouter, Navigate } from 'react-router';

const routes = [
	{
		element: <RootLayout header={<div></div>} />,
		children: [
			{
				path: ROUTES.CATALOG,
				Component: CatalogPage,
			},
		],
	},
	{
		index: true,
		element: <Navigate to={ROUTES.CATALOG} />,
	},
] satisfies RouteObject[];

export const router = createBrowserRouter(routes);
