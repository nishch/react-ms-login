const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: {
        example: [
            './examples/example.jsx'
        ],
        authComplete: [
            './src/authComplete.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            use: 'babel-loader',
            test: /\.jsx?$/,
            exclude: /node_modules/,
        }],
    }
};