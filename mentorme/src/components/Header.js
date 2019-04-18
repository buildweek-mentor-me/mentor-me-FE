import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {filterQuestion, logOutUser} from '../actions';
import './Header.css';

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
    this.props.logOutUser().then(() => this.props.history.push('/'));
  };

  render() {
    const path = this.props.location.pathname;
    return (
      <div className="Header">
        <div className="container">
          <div className="logo" />
          {path !== '/' && this.props.isAuthenticated && (
            <div className="header">
              <nav>
                <NavLink to="/questions">Questions</NavLink>
                <NavLink to="/add-question">Ask something</NavLink>
                <NavLink onClick={this.onLogout} to="#">
                  Logout
                </NavLink>
              </nav>
              <form>
                <div className="form-content">
                  <i class="fas fa-search" />
                  <input
                    onChange={this.onChange}
                    type="text"
                    name="search"
                    placeholder="Search by keywords..."
                    value={this.state.search}
                  />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({authReducer, questionsReducer}) => {
  return {
    isAuthenticated: authReducer.isAuthenticated,
    filteredQuestion: questionsReducer.filteredQuestion
  };
};

const HeaderWithRouter = withRouter(Header);

export default connect(
  mapStateToProps,
  {filterQuestion, logOutUser}
)(HeaderWithRouter);
