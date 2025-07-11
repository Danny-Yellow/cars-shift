import type { ComponentProps} from 'react';

import { useState } from 'react';

import { TextField } from '../ui';

interface FieldWithHintsProps extends ComponentProps<typeof TextField> {
	onHintSelect?: (value: string) => void;
	hints: {
		value: string;
	}[];
}

export const FieldWithHints = ({ hints, ...props }: FieldWithHintsProps) => {
	const [isHintsOpen, setIsHintsOpen] = useState(false);

	return (
		<div className="relative">
			<TextField
				{...props}
				onBlur={(event) => {
					setIsHintsOpen(false);
					props.onBlur?.(event);
				}}
				onFocus={(event) => {
					setIsHintsOpen(true);
					props.onFocus?.(event);
				}}
			/>
			{isHintsOpen && hints?.length > 0 && (
				<div className="animate-in fade-in-0 slide-in-from-top-2 border-gray-70 absolute top-14 z-20 flex w-full flex-col rounded-lg border-1 bg-white duration-200 dark:bg-black">
					{hints.slice(0, 5).map((hint) => (
						<button
							key={hint.value}
							className="hover:bg-gray-90 dark:hover:bg-gray-30 cursor-pointer rounded p-2 outline-none"
							onMouseDown={() => props.onHintSelect?.(hint.value)}
						>
							{hint.value}
						</button>
					))}
				</div>
			)}
		</div>
	);
};
