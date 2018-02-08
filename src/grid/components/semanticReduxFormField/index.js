import React from 'react';
import type { FormFieldProps } from 'redux-form';
import { Input, Message, Form } from 'semantic-ui-react';
import _ from 'lodash';

export default function SemanticReduxFormField({
  input,
  label,
  fieldClass,
  required,
  meta: { touched, error, warning },
  as: As = Input,
  ...props
}: FormFieldProps) {
  function handleChange(e, data) {
    if (props.handleCheckboxChange !== undefined) {
      props.handleCheckboxChange(input, data);
    }
    if (typeof data.checked === 'boolean') {
      return input.onChange(data.checked);
    }
    if (data.icon === 'dropdown') {
      return input.onChange(data.value);
    }
    return input.onChange(e);
  }
  const errorBlock =
    touched &&
    ((error && <Message error content={error} />) ||
      (warning && <Message warning content={warning} />));

  // TODO(dkirlin@fasttechnology.com): Update this to a map based on type
  const inputFieldProps = [
    'type',
    'placeholder',
    'value',
    'checked',
    'defaultChecked',
    'onBlur',
    'name',
    'options',
    'action',
    'onClick',
    'icon',
    'iconPosition',
    'handleCheckboxChange',
    'disabled',
    'prefix',
    'precision',
    'thousandSeparator',
    'selection'
  ];
  const onlyInputFieldProps = _.pick({ ...input, ...props }, inputFieldProps);

  const displayValue = props.hidden ? 'none' : '';

  onlyInputFieldProps.onChange = handleChange;

  return (
    <Form.Field
      width={props.width}
      name={props.name}
      error={touched && error}
      required={required}
      style={{ display: displayValue }}
    >
      <label>{label}</label>
      <As
        fluid
        value={input.value}
        checked={input.value}
        defaultChecked={input.value}
        {...onlyInputFieldProps}
      />
      {errorBlock}
    </Form.Field>
  );
}
