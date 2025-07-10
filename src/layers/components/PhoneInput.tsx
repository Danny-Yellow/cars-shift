import type { ComponentProps } from 'react';
import type { PatternFormatProps } from 'react-number-format';

import { TextField } from '@src/layers/ui';
import { PatternFormat } from 'react-number-format';

type CustomPatterFormatProps = Omit<PatternFormatProps, 'customInput' | 'format' | 'mask'> &
	ComponentProps<typeof TextField>;

export const PhoneInput = ({ ...props }: CustomPatterFormatProps) => (
	<PatternFormat mask="_" customInput={TextField} format="+7 (9##) ### ##-##" {...props} />
);
