import axios from 'axios';
import React from 'react';
import { withRouter, browserHistory } from 'react-router';
import Dissatisfied
  from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Satisfied from 'material-ui/svg-icons/social/sentiment-satisfied'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { red700, green700, yellow600, brown700 }
  from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

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
      console.log('Success!');
      browserHistory.push('/search');
    })
    .catch((err) => {
      console.error(err);
    })
  },

  render() {
    const styleRaisedButton = {
      marginLeft: '20px',
      marginTop: '20px',
    };

    const stylePassword = {
      errorStyle: {
        color: red700,
      },
      underlineStyle: {
        borderColor: red700,
      },
      floatingLabelStyle: {
        color: red700,
      },
      floatingLabelFocusStyle: {
        color: red700,
      },
    };

    const styleEmail = {
      errorStyle: {
        color: yellow600,
      },
      underlineStyle: {
        borderColor: yellow600,
      },
      floatingLabelStyle: {
        color: yellow600,
      },
      floatingLabelFocusStyle: {
        color: yellow600,
      },
    };

    return <div>
      <img className="login" src="./images/login.jpg"></img>
      <div>
        <Paper className="mustard loginForm" circle={true}></Paper>
        <TextField
          className="loginTextField"
          hintText="Hint Text"
          floatingLabelText="Email"
          name="email"
          onChange={this.handleTextChange}
          underlineStyle={styleEmail.underlineStyle}
          floatingLabelStyle={styleEmail.floatingLabelStyle}
          floatingLabelFocusStyle={styleEmail.floatingLabelFocusStyle}
        />
      </div>

      <div>
        <Paper className="ketchup loginForm" circle={true}></Paper>
        <TextField
          className="loginTextField"
          hintText="Password Field"
          floatingLabelText="Password"
          name="password"
          onChange={this.handleTextChange}
          type="password"
          underlineStyle={stylePassword.underlineStyle}
          floatingLabelStyle={stylePassword.floatingLabelStyle}
          floatingLabelFocusStyle={stylePassword.floatingLabelFocusStyle}
        />
      </div>

      <div className="loginBackground"></div>
      <div className="raisedBtn">
        <RaisedButton
          icon={<Satisfied />}
          label="Save"
          style={styleRaisedButton}
          onTouchTap={this.handleLogin}
        />

        <RaisedButton
          icon={<Dissatisfied />}
          label="Cancel"
          style={styleRaisedButton}
          onTouchTap={() => {browserHistory.push('/search')}}
        />
      </div>
    </div>;
  }
});

export default withRouter(Login);
