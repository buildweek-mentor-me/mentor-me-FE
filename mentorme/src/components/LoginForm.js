import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logUser} from '../actions';

import './LoginForm.css';

class LoginForm extends Component {
  state = {
    credentials: {
      handle: '',
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

    if (this.state.credentials.handle === '') {
      this.setState({
        errors: {handle: 'Username is required'}
      });
      return;
    }

    if (this.state.credentials.password === '') {
      this.setState({
        errors: {password: 'Password is required'}
      });
      return;
    }

    this.props
      .logUser(this.state.credentials)
      .then(() => this.props.history.push('/questions'));
  };
  render() {
    return (
      <div className="form">
        <div className="img-left" />
        <div className="form-content">
          <h2>Sign in</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-item">
              <label htmlFor="username">Username</label>
              <input
                className={`${this.state.errors.handle ? 'is-invalid' : ''}`}
                onChange={this.onChange}
                type="text"
                name="handle"
                placeholder="Enter username..."
                value={this.state.credentials.handle}
                error={this.state.errors.handle}
              />
              {this.state.errors.handle && (
                <p className="error-message-handle">
                  {this.state.errors.handle}
                </p>
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

export default connect(null, {logUser})(LoginForm);
