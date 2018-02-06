import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

type Props = {
  submitHandler: Function,
  cancelHandler: Function,
  columnModel: Array<{
    name: string,
    dataIndex: string,
    formatter: Function,
    required: boolean
  }>
};

class AddContent extends Component<Props> {
  constructor(props) {
    super(props);
    const fields =
      props.columnModel &&
      props.columnModel.get().map(item => ({
        name: item.dataIndex,
        value: null
      }));
    this.state = fields.reduce((acc, curr) => {
      acc[curr.name] = curr.value;
      return acc;
    }, {});
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    const newFieldValue = {};
    newFieldValue[event.target.name] = event.target.value;
    this.setState({ ...newFieldValue });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitHandler(this.state);
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.cancelHandler();
  }

  renderFields = () =>
    this.props.columnModel
      .get()
      .map(column => (
        <Form.Input
          key={column.dataIndex}
          name={column.dataIndex}
          onChange={this.handleChange}
          placeholder={column.name}
          required={column.required}
        />
      ));

  render() {
    return (
      <div className="ui unstackable form">
        <Form.Group widths="equal">
          {this.renderFields()}
          <Button circular icon="check" onClick={this.handleSubmit} />
          <Button circular icon="close" onClick={this.handleCancel} />
        </Form.Group>
      </div>
    );
  }
}

AddContent.defaultProps = {
  fields: []
};

export default AddContent;
