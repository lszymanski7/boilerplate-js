const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	stats: 'minimal',
	output: {
		filename: 'static/js/[name].js',
		chunkFilename: 'static/js/[name].chunk.js',
		path: path.resolve(__dirname, '../build')
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
			},
			// Fonts
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/,
				type: 'asset/inline',
				generator: {
					filename: 'static/fonts/[name][ext]'
				}
			},
			// Images
			{
				test: /\.(png|jpe?g|gif|svg|ico|webp|tiff)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/images/[name][ext]'
				}
			},
			// Media
			{
				test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/media/[name][ext]'
				}
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
