const MyPlugin = require('../plugins/MyPlugin');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    output:{
        filename:"[name].[hash:4].js",
        path: path.resolve(__dirname,'../', 'dist'),
    },
    plugins:[
        new MyPlugin('files.md'),
        new CleanWebpackPlugin()
    ],
    devtool:'source-map',
    entry:"./src/index.js",
    module:{
        rules:[
            {
                test:/index\.js/,
                use:[{
                    loader:'./src/loaders/loader1'
                   
                },{
                    loader:'./src/loaders/loader2?a=1'
                },{
                    loader:'./src/loaders/loader3',
                    options:{
                        val:'PI'
                    }
                },{
                    loader:'./src/loaders/loader4'
                }]
            },
            {
                test:/\.css$/,
                use:['./src/loaders/style-loader']
            },
            {
                test:/\.(png)|(jpeg)|(jpg)$/,
                use:[{
                    loader:'./src/loaders/image-loader',
                    
                    options:{
                        // 低于这个数用base64，高于这个数转成文件
                        limit:4000,
                        fileFormat:'img-[contenthash:4].[ext]',

                    }
                }]
            }
        ]
    }
}