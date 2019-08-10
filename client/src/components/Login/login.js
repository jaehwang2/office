import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
        submitted: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { login } = this.props;
    if (username && password) {
      login(username, password);
    }
  }

  render(){
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>

                        <Link to="/" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
  }
}

Login.propTypes = {
  loggingIn: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

export default Login;
