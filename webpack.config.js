const path = require('path');

module.exports = {
  entry: './src/index.js', // This should point to the correct entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
