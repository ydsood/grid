import React, { Component } from 'react';
import { Table, Segment, Header, Sidebar, Button } from 'semantic-ui-react';
import { Field } from 'redux-form';
import AddContent from './addContentForm';
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
    this.state = {
      addData: false
    };
    this.addData = this.addData.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      const { data, formProps: { fields } } = nextProps;
      data.forEach(item => fields.push(item));
    }
  }

  addData() {
    this.setState({ addData: true });
  }

  addDataComplete() {
    this.setState({ addData: false });
  }

  submitHandler(values) {
    console.log(values);
    this.props.formProps.fields.push(values);
    this.addDataComplete();
  }

  cancelHandler() {
    this.addDataComplete();
  }

  buildFieldItems() {
    const { formProps: { fields } } = this.props;
    let rowNumber = 0;
    /* if (!fields || fields.length === 0) {
      return <Segment basic />;
    } */
    return fields.map(name => {
      rowNumber += 1;
      return (
        <Field
          key={rowNumber}
          component={TableRow}
          name={name}
          columnModel={this.props.columnModel}
        />
      );
    });
  }

  render() {
    const { addData } = this.state;
    const renderComponent = (
      <Segment>
        <Header as="h4">
          {`${this.props.title}`}
          {!addData && <Button onClick={this.addData} circular icon="plus" />}
        </Header>
        <Sidebar.Pushable as={Segment} basic>
          <Sidebar
            as={Segment}
            animation="push"
            direction="bottom"
            visible={addData}
            inverted
            width="thin"
            vertical
          >
            <AddContent
              submitHandler={this.submitHandler}
              cancelHandler={this.cancelHandler}
              columnModel={this.props.columnModel}
            />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Table>
                {this.props.buildTableHeaders()}
                <Table.Body>{this.buildFieldItems()}</Table.Body>
              </Table>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Segment>
    );
    return renderComponent;
  }
}

export default buildGrid(EditableGrid);
