module.exports = {
  purge: ["./css/**/*.css", "./**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'real-gray-900': '#121212',
      'real-gray-800': '#232323',
      'real-gray-700': '#3a3a3a'
    }),
    extend: {
      screens: {
        'print': {'raw': 'print'},
        // => @media print { ... }
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    }
  },
  plugins: [],
}
