import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home';
import Login from './containers/Login';
import Private_route from './components/Login/private_route';
import { history } from './helper/history';
import { alertActions } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
          <Router history={history}>
            <div>
              <Private_route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
            </div>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(App);
