import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from './router/router';

import './style.css';

const init = async () => {
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
};

init();
