import { withKnobs } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';

const tokenContext = require.context(
  '!!raw-loader!../packages/react/src/storybook/tokens',
  true,
  /.\.(css|less|scss|svg)$/
);

const tokenFiles = tokenContext.keys().map(function (filename) {
  return { filename: filename, content: tokenContext(filename).default };
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    color: /(background|color)$/i,
    date: /Date$/,
  },
  decorators: [withKnobs, withDesign],
  designToken: {
    files: tokenFiles,
    defaultTab: 'Colors',
  },
  options: {
    storySort: {
      order: ['Docs', 'Design Tokens', '*'],
    },
  },
};
