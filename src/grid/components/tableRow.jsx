import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

export default class TableRow extends Component<Object> {
  buildRowColumns() {
    const { input, data } = this.props;
    const renderData = input ? input.value : data;
    return this.props.columnModel.get().map((column, index) => {
      const cellNamePrefix = input ? input.name : index;
      console.log(column.formatter);
      return (
        <Table.Cell key={`${cellNamePrefix}.${column.dataIndex}`}>
          {column.formatter
            ? column.formatter(renderData[column.dataIndex])
            : renderData[column.dataIndex]}
        </Table.Cell>
      );
    });
  }
  render() {
    return <Table.Row>{this.buildRowColumns()}</Table.Row>;
  }
}
