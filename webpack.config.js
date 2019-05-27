const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry : {
        filename: './atlas.web/public/js/atlas-engine/source/atlas.main.js'
    } , 
    output : {
        path: path.resolve(__dirname , './atlas.web/public/js/atlas-engine/source/'),
        filename: 'atlas.build.js',
    },
    module : {
        rules: [
            {
                test: /\.JS$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['es2015' , {modules: false}]
                    ]
                }
            }
        ]
    }
}