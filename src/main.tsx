import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from './router/router';
import { initTheme } from './shared/utils';

import './style.css';

const init = async () => {
	initTheme();

	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
};

init();
