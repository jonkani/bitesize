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
import { red700, green700, orange500, brown700 }
  from 'material-ui/styles/colors';
import { withRouter } from 'react-router';

const price = [
  <MenuItem key={1} value={1} primaryText="$" />,
  <MenuItem key={2} value={2} primaryText="$$" />,
  <MenuItem key={3} value={3} primaryText="$$$" />,
  <MenuItem key={4} value={4} primaryText="$$$$" />,
];

const items = [
  <MenuItem key={1} value={1} primaryText="1 mile" />,
  <MenuItem key={2} value={2} primaryText="2 miles" />,
  <MenuItem key={3} value={3} primaryText="3 miles" />,
];

const Registration = React.createClass({
  render() {

    const styleRaisedButton = {
      marginLeft: '10%',
      marginTop: '40px',
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
      <h1 className="regTitle">Register:</h1>

      <Paper zDepth={3}>
        <TextField
          hintText="Hint Text"
          floatingLabelText="Email"
          underlineStyle={styleEmail.underlineStyle}
          floatingLabelStyle={styleEmail.floatingLabelStyle}
          floatingLabelFocusStyle={styleEmail.floatingLabelFocusStyle}
        />
      </Paper><br />

      <Paper zDepth={3}>
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
          underlineStyle={stylePassword.underlineStyle}
          floatingLabelStyle={stylePassword.floatingLabelStyle}
          floatingLabelFocusStyle={stylePassword.floatingLabelFocusStyle}
        />
      </Paper><br />

      <Paper zDepth={3}>
        <SelectField
          floatingLabelText="Price"
          floatingLabelStyle={{ color: orange500 }}
          underlineStyle={{ borderColor: orange500 }}
          hintText="Hint text"
        >
          {price}
        </SelectField>
      </Paper><br />

      <Paper zDepth={3}>
        <SelectField
          floatingLabelText="Distance"
          floatingLabelStyle={{ color: brown700 }}
          underlineStyle={{ borderColor: brown700 }}
          hintText="Hint text"
        >
          {items}
        </SelectField>
      </Paper><br />


      <RaisedButton
        icon={<Dissatisfied />}
        label="Cancel"
        style={styleRaisedButton}
      />

      <RaisedButton
        icon={<Satisfied />}
        label="Save"
        style={styleRaisedButton}
      />
    </div>;
  }
});

export default withRouter(Registration);
