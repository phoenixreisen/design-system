const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const KssWebpackPlugin = require('kss-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/* filename of generated files */
const filename = 'phx-design-system';

module.exports = {
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: false,
                parallel: true,
                sourceMap: true,
                extractComments: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    output: {
        filename: `${filename}.js`
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)/,
                use: [
                    {loader: 'css-hot-loader'},
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'},
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
                    esModule: false,
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({'patterns': [{
            from: 'node_modules/@phoenixreisen/footer/src/icons/',
            to: 'template/kss-assets/footer-icons/'
        }, {
            from: './_headers',
            to: './dist/_headers'
        }]}),
        new MiniCssExtractPlugin({
            filename: `${filename}.css`,
            chunkFilename: `${filename}.[id].css`,
        }),
        new KssWebpackPlugin({
            "source": "./src",
            "destination": "./dist",
            "builder": "./template/",
            "js": [`./${filename}.js`],
            "css": [`./${filename}.css`],
            "title": "Phoenix Reisen Styleguide",
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
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            // "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    devtool: 'hidden-source-map'
};