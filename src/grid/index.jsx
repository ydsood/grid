import React from 'react';
import { Popup } from 'semantic-ui-react';
import StaticGrid from './components/staticGrid';
import EditableGrid from './components/editableGrid';

type GridProps = {
  data: Array<String> | void,
  title: string,
  getData?: Function,
  editable?: Boolean,
  formProps?: Object | void,
  columnModel: Array<Object>,
  name: string
};

function Grid(props: GridProps) {
  const {
    editable,
    data,
    getData,
    title,
    columnModel,
    name,
    ...formProps
  } = props;
  if (editable) {
    return (
      <EditableGrid
        data={data}
        formProps={formProps}
        getData={getData}
        title={title}
        columnModel={columnModel}
        editable
      />
    );
  }
  return (
    <StaticGrid
      data={data}
      getData={getData}
      title={title}
      columnModel={columnModel}
      name={name}
    />
  );
}

Grid.defaultProps = {
  getData: undefined,
  editable: false,
  formProps: undefined
};

export default Grid;
