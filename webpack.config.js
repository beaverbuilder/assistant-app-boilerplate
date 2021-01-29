const path = require( 'path' )
const pckg = require( './package.json' )
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )

const alias = {}

// Build config.
const config = {
	mode: 'development',
	entry: './src/index.js',
	externals: {
		/**
		* These external references provide nice import shortcuts for the libraries already
		* provided by either WordPress itself or Assistant.
		* This ensures you're using the same copy as Assistant and react contexts work properly.
		*/
		'react': 'React',
		'@wordpress/i18n' : 'wp.i18n',
		
		/* Assistant-provided vendor libraries */
		'react-router-dom': 'ReactRouterDOM',
		'framer-motion': FramerMotion,
		'redux': Redux,
		
		/* Assistant API */
		'assistant': 'FL.Assistant',
		'assistant/ui': 'FL.Assistant.ui',
		'assistant/data': 'FL.Assistant.data',
	},
	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: '[name].js',
		chunkFilename: `chunk-[name].js?var=${ pckg.version }`
	},
	resolve: { alias },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ]
			},
			{
				test: /\.s?css$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} )
	],
}

// Production build config.
if ( 'production' === process.env.NODE_ENV ) {
	config.optimization = {
		minimize: true,
		minimizer: [ new CssMinimizerPlugin() ]
	}
}
module.exports = config
