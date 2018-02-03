import React from 'react';
import { reduxForm, Field, FieldArray, Form } from 'redux-form';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import InputField from './input';
import List from '../list';
import Grid from '../grid';
import { getData, getGridData } from '../actions';

const onSubmit = values => alert(JSON.stringify(values));
type Props = {
  handleSubmit: Function,
  data: Array<Object>,
  gridData: Array<Object>,
  getData: Function,
  getGridData: Function
};

const roleFormatter = value => {
  switch (value) {
    case 8:
      return 'Owner';
    case 31:
      return 'Payor';
    case 10:
      return 'Principal Beneficiary';
    default:
      return value;
  }
};

function AboutMe(props: Props) {
  const { handleSubmit, data, gridData } = props;
  const columnModel = [
    {
      dataIndex: 'name',
      name: 'Full Name',
      type: 'string',
      order: 1
    },
    {
      dataIndex: 'role',
      name: 'Role',
      type: 'string',
      order: 2,
      formatter: roleFormatter
    },
    {
      dataIndex: 'percentage',
      name: 'Role Percentage',
      type: 'number'
    }
  ];
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="aboutMe">
      <p>I am</p>
      <Field
        component={InputField}
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      <Field
        component={InputField}
        name="lastName"
        type="text"
        placeholder="Last Name"
      />
      <br />
      <br />
      <br />
      <Field
        component={InputField}
        name="addtionally"
        type="textarea"
        placeholder="Additionally..."
      />
      <br />
      <br />
      <br />
      <FieldArray
        component={List}
        name="hobbiesList"
        data={data}
        getData={props.getData}
        title="Some things I like doing when I am not working"
        editable
      />
      <List
        data={data}
        getData={props.getData}
        name="staticHobbies"
        title="Static Hobbies"
      />
      <br />
      <br />
      <FieldArray
        name="beneficiaryGrid"
        component={Grid}
        data={gridData}
        getData={props.getGridData}
        title="Beneficiary Grid"
        columnModel={columnModel}
        editable
      />
      <br />
      <br />

      <Grid
        name="staticGrid"
        data={gridData}
        getData={props.getGridData}
        title="Static Grid"
        columnModel={columnModel}
      />

      <Button type="submit" basic color="green">
        {' Post '}
      </Button>
      <br />
      <br />
      <br />
      <br />
    </Form>
  );
}

const mapStateToProps = state => ({
  data: state.data,
  gridData: state.gridData
});

const connectedComponent = connect(mapStateToProps, { getData, getGridData })(
  AboutMe
);

export default reduxForm({
  form: 'aboutMe'
})(connectedComponent);
