import React, { Component } from 'react';
import type { FormList } from './formList';
import type { StaticList } from './staticList';

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
