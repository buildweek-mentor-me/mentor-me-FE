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
  onLogout = () => {
    this.props.logOutUser().then(() => this.props.history.push('/signin'));
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
            <NavLink onClick={this.onLogout} to="#">
              Logout
            </NavLink>
          )}
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
    isAuthenticated: authReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  {filterQuestion, logOutUser}
)(Header);
