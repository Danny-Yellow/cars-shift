import type { RouteObject } from 'react-router';

import { TopNavigation } from '@src/layers/components/Navigation';
import { RootLayout } from '@src/layers/components/RootLayout';
import { CatalogPage } from '@src/layers/pages/CatalogPage';
import { ROUTES } from '@src/shared/constants';
import { createBrowserRouter, Navigate } from 'react-router';

const routes = [
	{
		element: <RootLayout header={<TopNavigation isAuth={false} logout={() => {}} />} />,
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
