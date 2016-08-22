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
  getInitialState(){
    return {
      search: {
        location: '',
        keyword: ''
      }
    }
  },

  handleChange(event) {
    const nextSearch = Object.assign({}, this.state.search, {
      [event.target.name]: event.target.value
    });

    this.setState({ search: nextSearch });
  },

  handleSubmit() {
    this.props.searchRestaurants(this.state.search.location, this.state.search.keyword, 5);
  },

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

    const styleForm = {

    };

    return <div>

      <Paper style={styleForm} className="tomato" >
        <img className="search" src="./images/search.jpg" />
      </Paper>

      <Paper className="lettuce">
        <Paper
          className="paper"
          zDepth={3}
          style={{ backgroundColor: green600 }}
        >
          <Place />
          <TextField
            hintText="City or Zip"
            floatingLabelText="Location"
            floatingLabelStyle={styleLocation.floatingLabelStyle}
            floatingLabelFocusStyle={styleLocation.floatingLabelFocusStyle}
            onChange={this.handleChange}
            name="location"
            underlineStyle={styleLocation.underlineStyle}
            value={this.state.search.location}
          />
        </Paper>
      </Paper>

      <Paper className="cheese">
        <Paper
          className="paper"
          zDepth={3}
          style={{ backgroundColor: yellow600 }}
        >
          <Keyword />
          <TextField
            hintText="sushi, lunch, Mexican"
            floatingLabelText="Keyword"
            floatingLabelStyle={styleLocation.floatingLabelStyle}
            floatingLabelFocusStyle={styleLocation.floatingLabelFocusStyle}
            onChange={this.handleChange}
            name="keyword"
            underlineStyle={styleLocation.underlineStyle}
            value={this.state.search.keyword}
          />
        </Paper>
      </Paper>

      <div className="burger">
        <Paper circle={true} zDepth={3} style={styleCircle} className="searchBtn">
          <IconButton
            tooltip="Lets Go!"
            touch={true}
            tooltipPosition="bottom-right"
            iconStyle={styleIcon.largeIcon}
            onTouchTap={this.handleSubmit}
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
