/* eslint-disable @typescript-eslint/no-explicit-any */
import type * as Stitches from '@stitches/react';
import { createStitches, defaultThemeMap } from '@stitches/react';

import * as refTokens from './tokens/ref';

export const { styled, css, config, theme, createTheme, reset, getCssText, globalCss, keyframes } = createStitches({
  prefix: 'dy',
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity',
    transform: 'transform',
    transitionDelay: 'transitionDuration',
    transitionDuration: 'transitionDuration',
    transitionTimingFunction: 'transitionTimingFunction',
    scale: 'scale',
  },
  theme: {
    colors: {
      ...refTokens.colors,
    },

    fonts: {
      ...refTokens.fontRefs,
    },
    fontSizes: {
      ...refTokens.fontSizes,
    },
    borderWidths: {
      ...refTokens.borderWidthsRefs,
    },
    fontWeights: {
      ...refTokens.fontWeights,
    },
    lineHeights: {
      ...refTokens.lineHeights,
    },
    opacity: {
      ...refTokens.opacityRefs,
    },
    radii: {
      ...refTokens.radiiRefs,
    },
    scales: {
      ...refTokens.scaleRefs,
    },
    sizes: {
      ...refTokens.sizesRefs,
    },
    shadows: {
      ...refTokens.shadowsRefs,
    },
    space: {
      ...refTokens.spaceRefs,
    },
    transform: {
      ...refTokens.transform,
    },
    transitions: {
      ...refTokens.transitions,
    },
    transitionDuration: {
      ...refTokens.transitionDurationRefs,
    },
    transitionTimingFunction: {
      ...refTokens.transitionTimingFunctionRefs,
    },
    zIndices: {
      ...refTokens.zIndexes,
    },
  },
  media: {
    light: '(prefers-color-scheme: light)',
    dark: '(prefers-color-scheme: dark)',
    iot: '(min-width: 280px)',
    mobile: '(min-width: 768px)',
    tablet: '(min-width: 1024px)',
    desktop: '(min-width: 1440px)',
  },
  utils: {},
});
const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily: `Edenred, Ubuntu, sans-serif`,
  },
});

globalStyles();

export type CSS = Stitches.CSS<typeof config>;
export type { ComponentProps, PropertyValue, ScaleValue, VariantProps } from '@stitches/react';
