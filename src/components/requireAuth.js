import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const requireAuth = Component => ({ ...props }) => {
  const history = useHistory();
  const isLoggedIn = useSelector(state => state.auth).authenticated;

  React.useEffect(() => {
    if(!isLoggedIn) {
      history.push('/');
    }
  });


  return <Component {...props} />;
};

export default requireAuth;