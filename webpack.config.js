const path = require('path')
 const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
     clean: true,

    },
    devtool: 'source-map',
   module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Todo App',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ], 
}

