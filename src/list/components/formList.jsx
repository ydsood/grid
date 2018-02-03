import React, { Component } from 'react';
import { List, Segment, Header, Sidebar, Button } from 'semantic-ui-react';
import { Field } from 'redux-form';
import AddContent from './addContentForm';
import buildList from './listHOC';
import ListItem from './listItem';

type FormListProps = {
  data: Array<string>,
  formProps: Object,
  title: string
};

class FormList extends Component<FormListProps> {
  constructor(props) {
    super(props);
    this.state = {
      addData: false
    };
    this.addData = this.addData.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
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
    this.props.formProps.fields.push(values.newData);
    this.addDataComplete();
  }

  buildFieldItems() {
    const { formProps: { fields } } = this.props;
    let cardNumber = 0;
    if (!fields || fields.length === 0) {
      return <Segment basic />;
    }
    return fields.map(name => {
      cardNumber += 1;
      return (
        <List.Item key={`${name}.newData`}>
          <Field key={cardNumber} component={ListItem} name={name} />
        </List.Item>
      );
    });
  }

  render() {
    const { addData } = this.state;
    const fields = [{ name: 'newData', placeHolder: 'add content...' }];
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
            <AddContent submitHandler={this.submitHandler} fields={fields} />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <List>{this.buildFieldItems()}</List>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Segment>
    );
    return renderComponent;
  }
}

export default buildList(FormList);
