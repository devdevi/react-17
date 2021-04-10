const path = require('path')
const HtmlWebpackPlugin =  require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', 'jsx']
    },
    module: {
        rules: [
            {
                // Elementos que nos ayudan a detectar loaders, img, scss
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader'
                },

            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            // como se envia a produccion
            filename: './index.html'
        })
    ],
    devServer: {
        contentBase:  path.join(__dirname, 'dist'),
        compress: true,
        port: 3005,
        open: true
    }
}