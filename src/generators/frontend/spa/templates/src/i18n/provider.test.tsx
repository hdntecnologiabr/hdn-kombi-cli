import { render, screen } from '@testing-library/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import IntlProvider, { flattenObject } from './provider';

describe('flattenObject', () => {
  it('should return a flat array', () => {
    const result = flattenObject({
      TEST: {
        TEST_TRANSLATE: 'Translate',
      },
    });
    expect(result).toEqual({ 'TEST.TEST_TRANSLATE': 'Translate' });
  });
});

describe('provider', () => {
  it('should display the text with the default language if the store does not have one selected', () => {
    render(
      <IntlProvider>
        <FormattedMessage id="test.translate" />
      </IntlProvider>,
    );
    expect(screen.getByText('Translate')).toBeDefined();
  });
});
