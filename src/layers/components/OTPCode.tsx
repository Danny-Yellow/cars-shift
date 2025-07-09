import type { ComponentProps } from 'react';

import { FakeDash, Group, InputOtp, Slot } from '@src/layers/ui';

type InputOtpRenderProps = Partial<Pick<ComponentProps<typeof InputOtp>, 'maxLength'>> &
	Omit<ComponentProps<typeof InputOtp>, 'children' | 'maxLength'>;

export const OTPCode = ({ maxLength = 6, ...props }: InputOtpRenderProps) => {
	return (
		<InputOtp
			{...props}
			render={({ slots }) => (
				<Group>
					{slots.slice(0, 3).map((slot, idx) => (
						<Slot key={idx} {...slot} />
					))}
					<FakeDash />
					{slots.slice(3).map((slot, idx) => (
						<Slot key={idx} {...slot} />
					))}
				</Group>
			)}
			maxLength={maxLength}
		/>
	);
};
