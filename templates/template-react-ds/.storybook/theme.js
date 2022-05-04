import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // Brand
  brandTitle: '<%= fullName %>',
  brandUrl: '',
  brandImage: '',

  // UI
  colorSecondary: '#aaa',

  // Typography
  fontBase: 'Ubuntu, sans-serif',
  fontCode: 'monospace',
});
