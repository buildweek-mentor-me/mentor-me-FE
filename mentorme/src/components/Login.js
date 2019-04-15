import React from 'react';
import LoginForm from './LoginForm';
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
        <div className="logo" />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
