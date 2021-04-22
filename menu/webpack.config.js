const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		filename: '[name].js',
		path: path.resolve(process.cwd(), '../html'),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.jsx?$'/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
      {
        test: /\.html$/,
        use: "html-loader",
      },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /node_modules/,
			},
			{
				// config for images
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images',
						},
					},
				],
			},
			{
				// config for fonts
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts',
						},
					},
				],
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