import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions';
import { useHistory } from 'react-router-dom';

const Signup = ({ handleSubmit }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.auth.errorMessage);

  const handleSubmitForm = formProps => {
    dispatch(actions.signup(formProps, () => {
      history.push('/feature');
    }));
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
      <div>{errorMessage}</div>
      <button>Sign up</button>
    </form>
  );
};
 
export default reduxForm({ form: 'signupdd' })(Signup);