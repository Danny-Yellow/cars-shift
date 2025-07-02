import { useState } from 'react';

export const useTheme = () => {
	const [theme, setTheme] = useState<'dark' | 'light'>(localStorage.theme || 'light');

	const toggleTheme = (mode: 'dark' | 'light') => {
		setTheme(mode);

		localStorage.theme = mode;

		document.documentElement.classList.toggle('dark', mode === 'dark');
	};

	return { theme, toggleTheme, isLight: theme === 'light' };
};
