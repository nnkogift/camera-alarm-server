const path = require('path');

module.exports = {
    mode: 'production',
    target: "node",
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
    },
};
