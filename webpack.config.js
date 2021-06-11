const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:'scripts/[name].[hash:5].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.(jpeg)|(jpg)$/,
            use:[{
                loader:'url-loader',
                options:{
                    limit:1000
                }
            }]
        }]
    },
    plugins:[
        
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./public/index.html',
            chunks:['index']
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(
           {
            patterns:[{ from: './public/images', to: './' }]
           }
        )
       
    ]
}