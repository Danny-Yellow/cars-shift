export const buildLoaders = () => {
	const imageLoader = {
		test: /\.(png|svg|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	};

	const cssLoaderWithModules = {
		test: /\.css$/i,
		use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					modules: false,
				},
			},
			'postcss-loader',
		],
	};

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [cssLoaderWithModules, tsLoader, imageLoader];
};
