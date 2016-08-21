import React from 'react';
import Paper from 'material-ui/Paper';
import { fullWhite, red700, green700, orange500, brown700 }
  from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import LocalDining from 'material-ui/svg-icons/maps/restaurant';
import Place from 'material-ui/svg-icons/maps/place';
import Keyword from 'material-ui/svg-icons/action/search';


const Search = React.createClass({
  render() {
    const styleIcon = {
      largeIcon: {
        width: 150,
        height: 150,
      },
      large: {
        width: 180,
        height: 180,
      },
    };

    const styleLocation = {
      errorStyle: {
        color: '#FFFFFF',
      },
      underlineStyle: {
        borderColor: '#FFFFFF',
      },
      floatingLabelStyle: {
        color: '#FFFFFF',
      },
      floatingLabelFocusStyle: {
        color: '#FFFFFF',
      },
    };

    const styleCircle = {
      height: 180,
      width: 180,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: brown700
    };

    const styleTitle = {
      color: fullWhite
    };


    return <div><br />
      <Paper zDepth={3} style={{ backgroundColor: red700 }}>
        <p style={styleTitle}>Search:</p>
      </Paper>

      <Paper zDepth={3} style={{ backgroundColor: green700 }}>
        <Place />
        <TextField
          hintText="City or Zip"
          floatingLabelText="Location"
          underlineStyle={styleLocation.underlineStyle}
          floatingLabelStyle={styleLocation.floatingLabelStyle}
          floatingLabelFocusStyle={styleLocation.floatingLabelFocusStyle}
        />
      </Paper><br />

      <Paper zDepth={3} style={{ backgroundColor: orange500 }}>
        <Keyword />
        <TextField
          hintText="sushi, lunch, Mexican"
          floatingLabelText="Keyword"
          underlineStyle={styleLocation.underlineStyle}
          floatingLabelStyle={styleLocation.floatingLabelStyle}
          floatingLabelFocusStyle={styleLocation.floatingLabelFocusStyle}
        />
      </Paper>

      <Paper circle={true} zDepth={3} style={styleCircle}>
        <IconButton
          tooltip="Lets Go!"
          touch={true}
          tooltipPosition="bottom-right"
          iconStyle={styleIcon.largeIcon}
          style={styleIcon.large}
        >
          <LocalDining color={fullWhite}/>
        </IconButton>
      </Paper>
    </div>;
  }
});

export default Search;
