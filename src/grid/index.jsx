import React from 'react';
import StaticGrid from './components/staticGrid';
import EditableGrid from './components/editableGrid';

type GridProps = {
  data: Array<String> | void,
  title: string,
  getData?: Function,
  editable?: Boolean,
  formProps?: Object | void,
  columnModel: Array<Object>
};

export default function List(props: GridProps) {
  const { editable, data, getData, title, columnModel, ...formProps } = props;
  if (editable) {
    return (
      <EditableGrid
        data={data}
        formProps={formProps}
        getData={getData}
        title={title}
        columnModel={columnModel}
      />
    );
  }
  return (
    <StaticGrid
      data={data}
      getData={getData}
      title={title}
      columnModel={columnModel}
    />
  );
}
