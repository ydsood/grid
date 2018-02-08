// @flow
import React from 'react';
import CurrencyInput from 'react-currency-input';
import { Field } from 'redux-form';
import SemanticReduxFormField from './semanticReduxFormField';

type Props = {
  name: string,
  order: number,
  props: Object
};

/*
This component isn't working properly at this time, waiting for the newest version
 to be published to Github
  * https://github.com/jsillitoe/react-currency-input/issues/64
  * https://github.com/jsillitoe/react-currency-input/issues/60
  * https://github.com/jsillitoe/react-currency-input/pull/56
*/
const CurrencyField = ({ name, order, props }: Props) => (
  // TODO(dkirlin@fasttechnology.com): Make the component compatible with locale changes
  <Field
    component={SemanticReduxFormField}
    name={name}
    order={order}
    as={CurrencyInput}
    prefix="$"
    precision="2"
    thousandSeparator=","
    {...props}
  />
);
export default CurrencyField;
