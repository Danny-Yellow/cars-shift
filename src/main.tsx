import { fetchSessionFx } from '@src/layers/modules/session/store/authStore';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from './router/router';
import { LOCAL_STORAGE_KEYS } from './shared/constants';
import { initTheme } from './shared/utils';

import './style.css';

const init = async () => {
	initTheme();

	const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

	if (token) {
		await fetchSessionFx();
	}

	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
};

init();
