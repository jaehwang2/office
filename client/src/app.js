import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/home';
import Login from './containers/login';
import PrivateRoute from './components/Login/privateRoute';
import { history } from './helper/history';
import { alertActions } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      console.log('history.listen');
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
            <Router history={history}>
              <div>
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={Login} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(App);
