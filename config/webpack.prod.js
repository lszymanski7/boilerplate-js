const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: 'static/js/[name].[contenthash:8].js',
		chunkFilename: 'static/js/[id].[contenthash:8].chunk.js',
		assetModuleFilename: 'static/media/[name].[contenthash:8][ext]',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			// CSS | SCSS
			{
				test: /\.(css|scss)$/,
				use: [
					MiniCssExtractPlugin.loader, 
					'css-loader', 
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].[contenthash:8].css',
			chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
			ignoreOrder: false
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				parallel: true
			}),
			new CssMinimizerPlugin()
		]
	}
})
