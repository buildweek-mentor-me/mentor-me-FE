import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logUser} from '../actions';

import './LoginForm.css';

class LoginForm extends Component {
  state = {
    credentials: {
      email: '',
      password: ''
    },
    errors: {}
  };

  onChange = e => {
    e.persist();
    this.setState(prevState => ({
      credentials: {
        ...prevState.credentials,
        [e.target.name]: e.target.value
      }
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.credentials.email === '') {
      this.setState({
        errors: {email: 'Email is required'}
      });
      return;
    }

    if (this.state.credentials.password === '') {
      this.setState({
        errors: {password: 'Password is required'}
      });
      return;
    }

    this.props.logUser(this.state.credentials);
    this.props.history.push('/questions-list');
  };
  render() {
    return (
      <div onSubmit={this.onSubmit} className="form">
        <div className="img-left" />
        <div className="form-content">
          <h2>Sign in</h2>
          <form>
            <div className="form-item">
              <label htmlFor="email">Email</label>
              <input
                className={`${this.state.errors.email ? 'is-invalid' : ''}`}
                onChange={this.onChange}
                type="email"
                name="email"
                placeholder="Enter email..."
                value={this.state.credentials.email}
                error={this.state.errors.email}
              />
              {this.state.errors.email && (
                <p className="error-message-email">{this.state.errors.email}</p>
              )}
            </div>
            <div className="form-item">
              <label htmlFor="password">Password</label>
              <input
                className={`${this.state.errors.password ? 'is-invalid' : ''}`}
                onChange={this.onChange}
                type="password"
                name="password"
                placeholder="Enter password..."
                value={this.state.credentials.password}
                error={this.state.errors.password}
              />
              {this.state.errors.password && (
                <p className="error-message-password">
                  {this.state.errors.password}
                </p>
              )}
            </div>
            <input className="btn-sign-in" type="submit" value="SIGN IN" />
            <div className="register">
              <p>Don't have an account?</p>
              <Link to="/register">REGISTER</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {logUser}
)(LoginForm);
