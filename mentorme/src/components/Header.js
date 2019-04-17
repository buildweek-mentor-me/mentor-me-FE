import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {filterQuestion, logOutUser} from '../actions';
import './Login.css';

class Header extends React.Component {
  state = {
    search: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (e.target.name === 'search') {
      this.props.filterQuestion(e.target.value);
    }
  };

  onSubmit = e => {
    e.preventDefault();
  };
  logOut = () => {
    this.props.logOutUser();
  };

  render() {
    return (
      <Fragment>
        <div className="logo" />
        <nav>
          {this.props.isAuthenticated && <NavLink to="/home">Home</NavLink>}
          {this.props.isAuthenticated && (
            <NavLink to="/add-question">Ask something</NavLink>
          )}
          {this.props.isAuthenticated && (
            <NavLink onClick={this.logOut} to="/logout">
              Logout
            </NavLink>
          )}
          {this.props.isLoggedOut && <NavLink to="/signin">Signin</NavLink>}
          {this.props.isLoggedOut && <NavLink to="/register">Register</NavLink>}
        </nav>
        {this.props.isAuthenticated && (
          <form>
            <input
              onChange={this.onChange}
              type="text"
              name="search"
              placeholder="Search..."
              value={this.state.search}
            />
            <input type="submit" value="Search" />
          </form>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({authReducer}) => {
  return {
    isAuthenticated: authReducer.isAuthenticated,
    isLoggedOut: authReducer.isLoggedOut
  };
};

export default connect(
  mapStateToProps,
  {filterQuestion, logOutUser}
)(Header);
