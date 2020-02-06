const webpack = require("webpack");
const path = require("path");


module.exports={

    devtool:"inline-source-map",
    entry:{
        "index":"./src/start.js"
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:"index.js"
    },

    module :{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:"babel-loader"
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },

    devServer:{
        contentBase:path.join(__dirname,"public/"),
        port:3000,
        hot:true,
        historyApiFallback:true,
        publicPath:"http://localhost:3000/dist/"
    }
}