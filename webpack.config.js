'use strict';

let path = require('path');
let webpack = require('webpack');
let autoprefixer = require('autoprefixer');

let HtmlPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_TITLE = 'Big Lake';
const APP_NAME = 'big-lake';

module.exports = (env) => {
    env = env || 'DEV';
    let config = {};
        
    config.entry = {};
    config.entry[APP_NAME] = path.resolve(__dirname, 'src/index.js')  

    config.output = {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash].js'
    };

    if (env === 'PROD') {
        config.output.publicPath = `/${APP_NAME}`;
    }
    
    config.module = {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        ]
    };
    
    config.plugins = [
        new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ] }}),
        new ExtractTextPlugin('[name].[hash].css'),
        new HtmlPlugin({
            title: APP_TITLE,
            template: path.resolve(__dirname, 'src/index.html'),
            path: path.resolve(__dirname, 'build'),
            inject: false
        })
    ];
        
    config.devServer = {
        contentBase: path.resolve(__dirname, 'build'),
        inline: false,
        port: 9000
    };

    return config;
};