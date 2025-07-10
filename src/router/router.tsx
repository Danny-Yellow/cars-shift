import type { RouteObject } from 'react-router';

import { RootLayout } from '@src/layers/components/RootLayout';
import { AuthTopNavigation } from '@src/layers/modules/session/components';
import { AuthPage, BookingPage, CarPage, CatalogPage, OrderRequestPage } from '@src/layers/pages';
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
					{
						path: ROUTES.CAR_DETAILS,
						Component: CarPage,
					},
					{
						path: ROUTES.BOOKING,
						Component: BookingPage,
					},
					{
						path: ROUTES.ORDER_REQUEST,
						Component: OrderRequestPage,
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
