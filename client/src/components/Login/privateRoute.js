import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  // const local = typeof localstorage === 'undefined' ? false : localStorage.getItem('user');
  const local = 1;
  if (local) {
    return (
      <Component />
    );
  }
  return (
    <Route
      {...rest}
      render={props => (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )}
    />
  );
}

export default PrivateRoute;
