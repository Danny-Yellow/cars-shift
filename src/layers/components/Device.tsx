import type { ReactNode } from 'react';

import { useDevice } from '../../shared/hooks/useDevice';

interface DeviceViewProps {
	children: ReactNode;
}

export const MobileView = ({ children }: DeviceViewProps) => {
	const device = useDevice();
	if (device !== 'xs') return null;
	return <>{children}</>;
};

const browserDevices = ['md', 'lg', 'sm'];

export const BrowserView = ({ children }: DeviceViewProps) => {
	const device = useDevice();
	if (!browserDevices.includes(device)) return null;
	return <>{children}</>;
};
