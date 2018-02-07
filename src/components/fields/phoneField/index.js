// @flow
import React from 'react';
import { Field } from 'redux-form';
import { Input } from 'semantic-ui-react';
import { phone as phoneFormatter } from '../formatters';
import { phone as phoneNormalizer } from '../normalizers';
import { phone as phoneValidator } from '../validators';

import SemanticUiField from '../semanticReduxFormField';

type Props = {
  name: string,
  order: number,
  props: Object
};

const phoneField = ({ name, order, props }: Props) => (
  <Field
    component={SemanticUiField}
    as={Input}
    format={phoneFormatter}
    normalize={phoneNormalizer}
    validate={phoneValidator}
    name={name}
    order={order}
    {...props}
  />
);

export default phoneField;
