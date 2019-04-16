import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {filterQuestion} from '../actions';
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

  render() {
    return (
      <Fragment>
        <div className="logo" />
        <nav>
          {this.props.isAuthenticated && <NavLink to="/home">Home</NavLink>}
          {this.props.isAuthenticated && (
            <NavLink to="/add-question">Ask something</NavLink>
          )}
          {this.props.isAuthenticated && <NavLink to="/logout">Logout</NavLink>}
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

const mapStateToProps = ({loginReducer, logoutReducer}) => {
  return {
    isAuthenticated: loginReducer.isAuthenticated,
    isLoggedOut: logoutReducer.isLoggedOut
  };
};

export default connect(
  mapStateToProps,
  {filterQuestion}
)(Header);
