import { LOCAL_STORAGE_KEYS } from '@src/shared/constants';

export function initTheme() {
    document.documentElement.classList.toggle(
        'dark',
        localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) === 'dark' ||
            (!localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) && window.matchMedia('(prefers-color-scheme: dark)').matches),
    );
}
