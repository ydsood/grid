import React, { Component } from 'react';
import { Table, Segment, Header, Button } from 'semantic-ui-react';
import { Field } from 'redux-form';
import buildGrid from './gridHOC';
import TableRow from './tableRow';

type EditableGridProps = {
  data: Array<string>,
  formProps: Object,
  title: string,
  columnModel: Array<Object>,
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

  addData(event) {
    event.preventDefault();
    this.props.formProps.fields.push({});
  }

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
    const renderComponent = (
      <Segment>
        <Header as="h4">{`${this.props.title}`}</Header>
        <Table definition>
          {this.props.buildTableHeaders()}
          <Table.Body>
            {this.buildFieldItems()}
            <Table.Row>
              <Table.Cell>
                <Button
                  onClick={this.addData}
                  circular
                  icon="plus"
                  color="green"
                />
              </Table.Cell>
              <Table.Cell />
              <Table.Cell />
              <Table.Cell />
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    );
    return renderComponent;
  }
}

export default buildGrid(EditableGrid);
