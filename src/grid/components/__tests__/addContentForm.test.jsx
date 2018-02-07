// @flow
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ColumnModel from '../columnModel';
import columns from '../../__mocks__/columnDef';
import AddContentForm from '../addContentForm';

configure({ adapter: new Adapter() });

describe('Adding data to editable grid', () => {
  const columnModel = new ColumnModel(columns);
  const submitHandler = jest.fn();
  const cancelHandler = jest.fn();
  const form = mount(
    <AddContentForm
      columnModel={columnModel}
      submitHandler={submitHandler}
      cancelHandler={cancelHandler}
    />
  );
  const fields = columnModel.get().map(item => item.dataIndex);
  const addButton = form.find('[icon="check"]');
  const cancelButton = form.find('[icon="close"]');
  it('should be rendered', () => {
    expect(form).toBeDefined();
    expect(addButton).toBeDefined();
  });

  it('should set state for all corresponding column data indices', () => {
    expect(Object.keys(form.state())).toEqual(expect.arrayContaining(fields));
  });

  it('should call submitHandler and cancelHandler passed in as props', () => {
    addButton.simulate('click');
    expect(submitHandler).toHaveBeenCalled();
    cancelButton.simulate('click');
    expect(cancelHandler).toHaveBeenCalled();
  });
});
