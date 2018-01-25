import React from 'react';
import { reduxForm, Field, FieldArray, Form } from 'redux-form';
import { connect } from 'react-redux';
import InputField from './input';
import List from '../list';
import { getData } from '../actions';

const onSubmit = values => alert(JSON.stringify(values));
type Props = {
  handleSubmit: Function,
  data: Array<Object>,
  getData: Function,
};

function AboutMe(props: Props) {
  const { handleSubmit, data } = props;
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="aboutMe">
      <p>I am</p>
      <Field component={InputField} name="firstName" type="text" placeholder="First Name" />
      <Field component={InputField} name="lastName" type="text" placeholder="Last Name" />
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
      <List data={data} getData={props.getData} name="staticHobbies" title="Static Hobbies" />
      <br />
      <br />
      <input type="submit" value="Post" />
    </Form>
  );
}

const mapStateToProps = state => ({
  data: state.data,
});

const connectedComponent = connect(mapStateToProps, { getData })(AboutMe);

export default reduxForm({
  form: 'aboutMe',
})(connectedComponent);
