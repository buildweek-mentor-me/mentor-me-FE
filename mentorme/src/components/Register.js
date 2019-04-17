import React from 'react';
import RegisterForm from './RegisterForm';
import './Login.css';

const Register = props => {
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
        <RegisterForm {...props} />
      </div>
    </div>
  );
};

export default Register;
