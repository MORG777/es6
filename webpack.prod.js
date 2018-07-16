const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist/prod')
	},
	plugins: [
		new CleanWebpackPlugin(['dist/prod']),
        new HtmlWebpackPlugin({
			template: 'src/index.html',
			title: 'Production mode',
		}),
		new CopyWebpackPlugin([
            {from:'src/styles',to:'styles'} 
          ]),
    ],
});