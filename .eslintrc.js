module.exports = {
  'extends': 'airbnb',
  'plugins': [
    'react',
    'jsx-a11y',
    'import',
  ],
  'rules': {
    'react/jsx-filename-extension': 0,
    'react/jsx-no-bind': 1,
    'no-mixed-operators': 1,
  },
  'env': {
    browser: true, // let 'window', 'document' defined
    jest: true,
  }
};
