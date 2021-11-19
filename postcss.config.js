module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('postcss-simple-vars'),
        require('postcss-extend'),
        require('postcss-mixins'),
        require('autoprefixer'),
    ]
}