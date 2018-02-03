// @flow
import React, { Component } from 'react';
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
    constructor(props) {
      super(props);
      this.colModel = new ColumnModel(props.columnModel);
    }
    componentWillMount() {
      if (typeof this.props.getData === 'function') {
        this.props.getData();
      }
    }

    colModel: ColumnModelType;

    render() {
      const { columnModel: _, ...rest } = this.props;
      return <Grid columnModel={this.colModel} {...rest} />;
    }
  };
};
