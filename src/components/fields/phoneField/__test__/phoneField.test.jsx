// @flow

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import PhoneField from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('PhoneField test', () => {
  it('should render correctly', () => {
    // since all phone test are done in formatters.test, normalize.test and validator.test,
    // make sure PhoneField rendered correctly is enough at this point
    const props = {
      label: 'phone',
    };
    const wrapper = shallow(<PhoneField name="phone" order={3} props={props} />);

    expect(wrapper).toBeDefined();
  });
});
