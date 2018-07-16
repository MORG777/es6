const webpack = require('webpack');
const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new CleanWebpackPlugin(['dist/dev']),
        new HtmlWebpackPlugin({
			title: 'Development Mode',
			template: 'src/index.html'
		}),
		new CopyWebpackPlugin([
            {from:'src/styles',to:'styles'} 
          ]),
    ],
});