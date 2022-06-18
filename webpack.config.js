const path = require('path');

module.exports = {
	mode: 'production',
	entry: './bableDist/index.js',
	externals: {
		react: 'commonjs react',
		'react-dom': 'commonjs react-dom',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'commonjs',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
};
