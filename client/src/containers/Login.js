import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import Login from '../components/Login/login';


const mapStateToProps = state => ({
  loggingIn: state.authentication,
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(userActions.login(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
