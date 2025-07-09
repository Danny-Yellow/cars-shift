import type { RouteObject } from 'react-router';

import { RootLayout } from '@src/layers/components/RootLayout';
import { AuthTopNavigation } from '@src/layers/modules/session/components';
import { AuthPage } from '@src/layers/pages/AuthPage';
import { CatalogPage } from '@src/layers/pages/CatalogPage';
import { ROUTES } from '@src/shared/constants';
import { createBrowserRouter, Navigate } from 'react-router';

import { ProtectedRoute } from './ProtectedRoute';

const routes = [
	{
		element: <RootLayout header={<AuthTopNavigation />} />,
		children: [
			{
				element: <ProtectedRoute access="forAll" />,
				children: [
					{
						path: ROUTES.CATALOG,
						Component: CatalogPage,
					},
				],
			},
			{
				element: <ProtectedRoute access="onlyUnAuth" />,
				children: [
					{
						path: ROUTES.SIGNIN,
						Component: AuthPage,
					},
				],
			},
			{
				element: <ProtectedRoute access="onlyAuth" />,
				children: [
					{
						path: ROUTES.ORDERS,
						element: <div>Orders</div>,
					},
					{
						path: ROUTES.PROFILE,
						element: <div>Profile</div>,
					},
				],
			},
		],
	},
	{
		index: true,
		element: <Navigate to={ROUTES.CATALOG} />,
	},
] satisfies RouteObject[];

export const router = createBrowserRouter(routes);
