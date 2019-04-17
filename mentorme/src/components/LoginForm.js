import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logUser} from '../actions';

import './LoginForm.css';

class LoginForm extends Component {
  state = {
    credentials: {
      username: '',
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
    if (this.state.credentials.username === '') {
      this.setState({
        errors: {username: 'Username is required'}
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
    this.props.history.push('/questions');
  };
  render() {
    return (
      <div onSubmit={this.onSubmit} className="form">
        <div className="img-left" />
        <div className="form-content">
          <h2>Sign in</h2>
          <form>
            <div className="form-item">
              <label htmlFor="username">Username</label>
              <input
                className={`${this.state.errors.username ? 'is-invalid' : ''}`}
                onChange={this.onChange}
                type="text"
                name="username"
                placeholder="Enter username..."
                value={this.state.credentials.username}
                error={this.state.errors.username}
              />
              {this.state.errors.username && (
                <p className="error-message-username">
                  {this.state.errors.username}
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
