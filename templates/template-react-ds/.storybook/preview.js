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
    disable: true,
  },
  options: {
    storySort: {
      order: [
        'Docs',
        ['Como utilizar', 'Tokens', ['Padronização dos Tokens', 'Adicionando Tokens', 'Como utilizar os Tokens']],
        'Design Tokens',
        '*',
      ],
    },
  },
};
