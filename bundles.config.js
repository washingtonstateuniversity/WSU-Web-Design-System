const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniFilesToDeleteAfterCompilation = require('./packages/webpack-plugins/mini-files-to-delete-after-compilation');

module.exports = env => {

	const DEV = env.NODE_ENV === 'development';

	return {
		context: __dirname,
		entry: {
			'bundles/dist/wsu-design-system': './bundles/src/wsu-design-system.js',
			'bundles/dist/wsu-design-system.components': './bundles/src/wsu-design-system.components.js',
			'bundles/dist/wsu-design-system.content': './bundles/src/wsu-design-system.content.js',
			'bundles/dist/platforms/wsu-design-system.wordpress': './bundles/src/wsu-design-system.wordpress.js',
			'bundles/dist/platforms/wsu-design-system.wordpress.admin': './bundles/src/wsu-design-system.wordpress.admin.js',
			'bundles/dist/platforms/wsu-design-system.wordpress.gravityforms': './bundles/src/wsu-design-system.wordpress.gravityforms.js',
			'bundles/dist/platforms/wsu-design-system.wordpress.tablepress': './bundles/src/wsu-design-system.wordpress.tablepress.js',
			'bundles/dist/platforms/wsu-design-system.umbraco': './bundles/src/wsu-design-system.umbraco.js'
		},
		output: {
			filename: '[name].bundle.dist.js',
			path: path.resolve(__dirname)
		},
		mode: DEV ? 'development' : 'production',
		devtool: DEV ? 'inline-source-map' : 'source-map',
		devServer: {
			writeToDisk: true,
			contentBase: path.join(__dirname),
			overlay: true,
			quiet: false,
			port: 9000
		},
		module: {
			rules: [
				{
					test: /.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
						},
						{
							loader: "postcss-loader",
							options: {
								ident: "postcss",
								plugins: () => [
									autoprefixer({
										overrideBrowserslist: [
											">1%",
											"last 4 versions",
											"Firefox ESR",
											"not ie < 9"
										]
									})
								]
							}
						},
						"sass-loader"
					],
				},
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				}
			],
		},
		optimization: {
			minimize: !DEV,
			minimizer: [
				new OptimizeCSSAssetsPlugin({
					cssProcessorOptions: {
						map: {
							inline: false,
							annotation: true
						}
					}
				}),
				new TerserPlugin({
					terserOptions: {
						compress: {
							warnings: false,
						},
						output: {
							comments: false
						}
					}
				})
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].bundle.dist.css'
			}),
			new MiniFilesToDeleteAfterCompilation({
				filenames: [
					'bundles/dist/platforms/wsu-design-system.wordpress.bundle.dist.js',
					'bundles/dist/platforms/wsu-design-system.wordpress.bundle.dist.js.map',
					'bundles/dist/platforms/wsu-design-system.wordpress.admin.bundle.dist.js',
					'bundles/dist/platforms/wsu-design-system.wordpress.admin.bundle.dist.js.map',
					'bundles/dist/platforms/wsu-design-system.wordpress.gutenberg.bundle.dist.js',
					'bundles/dist/platforms/wsu-design-system.wordpress.gutenberg.bundle.dist.js.map',
					'bundles/dist/platforms/wsu-design-system.wordpress.gravityforms.bundle.dist.js',
					'bundles/dist/platforms/wsu-design-system.wordpress.gravityforms.bundle.dist.js.map',
					'bundles/dist/platforms/wsu-design-system.wordpress.tablepress.bundle.dist.js',
					'bundles/dist/platforms/wsu-design-system.wordpress.tablepress.bundle.dist.js.map',
					'bundles/dist/platforms/wsu-design-system.umbraco.bundle.dist.js',
					'bundles/dist/platforms/wsu-design-system.umbraco.bundle.dist.js.map'
				]
			})
		]
	}
};
