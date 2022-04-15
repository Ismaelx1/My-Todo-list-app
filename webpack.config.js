const path = require('path')
 const HtmlWebpackPlugin = require('html-webpack-plugin')
const { type } = require('os')
module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
     clean: true,
     assetModuleFilename: '[name] [ext]',

    },

    devtool: 'source-map',
   module: {
       
        rules: [
  
            {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
            
        }, 
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i
     
     
        },
    ]
  
    },


   
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Todo App',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ], 
}


