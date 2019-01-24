const webpack = require('webpack-dev-server');
const merge = require('webpack-merge');
var path = require('path');
const commonConfig = require('./webpack.config.js');
const EXTRACT_TEXT_PLUGIN = require('extract-text-webpack-plugin');
const COPY_WEBPACK_PLUGIN = require('copy-webpack-plugin');
const BROWSER_SYNC_WEBPACK_PLUGIN = require('browser-sync-webpack-plugin');
module.exports = merge(commonConfig, {
    // output: {
    //     filename: '[name].bundle.js',
    //     path: path.resolve(__dirname, 'dist')

    // },
    devtool: 'source-map',
    module: {
        rules: [

            {
                test: /\.scss$/,
                use: EXTRACT_TEXT_PLUGIN.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },

            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        publicPath: 'images/'
                    }
                }]
            }

        ]
    },
    plugins: [

        new EXTRACT_TEXT_PLUGIN({
            filename: 'css/[name].index-style.css'
        })
    ]
})