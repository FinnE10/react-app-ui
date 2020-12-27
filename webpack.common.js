const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.resolve(__dirname, "src") + "/index.html"
});

const cssPlugin = new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // all options are optional
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: false // Enable to remove warnings about conflicting order
});

module.exports = {
    entry: path.resolve(__dirname, "src") + "/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader" 
            }, 
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it uses publicPath in webpackOptions.output
                        publicPath: '../',
                        hmr: process.env.NODE_ENV === 'development'
                    }},
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        htmlPlugin,
        cssPlugin
    ]
};