import { Button, Typography } from '@src/layers/ui';
import { useNavigate } from 'react-router';

export const EmptyPage = () => {
	const navigate = useNavigate();

	return (
		<div className="xs:min-h-screen xs:flex-col xs:items-center xs:justify-center flex flex-col items-center justify-center sm:flex">
			<div className="grid justify-center gap-6 text-center sm:-mt-8">
				<Typography tag="h2" variant="h2">
					Заказов пока что нет
				</Typography>
				<Typography variant="p_16_regular">Оформите свою первую доставку по кнопке ниже</Typography>
				<Button className="justify-self-center" size="lg" onClick={() => navigate('/')}>
					Оформить доставку
				</Button>
			</div>
		</div>
	);
};
