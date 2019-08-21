const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const KssWebpackPlugin = require('kss-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/* filename of generated files */
const filename = 'phx-design-system';

module.exports = {
    output: {
        filename: `${filename}.js`
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }, {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)/,
                loader: 'url-loader',
            }, {
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
                options: {
                    exclude: /images/,
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                },
            }, {
                test: /\.(svg|png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    exclude: /fonts/,
                    name: '[name].[ext]',
                    outputPath: 'images/',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { 
                from: 'node_modules/@phoenixreisen/footer/src/icons/', 
                to: 'template/kss-assets/footer-icons/'
            },
        ]),
        new MiniCssExtractPlugin({
            filename: `${filename}.css`,
            chunkFilename: `[id].${filename}.css`,
        }),
        new KssWebpackPlugin({
            "title": "Phoenix Reisen Styleguide",
            "source": "./src",
            "destination": "./dist",
            "builder": "./template/",
            "js": [`./${filename}.js`],
            "css": [`./${filename}.css`],
        }),
        new StyleLintPlugin({
            failOnError: false,
            quiet: false,
        }),
    ],

    /**
     * Dev Mode Stuff
     */
    devServer: {
        watchContentBase: true,
        contentBase: './dist',
        port: 3027,
        hot: true,
        compress: true,
        watchOptions: {
            poll: true
        }
    },
    devtool: 'hidden-source-map'
};