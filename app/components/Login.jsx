import { browserHistory, withRouter } from 'react-router';
import { red700, yellow600 } from 'material-ui/styles/colors';
import Dissatisfied
  from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Satisfied from 'material-ui/svg-icons/social/sentiment-satisfied';
import TextField from 'material-ui/TextField';
import axios from 'axios';

const Login = React.createClass({
  getInitialState() {
    return {
      login: {
        email: '',
        password: ''
      }
    };
  },

  handleTextChange(event) {
    const nextLogin = Object.assign({}, this.state.login, {
      [event.target.name]: event.target.value
    });

    this.setState({ login: nextLogin });
  },

  handleLogin() {
    const login = this.state.login;

    axios.post('/api/token', login)
    .then(() => {
      browserHistory.push('/');
      this.props.setToast(true, 'Login successful!');
    })
    .catch((err) => {
      this.props.setToast(
        true,
        `Whoops! ${err}.`
      );
    });
  },

  render() {
    const styleRaisedButton = {
      marginLeft: '20px',
      marginTop: '20px'
    };

    const stylePassword = {
      errorStyle: {
        color: red700
      },
      underlineStyle: {
        borderColor: red700
      },
      floatingLabelStyle: {
        color: red700
      },
      floatingLabelFocusStyle: {
        color: red700
      }
    };

    const styleEmail = {
      errorStyle: {
        color: yellow600
      },
      underlineStyle: {
        borderColor: yellow600
      },
      floatingLabelStyle: {
        color: yellow600
      },
      floatingLabelFocusStyle: {
        color: yellow600
      }
    };

    return <div>
      <img className="login" src="./images/login.jpg" />
      <div>
        <Paper circle={true} className="mustard loginForm" />
        <TextField
          className="loginTextField"
          floatingLabelFocusStyle={styleEmail.floatingLabelFocusStyle}
          floatingLabelStyle={styleEmail.floatingLabelStyle}
          floatingLabelText="Email"
          name="email"
          onChange={this.handleTextChange}
          underlineStyle={styleEmail.underlineStyle}
        />
      </div>

      <div>
        <Paper circle={true} className="ketchup loginForm" />
        <TextField
          className="loginTextField"
          floatingLabelFocusStyle={stylePassword.floatingLabelFocusStyle}
          floatingLabelStyle={stylePassword.floatingLabelStyle}
          floatingLabelText="Password"
          name="password"
          onChange={this.handleTextChange}
          type="password"
          underlineStyle={stylePassword.underlineStyle}
        />
      </div>

      <div className="loginBackground" />
      <div className="raisedBtn">
        <RaisedButton
          icon={<Satisfied />}
          label="Login"
          onTouchTap={this.handleLogin}
          style={styleRaisedButton}
        />

        <RaisedButton
          icon={<Dissatisfied />}
          label="Cancel"
          onTouchTap={() => browserHistory.push('/search')}
          style={styleRaisedButton}
        />
      </div>
    </div>;
  }
});

export default withRouter(Login);
