import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {BottomNavigation, BottomNavigationItem}
  from 'material-ui/BottomNavigation';
import { red700, green700, yellow600, brown700 }
  from 'material-ui/styles/colors';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Dissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Satisfied from 'material-ui/svg-icons/social/sentiment-satisfied'

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
    const styleFlatButton = {
      height: '64px',
      lineHeight: '64px'
    };

    const styleTitle = {
      cursor: 'pointer'
    };

    const styleBottomNav = {
      backgroundColor: '#f2df8f',
      position: 'fixed',
      bottom: 0
    };

    const style = {
      height: 100,
      width: '100%',
      marginTop: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

    const styleRaisedButton = {
      marginLeft: '20px',
      marginTop: '20px',
    };

    const styleEmail = {
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

    const stylePassword = {
      errorStyle: {
        color: green700,
      },
      underlineStyle: {
        borderColor: green700,
      },
      floatingLabelStyle: {
        color: green700,
      },
      floatingLabelFocusStyle: {
        color: green700,
      },
    };

    return <div>
      <div>
        <Paper className="tomatoIcon regForm" circle={true}></Paper>

        <TextField
          className="regFormInput"
          floatingLabelText="Email"
          name="email"
          onChange={this.handleTextChange}
          underlineStyle={styleEmail.underlineStyle}
          floatingLabelStyle={styleEmail.floatingLabelStyle}
          floatingLabelFocusStyle={styleEmail.floatingLabelFocusStyle}
        />
      </div>

      <div>
        <Paper className="lettuceIcon regForm" circle={true}></Paper>

        <TextField
          className="regFormInput"
          floatingLabelText="Password"
          name="password"
          onChange={this.handleTextChange}
          type="password"
          underlineStyle={stylePassword.underlineStyle}
          floatingLabelStyle={stylePassword.floatingLabelStyle}
          floatingLabelFocusStyle={stylePassword.floatingLabelFocusStyle}
        />
      </div>
      <div className="raisedBtn">
        <RaisedButton
          icon={<Satisfied />}
          label="Login"
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

export default Login;
