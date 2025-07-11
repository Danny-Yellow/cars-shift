import { Typography } from '@src/layers/ui';
import { useTimer } from '@src/shared/hooks';
import { useEffect } from 'react';
import { Link } from 'react-router';

export const ResendCodeManager = ({ delay, retry }: { delay: number; retry: () => void }) => {
	const { time, start, isRunning } = useTimer();

	useEffect(() => {
		start(delay);
	}, [delay]);

	if (isRunning) {
		return (
			<Typography variant="p_14_regular" color="secondary">
				Запросить код повторно через {time} сек
			</Typography>
		);
	}

	return (
		<Link onClick={() => retry()} to="">
			<Typography variant="p_14_regular" color="secondary">
				Отправить еще раз
			</Typography>
		</Link>
	);
};
