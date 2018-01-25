import React from 'react';
import { Form, TextArea, Message } from 'semantic-ui-react';
import InputField from '../../components/input';

export default ({ input, meta, ...extra }) => {
  const { name } = input;
  const { error } = meta;
  const { placeholder } = extra;

  return (
    <div>
      <Form.Field name={name} error={!!error} placeholder={placeholder} control={InputField} />
      {error && <Message error>{error}</Message>}
    </div>
  );
};
