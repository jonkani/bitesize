/* eslint-disable react/jsx-no-bind*/

import { brown700, green700, red700, yellow600 }
  from 'material-ui/styles/colors';
import { browserHistory, withRouter } from 'react-router';
import Dissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Joi from 'joi';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Satisfied from 'material-ui/svg-icons/social/sentiment-satisfied';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import axios from 'axios';

const schema = Joi.object({
  email: Joi.string().trim().email(),
  password: Joi.string().trim().min(8),
  minRating: Joi.number().min(1).max(4),
  searchRadius: Joi.number().min(1).max(3)
});

const Registration = React.createClass({
  getInitialState() {
    return {
      user: {
        email: '',
        password: '',
        minRating: '',
        searchRadius: ''
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

    this.setState({ errors: nextErrors });
  },

  validateSelect(name, value) {
    const nextErrors = Object.assign({}, this.state.errors);
    const result = Joi.validate({ [name]: value }, schema);

    if (result.error) {
      for (const detail of result.error.details) {
        nextErrors[detail.path] = detail.message;
      }

      return this.setState({ errors: nextErrors });
    }

    delete nextErrors[name];

    this.setState({ errors: nextErrors });
  },

  handleRatingChange(event, index, value) {
    this.validateSelect('minRating', value);
    const nextUser = Object.assign({}, this.state.user, {
      minRating: value
    });

    this.setState({ user: nextUser });
  },

  handleRadiusChange(event, index, value) {
    this.validateSelect('searchRadius', value);
    const nextUser = Object.assign({}, this.state.user, {
      searchRadius: value
    });

    this.setState({ user: nextUser });
  },

  handleTextChange(event) {
    const nextUser = Object.assign({}, this.state.user, {
      [event.target.name]: event.target.value
    });

    this.setState({ user: nextUser });
  },

  handleRegister() {
    const result = Joi.validate(this.state.user, schema, {
      abortEarly: false
    });

    if (result.error) {
      const nextErrors = {};

      for (const detail of result.error.details) {
        nextErrors[detail.path] = detail.message;
      }

      return this.setState({ errors: nextErrors });
    }

    const user = this.state.user;

    axios.post('/api/users', user)
    .then(() => {
      browserHistory.push('/login');
      this.props.setToast(true, 'Thanks for signing up! Go ahead and log in.');
    })
    .catch((err) => {
      this.props.setToast(
        true,
        `Whoops! ${err}.`
      );
    });
  },

  render() {
    const rating = [
      <MenuItem key={1} primaryText="1.0" value={1} />,
      <MenuItem key={2} primaryText="2.0" value={2} />,
      <MenuItem key={3} primaryText="3.0" value={3} />,
      <MenuItem key={4} primaryText="4.0" value={4} />
    ];

    const items = [
      <MenuItem key={1} primaryText="1 mile" value={1} />,
      <MenuItem key={2} primaryText="2 miles" value={2} />,
      <MenuItem key={3} primaryText="3 miles" value={3} />
    ];

    const styleRaisedButton = {
      marginLeft: '20px',
      marginTop: '20px'
    };

    const styleEmail = {
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

    const stylePassword = {
      errorStyle: {
        color: green700
      },
      underlineStyle: {
        borderColor: green700
      },
      floatingLabelStyle: {
        color: green700
      },
      floatingLabelFocusStyle: {
        color: green700
      }
    };

    const styleError = {
      position: 'absolute',
      top: '0.2rem',
      zIndex: -1
    };

    const user = this.state.user;

    return <div>
      <img className="registration" src="./images/registration.jpg" />

      <div>
        <Paper circle={true} className="tomatoIcon regForm" />

        <TextField
          className="regFormInput"
          errorStyle={styleError}
          errorText={this.state.errors.email}
          floatingLabelFocusStyle={styleEmail.floatingLabelFocusStyle}
          floatingLabelStyle={styleEmail.floatingLabelStyle}
          floatingLabelText="Email"
          hintText="What's your email?"
          name="email"
          onBlur={this.handleBlur}
          onChange={this.handleTextChange}
          style={{ marginTop: '0px' }}
          underlineStyle={styleEmail.underlineStyle}
          value={user.email}
        />
      </div>

      <div>
        <Paper circle={true} className="lettuceIcon regForm" />

        <TextField
          className="regFormInput"
          errorStyle={styleError}
          errorText={this.state.errors.password}
          floatingLabelFocusStyle={stylePassword.floatingLabelFocusStyle}
          floatingLabelStyle={stylePassword.floatingLabelStyle}
          floatingLabelText="Password"
          hintText="8 characters or more!"
          name="password"
          onBlur={this.handleBlur}
          onChange={this.handleTextChange}
          style={{ marginTop: '0px' }}
          type="password"
          underlineStyle={stylePassword.underlineStyle}
          value={user.password}
        />
      </div>

      <div style={{ marginTop: '0px' }}>
        <Paper circle={true} className="cheeseIcon regForm" />

        <SelectField
          className="regFormInput"
          errorStyle={styleError}
          errorText={this.state.errors.minRating}
          floatingLabelStyle={{ color: yellow600 }}
          floatingLabelText="Minimum Yelp Rating"
          name="minRating"
          onChange={this.handleRatingChange}
          underlineStyle={{ borderColor: yellow600 }}
          value={user.minRating}
        >
          {rating}
        </SelectField>
      </div>

      <div style={{ marginTop: '0px' }}>
        <Paper circle={true} className="burgerIcon regForm" />

        <SelectField
          className="regFormInput"
          errorStyle={styleError}
          errorText={this.state.errors.searchRadius}
          floatingLabelStyle={{ color: brown700 }}
          floatingLabelText="Search Radius"
          name="searchRadius"
          onChange={this.handleRadiusChange}
          style={{ marginTop: 20 }}
          underlineStyle={{ borderColor: brown700 }}
          value={user.searchRadius}
        >
          {items}
        </SelectField>
      </div>

      <div className="raisedBtn">
        <RaisedButton
          icon={<Satisfied />}
          label="Save"
          onTouchTap={this.handleRegister}
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

export default withRouter(Registration);
