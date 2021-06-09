const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
module.exports = {
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'home.html'
        }),
        new CopyWebpackPlugin({
            patterns:[{
                from:'./public',
                to:'./'
            }]
        }),
        new webpack.DefinePlugin({
            RANDOM:`Math.random()`,
            VERSION:`"1.1.1"`,
            DOMAIN:JSON.stringify('WWW.LINDSEY.COM')
        }),
        new webpack.BannerPlugin({
            banner:`
            author:lindsey,
            corporation:hengge
            `
        }),
        new webpack.ProvidePlugin({
            _:'lodash',
            $:'jquery'
        })
    ],
    devServer:{
        port:8020,
        // index:'abc.html',
        proxy:{
            '/api':{
                target:'http://localhost:3000',
                pathRewrite:{'^api/':''}
            },
            

        }
    }
}