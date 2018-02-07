// @flow
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '../';
import columns from '../__mocks__/columnDef';
import data from '../__mocks__/columnData';

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

describe('Static Grid Tests', () => {
  const editorGrid = shallow(<Grid columns={columns} data={data} />);
  it('should render', () => {
    expect(editorGrid).toBeDefined();
  });
});
