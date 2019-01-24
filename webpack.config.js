const CLEAN_WEBPACK_PLUGIN = require('clean-webpack-plugin');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');


module.exports = {
    entry: {
        indexEntry: './src/index.js'
    },


    module: {
        rules: [

            {
                test: /\.html$/,
                use: 'html-loader'
            },

        ]

    },
    watch: true,

    plugins: [

        new HTML_WEBPACK_PLUGIN({
            template: 'src/index.html',
            filename: './index.html'
        })
    ]
}