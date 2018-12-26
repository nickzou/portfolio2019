module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
          reduceIdents: false,
          zindex: false
        })
    ]
};
