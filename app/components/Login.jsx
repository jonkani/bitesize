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
import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string().trim().email(),
  password: Joi.string().trim().min(8)
});

const Login = React.createClass({
  getInitialState() {
    return {
      login: {
        email: '',
        password: ''
      },
      errors: {}
    };
  },

  handleBlur(event) {
  const { name, value } = event.target;
  const nextErrors = Object.assign({}, this.state.errors);
  const result = Joi.validate({ [name]: value }, schema);

  if (result.error) {
    for (const detail of result.error.details) {
      nextErrors[detail.path] = detail.message;
    }

    return this.setState({ errors: nextErrors });
  }

  delete nextErrors[name];

  this.setState({ errors: nextErrors })
  },

  handleTextChange(event) {
    const nextLogin = Object.assign({}, this.state.login, {
      [event.target.name]: event.target.value
    });

    this.setState({ login: nextLogin });
  },

  handleLogin() {
    const result = Joi.validate(this.state.login, schema, {
      abortEarly: false,
    });

    if (result.error) {
      const nextErrors = {};

      for (const detail of result.error.details) {
        nextErrors[detail.path] = detail.message;
      }

      return this.setState({ errors: nextErrors });
    }

    const login = this.state.login;

    axios.post('/api/token', login)
    .then(() => {
      console.log('Success!');
      browserHistory.push('/');
      this.props.setToast(true, 'Login successful!');
    })
    .catch((err) => {
      this.props.setToast(true, 'Login failed! Check your email and password.');
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

    const styleError = {
      position: 'absolute',
      top:'0.2rem',
      zIndex: -1
    };

    return <div>
      <img className="login" src="./images/login.jpg"></img>
      <div>
        <Paper className="mustard loginForm" circle={true}></Paper>
        <TextField
          className="loginTextField"
          errorText={this.state.errors.email}
          errorStyle={styleError}
          floatingLabelText="Email"
          name="email"
          onBlur={this.handleBlur}
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
          errorText={this.state.errors.password}
          errorStyle={styleError}
          floatingLabelText="Password"
          name="password"
          onBlur={this.handleBlur}
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

export default withRouter(Login);
