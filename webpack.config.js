const webpack = require('webpack');
const path=require("path");
module.exports={
    entry:{
        index:path.resolve('./dev/index.jsx'),
        to:path.resolve('./dev/to.jsx')
    },
    output:{
        path: path.resolve('./www/public/js'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }]
    }
};