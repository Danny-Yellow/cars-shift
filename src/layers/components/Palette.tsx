import type {Colors} from '@src/layers/ui';
import type { ComponentProps } from 'react';

import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group';
import { Color  } from '@src/layers/ui';
import clsx from 'clsx';

type PaletteProps = ComponentProps<typeof ToggleGroup> & {
	colors: readonly Colors[];
};

export const Palette = ({ colors, className, ...props }: PaletteProps) => (
	<ToggleGroup className={clsx(className, 'flex gap-1')} {...props}>
		{colors.map((color) => {
			const isSelected = Array.isArray(props.value)
				? props.value?.includes(color)
				: props.value === color;

			return (
				<ToggleGroupItem key={color} value={color}>
					<Color isSelected={isSelected} color={color} />
				</ToggleGroupItem>
			);
		})}
	</ToggleGroup>
);
