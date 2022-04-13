module.exports = {
  stories: ['../packages/**/stories/*.stories.@(tsx|mdx)', '../packages/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-design-token',
    'storybook-addon-designs',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react',
};
