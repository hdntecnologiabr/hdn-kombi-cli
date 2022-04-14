import { css } from '@delaunay-ui/web';

import { variants } from '../utils';

const DisplayStyles = css({
  lineHeight: '$ref-medium',
  variants: {
    size: {
      160: {
        fontSize: '$ref-160',
      },
      200: {
        fontSize: '$ref-200',
      },
    },
    weight: {
      light: {
        fontWeight: '$ref-light',
      },
      regular: {
        fontWeight: '$ref-regular',
      },
      medium: {
        fontWeight: '$ref-medium',
      },
      bold: {
        fontWeight: '$ref-bold',
      },
    },
    isTruncated: {
      true: {
        ...variants.truncated,
      },
    },
  },
});

export default DisplayStyles;
