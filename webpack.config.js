const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: path.resolve(__dirname, '_javascript/main.js'),
    output: {
        path: path.join(__dirname, 'lib/'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 8000,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         hmr: process.env.NODE_ENV === 'development',
                    //     },
                    // },
                    "vue-style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         hmr: process.env.NODE_ENV === 'development',
                    //     },
                    // },
                    "vue-style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders:{

                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // filename: devMode ? '[name].css' : '[name].[hash].css',
            // chunkFilename: devMode ? "[id].css" : '[id].[hash].css'
            filename: '[name].css',
            chunkFilename: "[id].css",
        }),
        new VueLoaderPlugin()
    ]
};
