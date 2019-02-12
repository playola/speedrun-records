/**
 * Babel for ES6.
 */
require('@babel/register')({ presets: ['@babel/preset-env'] });
require('./src/server');
