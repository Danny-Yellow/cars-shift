import type { RouteObject } from 'react-router';

import { RootLayout } from '@src/layers/components/RootLayout';
import { AuthTopNavigation } from '@src/layers/modules/session/components';
import {
	AuthPage,
	BookingPage,
	CarPage,
	CatalogPage,
	OrderDetailsPage,
	OrderRequestPage,
	OrdersHistoryPage,
	ProfilePage,
} from '@src/layers/pages';
import { ROUTES } from '@src/shared/constants';
import { createHashRouter, Navigate } from 'react-router';

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
						path: ROUTES.ORDERS_HISTORY,
						Component: OrdersHistoryPage,
					},
					{
						path: ROUTES.PROFILE,
						Component: ProfilePage,
					},
					{
						path: ROUTES.ORDER_DETAILS,
						Component: OrderDetailsPage,
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

export const router = createHashRouter(routes);
