const path = require('path')

module.exports = {
    entry: {
        'cui': './src/comps/index'
    },
    output: {
        path: path.resolve(__dirname, '../package'),
        publicPath: '/package/',
        library: 'cui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }   
}