import React from 'react';
import StaticList from './components/staticList';
import FormList from './components/formList';

type Props = {
  data: Array<String> | void,
  title: string,
  getData: Function | void,
  editable: Boolean,
  formProps: Object | void,
};

export default function List(props: Props) {
  const {
    editable, data, getData, title, ...formProps
  } = props;
  if (editable) {
    return <FormList data={data} formProps={formProps} getData={getData} title={title} />;
  }
  return <StaticList data={data} getData={getData} title={title} />;
}
