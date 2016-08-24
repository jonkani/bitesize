import AssignmentReturned
  from 'material-ui/svg-icons/action/assignment-returned';
import axios from 'axios';
import React from 'react';
import Dissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Satisfied from 'material-ui/svg-icons/social/sentiment-satisfied';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import Paper from 'material-ui/Paper';
import { red700, green700, yellow600, brown700 }
  from 'material-ui/styles/colors';
import { withRouter } from 'react-router';
import { browserHistory } from 'react-router';

const Registration = React.createClass({
  getInitialState() {
    return {
      user: {
        email: '',
        password: '',
        minRating: '',
        searchRadius: ''
      }
    }
  },

  handleRatingChange(event, index, value) {
    const nextUser = Object.assign({}, this.state.user, {
      minRating: value
    });
    this.setState({ user: nextUser });
  },

  handleRadiusChange(event, index, value) {
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
    const user = this.state.user;
    axios.post('/api/users', user)
    .then(() => {
      console.log('Success!');
      browserHistory.push('/login');
      this.props.setToast(true, 'Thanks for signing up! Go ahead and log in.');
    })
    .catch((err) => {
      console.error(err);
    })
  },

  render() {
    const rating = [
      <MenuItem key={1} value={1} primaryText="1.0" />,
      <MenuItem key={2} value={2} primaryText="2.0" />,
      <MenuItem key={3} value={3} primaryText="3.0" />,
      <MenuItem key={4} value={4} primaryText="4.0" />,
    ];

    const items = [
      <MenuItem key={1} value={1} primaryText="1 mile" />,
      <MenuItem key={2} value={2} primaryText="2 miles" />,
      <MenuItem key={3} value={3} primaryText="3 miles" />,
    ];

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

    const user = this.state.user;

    return <div>
      <img className="registration" src="./images/registration.jpg"></img>

      <div>
        <Paper className="tomatoIcon regForm" circle={true}></Paper>

        <TextField
          className="regFormInput"
          hintText="What's your email?"
          floatingLabelText="Email"
          name="email"
          onChange={this.handleTextChange}
          underlineStyle={styleEmail.underlineStyle}
          floatingLabelStyle={styleEmail.floatingLabelStyle}
          floatingLabelFocusStyle={styleEmail.floatingLabelFocusStyle}
          value={user.email}
        />
      </div>

      <div>
        <Paper className="lettuceIcon regForm" circle={true}></Paper>

        <TextField
          className="regFormInput"
          hintText="8 characters or more!"
          floatingLabelText="Password"
          name="password"
          onChange={this.handleTextChange}
          type="password"
          underlineStyle={stylePassword.underlineStyle}
          floatingLabelStyle={stylePassword.floatingLabelStyle}
          floatingLabelFocusStyle={stylePassword.floatingLabelFocusStyle}
          value={user.password}
        />
      </div>

      <div>
        <Paper className="cheeseIcon regForm" circle={true}></Paper>

        <SelectField
          className="regFormInput"
          floatingLabelText="Minimum Yelp Rating"
          floatingLabelStyle={{ color: yellow600 }}
          onChange={this.handleRatingChange}
          name="minRating"
          underlineStyle={{ borderColor: yellow600 }}
          value={user.minRating}
        >
          {rating}
        </SelectField>
      </div>

      <div>
        <Paper className="burgerIcon regForm" circle={true}></Paper>

        <SelectField
          className="regFormInput"
          floatingLabelText="Search Radius"
          floatingLabelStyle={{ color: brown700 }}
          onChange={this.handleRadiusChange}
          name="searchRadius"
          style={{marginTop: 20}}
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
          style={styleRaisedButton}
          onTouchTap={this.handleRegister}
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

export default withRouter(Registration);
