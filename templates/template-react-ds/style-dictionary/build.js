/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const handlebars = require('handlebars');
const helpers = require('handlebars-helpers')({
  handlebars,
});
const StyleDictionary = require('style-dictionary');

const BASE_PIXEL_SIZE = 16;

StyleDictionary.registerTransform({
  name: 'px/rem',
  type: 'value',
  matcher(token) {
    return token.pxToRem;
  },
  transformer(token) {
    const value = parseFloat(token.value);

    const remValue = value / BASE_PIXEL_SIZE;
    return `${remValue}rem`;
  },
});

StyleDictionary.registerTransform({
  name: 'custom/kebab',
  type: 'name',
  transformer(token) {
    return token.path.join('-');
  },
});

StyleDictionary.registerTransformGroup({
  name: 'custom/ts',
  transforms: ['name/cti/camel', 'px/rem'],
});

StyleDictionary.registerTransformGroup({
  name: 'custom/scss',
  transforms: ['custom/kebab', 'px/rem'],
});

const templateScss = handlebars.compile(fs.readFileSync(`${__dirname}/templates/scss.hbs`, 'utf8'));

StyleDictionary.registerFormat({
  name: 'custom/scss',
  formatter({ dictionary }) {
    return templateScss({
      properties: dictionary.tokens,
    });
  },
});

const StyleDictionaryExtended = StyleDictionary.extend(`${__dirname}/config.json`);

StyleDictionaryExtended.buildAllPlatforms();
