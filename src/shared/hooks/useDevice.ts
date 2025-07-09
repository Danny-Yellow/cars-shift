import { useEffect, useState } from 'react';

type DeviceType = 'lg' | 'md' | 'sm' | 'xs';

const queries = {
	xs: '(max-width: 663px)',
	sm: '(max-width: 720px)',
	md: '(max-width: 978px) and (min-width: 720px)',
	lg: '(min-width: 979px)',
};

export function useDevice() {
	const getDevice = (): DeviceType => {
		if (window.matchMedia(queries.xs).matches) return 'xs';
		if (window.matchMedia(queries.sm).matches) return 'sm';
		if (window.matchMedia(queries.md).matches) return 'md';
		return 'lg';
	};

	const [size, setSize] = useState<DeviceType>(() =>
		typeof window !== 'undefined' ? getDevice() : 'lg',
	);

	useEffect(() => {
		const onResize = () => setSize(getDevice());
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	const isMobile = size === 'xs';

	return { size, isMobile };
}
