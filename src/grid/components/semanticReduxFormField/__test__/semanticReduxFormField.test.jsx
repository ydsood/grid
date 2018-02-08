// @flow

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Input, Checkbox } from 'semantic-ui-react';
import SemanticReduxFormField from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('SemanticReduxFormField test', () => {
  it('should render default Input', () => {
    const input = { value: true };
    const meta = { touched: false, error: false, warning: false };
    const wrapper = mount(<SemanticReduxFormField
      input={input}
      name="test"
      label="test"
      width="5"
      hidden={false}
      meta={meta}
    />);
    expect(wrapper.find(Input).length).toEqual(1);
  });

  it('should render CheckBox', () => {
    const input = { value: true };
    const meta = { touched: false, error: false, warning: false };
    const wrapper = mount(<SemanticReduxFormField
      input={input}
      name="test"
      label="test"
      width="5"
      hidden={false}
      required
      meta={meta}
      as={Checkbox}
    />);
    expect(wrapper.find(Checkbox).length).toEqual(1);
  });
});
