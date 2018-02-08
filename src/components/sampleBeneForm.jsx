import React, { Component } from 'react';
import { reduxForm, Field, FieldArray, Form as ReduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Segment, Header, Button, Form } from 'semantic-ui-react';

import { getGridData } from '../actions';
import SemanticUIField from './fields/semanticReduxFormField';
import CurrencyField from './fields/currencyField';
import PhoneField from './fields/phoneField';
import Grid from '../grid';

const onSubmit = values => alert(JSON.stringify(values));

const roleDropdownOptions = [
  {
    name: 'principal',
    text: 'Principal Beneficiary',
    value: '1'
  },
  {
    name: 'contingent',
    text: 'Contingent Beneficiary',
    value: '2'
  },
  {
    name: 'tertiary',
    text: 'Tertiary Beneficiary',
    value: '3'
  }
];

const columnDef = [
  {
    dataIndex: 'name',
    name: 'Full Name',
    order: 1
  },
  {
    dataIndex: 'phone',
    name: 'Phone Number',
    order: 2,
    editor: PhoneField
  },
  {
    dataIndex: 'allocation',
    name: 'Allocation',
    order: 3,
    editor: CurrencyField
  }
];

const validateGrid = (value = [], allValues) => {
  const totalAmount = value.reduce((item, acc) => {
    return item.allocation + acc;
  }, 0);
  if (
    Math.abs(totalAmount - allValues.totalDisbursement) !== 0 &&
    value.length > 0 &&
    Object.keys(value[0]).length > 0
  ) {
    return 'Beneficiary amounts are not equal to total amount to disburse';
  }
  return undefined;
};

function SampleBeneForm(props: Object) {
  return (
    <ReduxForm onSubmit={props.handleSubmit(onSubmit)} className="sampleForm">
      <Header as="h1"> Beneficiary Form </Header>
      <h4>Insured Info</h4>
      <Form.Group>
        <Field
          name="insuredFirstName"
          component={SemanticUIField}
          type="text"
          placeholder="Insured First Name"
        />
        <Field
          name="insuredLastName"
          component={SemanticUIField}
          type="text"
          placeholder="Insured Last Name"
        />

        <Field
          component={SemanticUIField}
          as={CurrencyField}
          name="totalDisbursement"
          placeholder="Total Disbursement"
          props={{ label: 'Total Disbursement' }}
        />
      </Form.Group>
      <br />
      <br />
      <br />
      <FieldArray
        name="beneficiaries"
        component={Grid}
        editable
        columnModel={columnDef}
        title="Beneficiaries"
        validate={validateGrid}
      />
      <br />
      <br />
      <br />
      <Button type="submit" basic color="green">
        {' Post '}
      </Button>
    </ReduxForm>
  );
}

const mapStateToProps = state => ({
  gridData: state.gridData
});

const connectedComponent = connect(mapStateToProps, { getGridData })(
  SampleBeneForm
);
export default reduxForm({
  form: 'beneficiaryForm'
})(connectedComponent);
