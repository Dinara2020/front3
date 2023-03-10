const path = require('path')

module.exports = {
    entry: './main.js',
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'index_bundle.js'
    },
    mode: 'development',
}