import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class Welcome extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <h2>Welcome, {this.props.user.handle}</h2>
      </div>
    );
  }
}

const mapStateToProps = ({fetchUserReducer}) => {
  return {
    user: fetchUserReducer.user
  };
};

export default connect(
  mapStateToProps,
  {fetchUser}
)(Welcome);
