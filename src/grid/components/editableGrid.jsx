import React, { Component } from 'react';
import {
  Table,
  Segment,
  Header,
  Button,
  Message,
  Icon
} from 'semantic-ui-react';
import { Field } from 'redux-form';
import buildGrid from './gridHOC';
import TableRow from './tableRow';

type EditableGridProps = {
  data: Array<string>,
  formProps: Object,
  title: string,
  columnModel: Object,
  buildTableHeaders: Function
};

class EditableGrid extends Component<EditableGridProps> {
  constructor(props) {
    super(props);
    this.addData = this.addData.bind(this);
    this.removeData = this.removeData.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      const { data, formProps: { fields } } = nextProps;
      data.forEach(item => fields.push(item));
    }
  }

  addData: Function;
  addData(event) {
    event.preventDefault();
    this.props.formProps.fields.push({});
  }

  removeData: Function;
  removeData(event, index) {
    event.preventDefault();
    const { formProps: { fields } } = this.props;
    fields.remove(index);
  }

  buildFieldItems() {
    const { formProps: { fields } } = this.props;
    return fields.map((name, index) => {
      return (
        <Field
          key={name}
          component={TableRow}
          name={name}
          columnModel={this.props.columnModel}
          removeData={this.removeData}
          editable
          index={index}
        />
      );
    });
  }

  render() {
    const { formProps: { meta } } = this.props;
    const errorState = meta.dirty && meta.invalid;
    const warningState = meta.dirty && !!meta.warning;
    const errorMessage = errorState && (
      <Message error>
        <Icon name="warning" />
        {`Error : ${meta.error} `}
      </Message>
    );
    const warningMessage = warningState && (
      <Message warning>
        <Icon name="warning" />
        {`Warning : ${meta.warning} `}
      </Message>
    );
    const renderComponent = (
      <Segment>
        <div className="grid">
          <Header as="h4">{`${this.props.title}`}</Header>
          <Table definition>
            {this.props.buildTableHeaders()}
            <Table.Body>{this.buildFieldItems()}</Table.Body>
            <Table.Footer fullWidth>
              <Table.Row>
                <Table.HeaderCell
                  colSpan={this.props.columnModel.get().length + 1}
                >
                  <Button
                    onClick={this.addData}
                    circular
                    icon="plus"
                    color="green"
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
        {errorMessage}
        {warningMessage}
      </Segment>
    );
    return renderComponent;
  }
}

export default buildGrid(EditableGrid);
