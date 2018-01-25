import React from 'react';
import { Input, TextArea } from 'semantic-ui-react';

export default function InputField({ input, meta, ...props }: Object) {
  const component =
    props.type === 'textarea' ? (
      <TextArea {...input} cols={50} rows={4} {...props} />
    ) : (
      <Input {...input} {...props} />
    );
  return component;
}
