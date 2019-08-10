import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const local = typeof localstorage === 'undefined' ? false : localStorage.getItem('user');
  if (local) {
    console.log('no local');
    return (
      <Component {...props} />
    );
  }
  console.log('no local2');
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
