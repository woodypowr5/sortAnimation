 
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'animationApp.js'
    }
};

module.loaders = [
    { test: /\.jade$/, loader: "jade" }
];