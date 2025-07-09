import { MobileView } from '@src/layers/components';
import { BottomNavigation } from '@src/layers/components/Navigation';
import { CarsList, Options } from '@src/layers/modules/catalog/components';
import { Typography } from '@src/layers/ui';

export const CatalogPage = () => {
	return (
		<>
			<MobileView>
				<Typography className="xs:block hidden py-3" tag="h1" variant="h1">
					Автомобили
				</Typography>
			</MobileView>
			<Options className="mb-12" />
			<CarsList />
			<BottomNavigation />
		</>
	);
};
