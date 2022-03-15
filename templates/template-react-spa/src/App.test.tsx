import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render a tree with the proper styles prefixed by the MFE Name ', () => {
    const result = render(<App />).asFragment();

    expect(result).toMatchSnapshot();
  });
});
