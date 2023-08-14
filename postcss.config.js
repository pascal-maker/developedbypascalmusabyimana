const tailwindConfig = require('./tailwind.config');

module.exports = {
  plugins: [
    require('tailwindcss')(tailwindConfig),
    require('autoprefixer'),
  ],
};
