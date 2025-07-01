import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

import './style.css';

const init = async () => {
	// const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

	// if (token) {
	// 	await store.dispatch(getSessionThunk());
	// }

	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
};

init();
