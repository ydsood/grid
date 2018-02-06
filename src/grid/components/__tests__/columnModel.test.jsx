// @flow
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import columns from '../__mocks__/columnDef';
import ColumnModel from '../columnModel';

configure({ adapter: new Adapter() });
const columnModel = new ColumnModel(columns);

describe('Column model tests', () => {
  it('ColumnModelData should be private', () => {
    expect(typeof columnModel.get).toBe('function');
    expect(columnModel.columnModelData).toBe(undefined);
  });
});
