import React, { Component } from 'react';
import type { EditableGrid } from './editableGrid';
import type { StaticGrid } from './staticGrid';

type Props = {
  +getData: Function | void,
  editable: boolean | void,
};

type SupportedList = FormList | StaticList;

export default (List: SupportedList) =>
  class extends Component<Props> {
    componentWillMount() {
      if (typeof this.props.getData === 'function') {
        this.props.getData();
      }
    }
    render() {
      return <List {...this.props} />;
    }
  };
