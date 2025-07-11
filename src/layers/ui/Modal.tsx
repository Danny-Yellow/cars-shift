import type { ComponentProps, ReactNode } from 'react';

import clsx from 'clsx';
import { createContext, use, useEffect, useMemo, useState } from 'react';

interface ModalContextType {
	hideModal: () => void;
	showModal: (modal: ReactNode) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [modalContent, setModalContent] = useState<ReactNode>(null);

	const showModal = (modal: ReactNode) => {
		setModalContent(modal);
	};

	const hideModal = () => {
		setModalContent(null);
	};

	const value = useMemo(() => ({ showModal, hideModal }), []);

	return (
		<ModalContext.Provider value={value}>
			{children}
			{modalContent}
		</ModalContext.Provider>
	);
};

export const Modal = ({ isOpen, children }: { isOpen: boolean; children: ReactNode }): null => {
	const { hideModal, showModal } = use(ModalContext);

	useEffect(() => {
		isOpen ? showModal(children) : hideModal();
	}, [isOpen]);

	return null;
};

export const ModalViewport = ({
	children,
	onClose,
	...props
}: ComponentProps<'div'> & { onClose: () => void }) => {
	const { hideModal } = use(ModalContext);

	return (
		<div
			className={clsx(
				'fixed inset-0 z-50 flex items-center justify-center',
				'pointer-events-none',
				props.className,
			)}
			{...props}
		>
			<div className="pointer-events-auto z-10">{children}</div>
			<div
				className="pointer-events-auto fixed inset-0 z-0 bg-black/50"
				onClick={() => {
					onClose();
					hideModal();
				}}
			/>
		</div>
	);
};

export const ModalContent = ({ className, ...props }: ComponentProps<'div'>) => {
	return (
		<div
			className={clsx('rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-900', className)}
			{...props}
		/>
	);
};

export const ModalHeader = ({ className, ...props }: ComponentProps<'div'>) => {
	return <div className={clsx('mb-4 text-lg font-semibold', className)} {...props} />;
};

export const ModalBody = ({ className, ...props }: ComponentProps<'div'>) => {
	return <div className={clsx('text-base', className)} {...props} />;
};
