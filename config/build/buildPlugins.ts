import type { Configuration } from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin } from 'webpack';

import CopyWebpackPlugin from 'copy-webpack-plugin';

import type { BuildOptions } from './@types/options';

export const buildPlugins = ({ paths, mode }: BuildOptions): Configuration['plugins'] => {
	const isDev = mode === 'development';
	const isProd = mode === 'production';

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin(),
		new CopyWebpackPlugin({
			patterns: [{ from: 'public', to: '' }],
		}),
	];

	if (isDev) {
		plugins.push(new ProgressPlugin());
	}

	if (isProd) {
		plugins.push();
	}

	return plugins;
};
