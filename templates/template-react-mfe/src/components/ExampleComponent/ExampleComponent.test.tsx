import React from 'react';

import { shallow } from 'enzyme';

import ExampleComponent from './ExampleComponent';
import ExampleComponentView from './ExampleComponentView';

describe('ExampleComponent', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ExampleComponent test={true} />);
    expect(wrapper.type()).toBe(ExampleComponentView);
  });
});
