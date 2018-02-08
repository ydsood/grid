// @flow
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import columns from '../../__mocks__/columnDef';
import ColumnModel, { sortingFunction } from '../columnModel';

configure({ adapter: new Adapter() });
const columnModel = new ColumnModel(columns);

describe('Column model tests', () => {
  it('should have a private columnModelData property', () => {
    expect(typeof columnModel.get).toBe('function');
    expect(columnModel.columnModelData).toBe(undefined);
  });
  it('should initialize with sorted column order', () => {
    expect(columnModel.get()).toEqual(columns.sort(sortingFunction));
  });

  it('should sort grid columns based on colum order', () => {
    const columnsUnsorted = [{ order: 1 }, { order: 10 }, { order: 5 }];
    const columnsSorted = [{ order: 1 }, { order: 5 }, { order: 10 }];
    expect(columnsUnsorted.sort(sortingFunction)).toEqual(columnsSorted);
  });
});
