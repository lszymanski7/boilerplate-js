const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		filename: 'static/js/[name].js',
		chunkFilename: 'static/js/[name].chunk.js',
		assetModuleFilename: 'static/media/[name][ext]',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			// CSS | SCSS
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader', 
					'css-loader', 
					'sass-loader'
				]
			}
		]
	},
	devServer: {
		client: {
			logging: 'warn'
		},
		compress: true,
		historyApiFallback: true,
		hot: true,
		open: true,
		port: 8080
	}
})
