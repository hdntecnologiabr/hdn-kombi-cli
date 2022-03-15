import React from 'react';

import { shallow } from 'enzyme';

import ExampleComponentView from './ExampleComponentView';

describe('ExampleComponentView', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ExampleComponentView />);

    expect(
      wrapper.matchesElement(
        <div>
          <code>Example component</code>
        </div>
      )
    ).toBeTruthy();
  });
});
