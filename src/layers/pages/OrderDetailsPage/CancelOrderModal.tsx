import { Cross } from '@src/layers/components/icons';
import { Question } from '@src/layers/components/icons/Question';
import {
	$cancelOrder,
	$cancelOrderModal,
	cancelOrderFx,
	closeCancelOrderModal,
} from '@src/layers/modules/orders/store';
import {
	Button,
	IconButton,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalViewport,
	Typography,
} from '@src/layers/ui';
import { ROUTES } from '@src/shared/constants';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

interface CancelOrderModalProps {
	orderId: string;
}

export const CancelOrderModal = ({ orderId }: CancelOrderModalProps) => {
	const navigate = useNavigate();

	const { isOpen } = useUnit($cancelOrderModal);
	const { isSuccess } = useUnit($cancelOrder);

	useEffect(() => {
		if (isSuccess === true) {
			navigate(ROUTES.ORDERS_HISTORY);
		}

		if (isSuccess === false) {
			// open toast
		}
	}, [isSuccess]);

	return (
		<Modal isOpen={isOpen}>
			<ModalViewport onClose={() => closeCancelOrderModal()}>
				<ModalContent className="w-lg">
					<ModalHeader>
						<IconButton onClick={() => closeCancelOrderModal()}>
							<Cross />
						</IconButton>
					</ModalHeader>
					<ModalBody className="grid justify-items-center">
						<Question />
						<Typography className="mt-4" variant="h2">
							Отменить заказ?
						</Typography>
						<div className="mt-10 grid w-full max-w-[328px] gap-4">
							<Button variant="outlined" onClick={() => closeCancelOrderModal()}>
								Не отменять
							</Button>
							<Button onClick={() => cancelOrderFx(orderId)}>Отменить</Button>
						</div>
					</ModalBody>
				</ModalContent>
			</ModalViewport>
		</Modal>
	);
};
