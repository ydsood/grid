import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import TableCell from './tableCell';

export default class TableRow extends Component<Object> {
  buildRowCells() {
    const { input, editable, removeData, index, data, name } = this.props;
    const renderData = input ? input.value : data;
    const cells = this.props.columnModel.get().map(column => {
      const cellNamePrefix = input ? input.name : name;
      const { dataIndex } = column;
      const value = renderData[dataIndex];
      const key = `${cellNamePrefix}.${column.dataIndex}`;
      return (
        <Table.Cell key={key}>
          <TableCell
            name={cellNamePrefix}
            column={column}
            value={value}
            editable={editable}
          />
        </Table.Cell>
      );
    });
    if (editable) {
      const removeRowCell = (
        <Table.Cell>
          <Button
            type="button"
            icon="remove"
            circular
            onClick={e => removeData(e, index)}
          />
        </Table.Cell>
      );
      cells.unshift(removeRowCell);
    }
    return cells;
  }
  render() {
    return <Table.Row>{this.buildRowCells()}</Table.Row>;
  }
}
