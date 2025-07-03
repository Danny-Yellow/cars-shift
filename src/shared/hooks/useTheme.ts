import { LOCAL_STORAGE_KEYS } from '@src/shared/constants';
import { useState } from 'react';

type Theme = 'dark' | 'light';

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(
		(localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) as Theme) || 'light',
	);

	const toggleTheme = (mode: Theme) => {
		setTheme(mode);

		localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, mode);

		document.documentElement.classList.toggle('dark', mode === 'dark');
	};

	return { theme, toggleTheme, isLight: theme === 'light' };
};
