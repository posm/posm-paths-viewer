const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: /(src)/,
				loader: 'babel-loader'
			}
		]
	},
	stats: {
		colors: true,
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' })
	],
	devtool: 'source-map'
}
