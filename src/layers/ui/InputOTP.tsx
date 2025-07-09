import type { SlotProps } from 'input-otp';
import type { ComponentProps } from 'react';

import clsx from 'clsx';
import { OTPInput } from 'input-otp';

export const FakeCaret = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={clsx(className, 'animate-blink h-5 w-px bg-black dark:bg-white')} {...props} />
);

export const FakeDash = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={clsx(className, 'h-px w-3 bg-black dark:bg-white')} {...props} />
);

export const Slot = ({
	className,
	char,
	isActive,
	hasFakeCaret,
	placeholderChar,
	...props
}: SlotProps & ComponentProps<'div'>) => (
	<div
		className={clsx(
			className,
			'outline-gray-70 flex h-12 w-10 items-center justify-center rounded outline-1',
			isActive && 'outline-primary border-transparent outline-2',
			!!char && 'bg-gray-90 dark:bg-gray-30',
		)}
		{...props}
	>
		{char}
		{hasFakeCaret && <FakeCaret />}
	</div>
);

export const Group = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={clsx(className, 'flex items-center gap-3')} {...props} />
);

export const InputOtp = OTPInput;
