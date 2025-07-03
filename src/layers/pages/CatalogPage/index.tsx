import { getCars } from '@src/shared/api/entities/cars';

export const CatalogPage = () => {
	async function fetch() {
		const result = await getCars();
		console.log(result.data.data[0].brand);
	}

	fetch();

	return <div className="text-primary bg-gray-50 text-8xl">CatalogPage</div>;
};
