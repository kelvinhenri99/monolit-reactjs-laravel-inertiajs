const mix = require('laravel-mix')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

mix.js('resources/js/app.js', 'public/js')
	.sass('resources/sass/app.sass', 'public/css')
	.webpackConfig({
		plugins: [
			new BrowserSyncPlugin({
				proxy: 'http://localhost:8000',
				open: false,
				notify: true,
				files: [
					'**/*.php',
					'resources/views/**/*.php',
					'public/js/**/*.js',
					'public/css/**/*.css',
				]
			}),
		]
	})
