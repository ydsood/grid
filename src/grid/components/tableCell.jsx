import React, { Component } from 'react';
import { Table, Dropdown } from 'semantic-ui-react';
import SemanticUIField from './semanticReduxFormField';
import { Field } from 'redux-form';

type TableCellProps = {
  name: string,
  column: Object,
  value: *,
  editable: boolean
};

export default function TableCell(props: TableCellProps) {
  const {
    name,
    value,
    editable,
    column: { dataIndex, meta, editor, formatter, parser }
  } = props;
  const RenderField = editor;
  const fieldName = `${name}.${dataIndex}`;
  if (editable) {
    return RenderField ? (
      <RenderField name={fieldName} props={meta} value={value} />
    ) : (
      <Field
        component={SemanticUIField}
        name={fieldName}
        format={formatter}
        parse={parser}
        selection
      />
    );
  }
  return <div>{formatter ? formatter(value) : value}</div>;
}
