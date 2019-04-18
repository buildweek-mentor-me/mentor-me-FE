import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({
  component: Component,
  errorStatusCode,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        return localStorage.getItem('token') &&
          errorStatusCode !== 403 &&
          isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

const mapStateToProps = ({authReducer}) => ({
  isAuthenticated: authReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(PrivateRoute);
