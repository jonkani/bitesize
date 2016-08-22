import React from 'react';
import Paper from 'material-ui/Paper';
import { fullWhite, red700, green600, yellow600, brown700 }
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


    return <div>

      <img className="search" src="./images/search.jpg" />

      <Paper className="paper" zDepth={3} style={{ backgroundColor: green600 }}>
        <Place />
        <TextField
          hintText="City or Zip"
          floatingLabelText="Location"
          underlineStyle={styleLocation.underlineStyle}
          floatingLabelStyle={styleLocation.floatingLabelStyle}
          floatingLabelFocusStyle={styleLocation.floatingLabelFocusStyle}
        />
      </Paper><br />

      <Paper className="paper" zDepth={3} style={{ backgroundColor: yellow600 }}>
        <Keyword />
        <TextField
          hintText="sushi, lunch, Mexican"
          floatingLabelText="Keyword"
          underlineStyle={styleLocation.underlineStyle}
          floatingLabelStyle={styleLocation.floatingLabelStyle}
          floatingLabelFocusStyle={styleLocation.floatingLabelFocusStyle}
        />
      </Paper>
      <div className="searchBtn">
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
      </div>
    </div>;
  }
});

export default Search;
