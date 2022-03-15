import { shallow } from 'enzyme';
import React from 'react';
import ExamplePage from './ExamplePage';

describe('ExamplePage', () => {
  it('should render a message', () => {
    const wrapper = shallow(<ExamplePage />);
    expect(
      wrapper.matchesElement(
        <div>
          <div>It works!</div>
          <pre>
            <code>awesome</code>
          </pre>
        </div>,
      ),
    ).toBeTruthy();
  });
});
