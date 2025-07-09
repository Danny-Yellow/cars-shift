import type { ReactNode } from 'react';

import { useDevice } from '../../shared/hooks/useDevice';

interface DeviceViewProps {
	children: ReactNode;
}

export const MobileView = ({ children }: DeviceViewProps) => {
	const { size } = useDevice();
	if (size !== 'xs') return null;
	return <>{children}</>;
};

const browserDevices = ['md', 'lg', 'sm'];

export const BrowserView = ({ children }: DeviceViewProps) => {
	const { size } = useDevice();
	if (!browserDevices.includes(size)) return null;
	return <>{children}</>;
};
