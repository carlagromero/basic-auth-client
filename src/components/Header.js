import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const isLogin = useSelector(state => state.auth.authenticated);

  const renderLinks = () => (
    isLogin
    ? <div>
      <Link to="/feature">Feature</Link>
      <Link to="/signout">Sign Out</Link>
    </div>
    : <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </div>
  );

  return (
    <div className="header">
      <Link to="/">Redux Auth</Link>
      {renderLinks()}
    </div>
  );
};

export default Header;