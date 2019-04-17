import React from 'react';
import LoginForm from './LoginForm';
import Header from './Header';
import './Login.css';

const Login = props => {
  return (
    <div className="Login">
      <div className="content">
        <div className="bg">
          <div className="left-white" />
          <div className="right-gradient" />
        </div>
      </div>
      <div className="container">
        <Header />
        <LoginForm {...props} />
      </div>
    </div>
  );
};

export default Login;
