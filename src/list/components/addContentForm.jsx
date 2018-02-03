import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

type Props = {
  submitHandler: Function,
  fields: Array<{
    name: string,
    defaultValue: *,
    placeholder: string | void,
    required: boolean
  }>
};

class AddContent extends Component<Props> {
  constructor(props) {
    super(props);
    const fields =
      props.fields &&
      props.fields.map(item => ({ name: item.name, value: item.defaultValue }));
    this.state = fields.reduce((acc, curr) => {
      acc[curr.name] = curr.value;
      return acc;
    }, {});
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newFieldValue = {};
    newFieldValue[event.target.name] = event.target.value;
    this.setState({ ...newFieldValue });
  }

  validateFields() {
    this.props.fields.forEach();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitHandler(this.state);
  }

  renderFields() {
    return this.props.fields.map(field => {
      const value = this.state[field.name] && this.state[field.name];
      return (
        <Form.Input
          key={field.name}
          name={field.name}
          value={value || undefined}
          onChange={this.handleChange}
          placeholder={field.placeholder}
          required={field.required}
        />
      );
    });
  }

  render() {
    return (
      <Segment>
        {this.renderFields()}
        <Button circular icon="check" onClick={this.handleSubmit} />
      </Segment>
    );
  }
}

AddContent.defaultProps = {
  fields: []
};

export default AddContent;
