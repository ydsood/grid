// @flow
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import type { EditableGrid } from './editableGrid';
import type { StaticGrid } from './staticGrid';
import ColumnModel from './columnModel';
import type { ColumnModelType } from './columnModel';

type Props = {
  getData?: Function,
  editable?: boolean,
  columnModel: Array<Object>
};

type SupporteSupportedGrid = EditableGrid | StaticGrid;

export default (Grid: SupporteSupportedGrid) => {
  return class extends Component<Props> {
    constructor(props: Props) {
      super(props);
      this.colModel = new ColumnModel(props.columnModel);
      this.buildTableHeaders = this.buildTableHeaders.bind(this);
    }
    componentWillMount() {
      if (typeof this.props.getData === 'function') {
        this.props.getData();
      }
    }
    buildTableHeaders: Function;
    buildTableHeaders() {
      return (
        <Table.Header>
          <Table.Row>
            {this.colModel
              .get()
              .map(item => (
                <Table.HeaderCell key={item.dataIndex}>
                  {item.name}
                </Table.HeaderCell>
              ))}
          </Table.Row>
        </Table.Header>
      );
    }

    colModel: ColumnModelType;

    render() {
      const { columnModel: _, ...rest } = this.props;
      return (
        <Grid
          columnModel={this.colModel}
          buildTableHeaders={this.buildTableHeaders}
          {...rest}
        />
      );
    }
  };
};
