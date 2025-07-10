import type { ComponentProps } from 'react';
import type { PatternFormatProps } from 'react-number-format';

import { TextField } from '@src/layers/ui';
import { PatternFormat } from 'react-number-format';

type CustomPatterFormatProps = Omit<
	PatternFormatProps,
	'allowEmptyFormatting' | 'customInput' | 'format' | 'mask'
> &
	ComponentProps<typeof TextField>;

export const BirthdateInput = ({ ...props }: CustomPatterFormatProps) => (
	<PatternFormat
		mask="_"
		allowEmptyFormatting
		customInput={TextField}
		format="##.##.####"
		{...props}
	/>
);
