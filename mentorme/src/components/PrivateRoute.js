import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, errorStatusCode, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {
        return localStorage.getItem('token') && errorStatusCode !== 403 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        );
      }}
    />
  );
};

export default PrivateRoute;
