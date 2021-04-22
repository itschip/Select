const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: '[name].js',
		path: path.resolve(process.cwd(), '../html'),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.jsx?$'/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			minify: {
				minifyCSS: true,
				minifyJS: true,
				removeComments: true,
				removeEmptyAttributes: true,
        removeRedundantAttributes: true
			},
			inject: true,
		}),
	],
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.react.js'],
	},
};