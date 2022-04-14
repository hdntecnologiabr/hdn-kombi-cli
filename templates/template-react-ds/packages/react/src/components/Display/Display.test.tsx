import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@<%= fullName %>/test-utils';

import { Display } from './Display';

const Component = (
  <Display size="160" weight="bold" isTruncated>
    Lorem ipsum dolor sit amet
  </Display>
);

describe('Display', () => {
  it('should be able to change props size', () => {
    const { container } = render(Component);
    expect(container.firstElementChild).toHaveAttribute('class', expect.stringMatching(/size-160/i));
  });

  it('should be able to change props weight', () => {
    const { container } = render(Component);
    expect(container.firstElementChild).toHaveAttribute('class', expect.stringMatching(/weight-bold/i));
  });

  it('should be able to demonstrate a truncated text', () => {
    const { container } = render(Component);
    expect(container.firstElementChild).toHaveAttribute('class', expect.stringMatching(/isTruncated-true/i));
  });

  it('should not have a empty text', () => {
    const { container } = render(Component);
    expect(container.firstElementChild).not.toBeEmptyDOMElement();
  });
});
