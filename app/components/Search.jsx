import React from 'react';
import Paper from 'material-ui/Paper';
import { fullWhite, red700, green600, yellow600, brown700 }
  from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import LocalDining from 'material-ui/svg-icons/maps/restaurant';
import Joi from 'joi';

const schema = Joi.object({
  location: Joi.alternatives().try(
    Joi.string().required(), Joi.number().required()
  ),
  keyword: Joi.string()
    .allow('')
    .max(255)
});

const Search = React.createClass({
  getInitialState(){
    return {
      search: {
        location: '',
        keyword: ''
      },
      errors: {}
    }
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

  handleChange(event) {
    const nextSearch = Object.assign({}, this.state.search, {
      [event.target.name]: event.target.value
    });

    this.setState({ search: nextSearch });
  },

  handleSubmit() {
    const result = Joi.validate(this.state.search, schema, {
      abortEarly: false,
    });

    if (result.error) {
      const nextErrors = {};

      for (const detail of result.error.details) {
        nextErrors[detail.path] = detail.message;
      }

      return this.setState({ errors: nextErrors });
    }

    this.props.searchRestaurants(this.state.search.location, this.state.search.keyword, 4);
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
      inputStyle: {
        color: fullWhite,
        fontSize: '30px',
        textShadow: '3px 3px 4px grey',
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

    return <div>


        <img className="welcome" src="./images/welcome.jpg" />


        <Paper
          className="paperSearch lettuce"
          zDepth={3}
          style={{ backgroundColor: green600 }}
        >
          <TextField
            hintText="City or Zip"
            floatingLabelText="Location"
            floatingLabelStyle={styleLocation.floatingLabelStyle}
            floatingLabelFocusStyle={styleLocation.floatingLabelFocusStyle}
            errorText={this.state.errors.location}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            inputStyle={styleLocation.inputStyle}
            name="location"
            style={{marginLeft: '40px'}}
            underlineStyle={styleLocation.underlineStyle}
            value={this.state.search.location}
          />
        </Paper>

        <Paper
          className="cheeseSearch cheese"
          zDepth={3}
          style={{ backgroundColor: yellow600 }}
        >
          <TextField

            hintText="Sushi, lunch, Mexican, etc."
            floatingLabelText="Keyword (optional)"
            errorText={this.state.errors.keyword}
            floatingLabelStyle={styleLocation.floatingLabelStyle}
            floatingLabelFocusStyle={styleLocation.floatingLabelFocusStyle}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            name="keyword"
            style={{marginLeft: '40px'}}
            inputStyle={styleLocation.inputStyle}
            underlineStyle={styleLocation.underlineStyle}
            value={this.state.search.keyword}
          />
        </Paper>

      <div className="burgerBtn">
        <Paper circle={true} zDepth={3} style={styleCircle} className="burger">
          <IconButton
            tooltip="Lets Go!"
            touch={true}
            tooltipPosition="bottom-right"
            iconStyle={styleIcon.largeIcon}
            onTouchTap={this.handleSubmit}
            style={styleIcon.large}
          >
            <div>
              <img className="searchBtn" src="./images/search.jpg"></img>
            </div>
          </IconButton>
        </Paper>
      </div>
    </div>;
  }
});

export default Search;
