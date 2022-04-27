import React from 'react';

import { shallow } from 'enzyme';

import ExampleComponentView from './ExampleComponentView';

describe('ExampleComponentView', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ExampleComponentView test={true} />);

    expect(
      wrapper.matchesElement(
        <div>
          <code>Example component</code>
        </div>
      )
    ).toBeTruthy();
  });

  it('should render correctly when is false', () => {
    const wrapper = shallow(<ExampleComponentView test={false} />);

    expect(
      wrapper.matchesElement(
        <div></div>
      )
    ).toBeTruthy();
  });
});
