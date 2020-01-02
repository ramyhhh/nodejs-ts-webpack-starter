var path = require('path');
var nodeExternals = require('webpack-node-externals');

var config = {
    mode: 'production',
    entry: './src/index.ts',
    target: "node",
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js' //output file name
    },
    resolve: {
        extensions: ['.ts', '.js'] //resolve all the modules other than index.ts
    },
    module: {
        rules: [{
                use: 'ts-loader',
                test: /\.ts?$/
            },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    externals: [nodeExternals()],
    node: {
        console: true,
        __filename: true,
        __dirname: false,
    },
};

module.exports = config;