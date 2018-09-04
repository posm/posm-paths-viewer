const path = require('path');
const dist = path.resolve(__dirname, 'dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// plugins
const miniCssPlugin = new MiniCssExtractPlugin({
	filename: '[name].css',
	chunkFilename: '[id].css'
});
const htmlPlugin = new HtmlWebpackPlugin({ template: './src/index.html' });
// loaders
const miniCssLoader = {
	loader: MiniCssExtractPlugin.loader,
	options: { publicPath: dist }
}

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: dist
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: /(src)/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [ miniCssLoader, 'css-loader' ]

			}
		]
	},
	stats: {
		colors: true,
	},
	plugins: [ htmlPlugin, miniCssPlugin ],
	devtool: 'source-map'
}
