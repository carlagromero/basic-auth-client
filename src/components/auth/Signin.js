import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

const Signin = ({ handleSubmit }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.auth.errorMessage);

  const handleSubmitForm = formProps => {
    dispatch(actions.signin(formProps, () => {
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
      <button>Sign In!</button>
    </form>
  );
}
 
export default reduxForm({ form: 'signin' })(Signin);