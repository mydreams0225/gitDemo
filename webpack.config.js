const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:'scripts/[name].[hash:5].js',
        
    },
    plugins:[
        
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./public/index.html',
            chunks:['index']
        }),
        new CleanWebpackPlugin(),
        
       
    ]
}