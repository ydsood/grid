// @flow
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import { Icon } from 'semantic-ui-react';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '../';

configure({ adapter: new Adapter() });

/** Requirements
 * ID for data
 *  * Mandate id for all data records
 *  * If id Field is not defined for the grid as a specific id in incoming data generate it
 *  * Expose prop for specifying id Field
 *  * If duplicate id is detected in data mark row with error and render only first
 * Ensure that un-formatted values are available in the rendered component
 *  * Grid cells should be controlled components that get their formatted values
 *    passed to them (redux-form can handle this?)
 *  * if a renderer is passed for a column a parser should also be passed
 */

const columns = [
  {
    dataIndex: 'name',
    name: 'Name',
    type: 'text',
    order: 1,
    sortComparator: (first, second) => {
      if (first < second) {
        return true;
      }
      return false;
    }
  },
  {
    dataIndex: 'govtID',
    name: 'Government ID',
    type: 'text',
    order: 2,
    sortComparator: 'default', // can be skipped and default should be used
    // renderer should only be called if data is valid else render value as is with error
    // renderer should only be called for non empty, non-null values
    validator: value => {
      if (value.length === 9) {
        return true;
      }
      return false;
    },
    // Can custom render cell values (might be key for redux form)
    renderer: value =>
      `${value.substring(0, 3)}-${value.substring(3, 2)}-${value.substring(5)}`
  },
  {
    dataIndex: 'homePhone',
    name: 'Home Phone',
    order: 3,
    type: 'phone' // should not support custom types in this implementation and assume text
    // skipping default comparator
    // skipping renderer, same value should be rendered
  },
  {
    dataIndex: 'workPhone',
    name: 'Work Phone',
    // missing order should be pushed to end
    type: 'text',
    renderer: value => (
      <div>
        <Icon name="phone" />
        {`(${value.substring(0, 3)})-${value.substring(3, 3)}-${value.substring(6)}`}
      </div>
    )
  }
];
/** Requirements for data rendering
 * Missing attribute on object should render blank
 */
const data = [
  // missing workphone should be rendered as blank
  {
    name: 'John Doe',
    govtID: '123456789',
    homePhone: '3431231234'
  },
  // incorrect data in govtID should be rendered with error
  {
    name: 'John Smith',
    govtID: '12345678',
    homePhone: '3431231234',
    workPhone: ''
  },
  {
    name: 'Darius Carreira',
    govtID: '123456678',
    homePhone: '8674561298',
    workPhone: '8674561245'
  }
];

describe('Static Grid Tests', () => {
  const editorGrid = shallow(<Grid columns={columns} data={data} />);
  it('should render', () => {
    expect(editorGrid).toBeDefined();
  });
});
