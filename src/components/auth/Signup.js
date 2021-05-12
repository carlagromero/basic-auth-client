import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions';

const Signup = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const handleSubmitForm = formProps => {
    dispatch(actions.signup(formProps));
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <fieldset>
        <label>Email</label>
        <Field
          name="email"
          type="text"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <button>Sign up</button>
    </form>
  );
};
 
export default reduxForm({ form: 'signupdd' })(Signup);