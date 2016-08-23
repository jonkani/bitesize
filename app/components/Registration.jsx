import AssignmentReturned
  from 'material-ui/svg-icons/action/assignment-returned';
import React from 'react';
import Dissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Satisfied from 'material-ui/svg-icons/social/sentiment-satisfied'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import Paper from 'material-ui/Paper';
import { red700, green700, yellow600, brown700 }
  from 'material-ui/styles/colors';
import { withRouter } from 'react-router';

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

const Registration = React.createClass({
  render() {

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
      <img className="results" src="./images/registration.jpg"></img>

      <div>
        <Paper className="tomatoIcon regForm" circle={true}></Paper>

        <TextField
          className="regFormInput"
          hintText="Hint Text"
          floatingLabelText="Email"
          underlineStyle={styleEmail.underlineStyle}
          floatingLabelStyle={styleEmail.floatingLabelStyle}
          floatingLabelFocusStyle={styleEmail.floatingLabelFocusStyle}
        />
      </div>

      <div>
        <Paper className="lettuceIcon regForm" circle={true}></Paper>

        <TextField
          className="regFormInput"
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
          underlineStyle={stylePassword.underlineStyle}
          floatingLabelStyle={stylePassword.floatingLabelStyle}
          floatingLabelFocusStyle={stylePassword.floatingLabelFocusStyle}
        />
      </div>

      <div>
        <Paper className="cheeseIcon regForm" circle={true}></Paper>

        <SelectField
          className="regFormInput"
          floatingLabelText="Minimum Rating"
          floatingLabelStyle={{ color: yellow600 }}
          underlineStyle={{ borderColor: yellow600 }}
          hintText="Hint text"
        >
          {rating}
        </SelectField>
      </div>

      <div>
        <Paper className="burgerIcon regForm" circle={true}></Paper>

        <SelectField
          style={{marginTop: 20}}
          className="regFormInput"
          floatingLabelText="Distance"
          floatingLabelStyle={{ color: brown700 }}
          underlineStyle={{ borderColor: brown700 }}
          hintText="Hint text"
        >
          {items}
        </SelectField>
      </div>

      <div className="raisedBtn">
        <RaisedButton
          icon={<Satisfied />}
          label="Save"
          style={styleRaisedButton}
        />

        <RaisedButton
          icon={<Dissatisfied />}
          label="Cancel"
          style={styleRaisedButton}
        />
      </div>
    </div>;
  }
});

export default withRouter(Registration);
