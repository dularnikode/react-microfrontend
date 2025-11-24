const HtmlWebpackPlugin = require('html-webpack-plugin');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { devServer, plugins } = require('../products/webpack.config');


module.exports = {
    mode: 'development',
    devServer : {
        port : 8082
    },
    plugins : [
        new ModuleFederationPlugin({
            name : 'cart',
            filename : 'remoteEntry.js',
            exposes :{
                './CartShow' : './src/index'
            },
            shared : ['faker']
        }),
        new  HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}