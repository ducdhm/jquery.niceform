const path = require('path');
const argv = require('yargs').argv;
const packageJson = require('./package.json');
const webpack = require('webpack');

const BANNER = `${packageJson.title} v${packageJson.version} | Copyright (c) 2014-present ${packageJson.author}`;

if (argv.prod) {
    process.env.NODE_ENV = 'production';
}
let PROD = process.env.NODE_ENV === 'production';

module.exports = {
    mode: PROD ? 'production' : 'development',
    devtool: PROD ? 'source-map' : 'eval-source-map',
    
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: packageJson.libraryName,
        libraryExport: 'default',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: PROD ? `${packageJson.name}.min.js` : `${packageJson.name}.js`,
        globalObject: `typeof self !== 'undefined' ? self : this`
    },
    
    plugins: PROD ? [
        new webpack.BannerPlugin(BANNER)
    ] : [
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'string-replace-loader',
                        options: {
                            search: '@{version}',
                            replace: packageJson.version
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        jquery: 'jQuery'
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    }
};
