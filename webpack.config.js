const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    path: 'path-browserify',
    os: 'os-browserify/browser',
    crypto: 'crypto-browserify',
  })
);