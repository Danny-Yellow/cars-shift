import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

export const CarCardSkeleton = ({ count }: { count: number }) =>
	Array.from({ length: count }).map((_, index) => (
		<article key={index}>
			<Skeleton className="mb-6 h-56 w-full" style={{ borderRadius: '16px' }} />
			<Skeleton className="mb-2" height={32} width={200} />
			<Skeleton className="mb-8" height={20} width={100} />
			<div className="mb-2 flex items-center justify-between">
				<Skeleton height={32} width={100} />
				<Skeleton height={20} width={120} />
			</div>
			<Skeleton height={56} style={{ borderRadius: '16px' }} width="100%" />
		</article>
	));
