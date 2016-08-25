import axios from 'axios'
import React from 'react';
import Paper from 'material-ui/Paper';
import { withRouter, browserHistory } from 'react-router';
import Checkbox from 'material-ui/Checkbox';
import { fullWhite, red700, green600, yellow600, brown700 }
  from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Dissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Satisfied from 'material-ui/svg-icons/social/sentiment-satisfied';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Preferences = React.createClass({
  getInitialState() {
    return {
      preferences: {
        categories: [],
        disabled: [],
        minRating: 1,
        searchRadius: 2
      }
    }
  },

  componentWillMount() {
  axios.get('/api/users')
    .then((res) => {
      this.setState({ preferences: res.data });
    })
    .catch((err) => {
      console.error(err);
    });
  },

  handleRatingChange(event, index, value) {
    const nextPref = Object.assign({}, this.state.preferences, {
      minRating: value
    });
    this.setState({ preferences: nextPref });
  },

  handleRadiusChange(event, index, value) {
    const nextPref = Object.assign({}, this.state.preferences, {
      searchRadius: value
    });
    this.setState({ preferences: nextPref });
  },

  handleCheck(num) {
    const newDisabled = this.state.preferences.disabled.concat();
    const index = newDisabled.indexOf(num);
    if (index >= 0) {
      newDisabled.splice(index, 1);
    }
    else {
      newDisabled.push(num);
    }
    const newPreferences = Object.assign({}, this.state.preferences, { disabled: newDisabled });

    this.setState({ preferences: newPreferences });
  },

  handleSave() {
    axios.patch('/api/users', this.state.preferences)
    .then(() => {
      browserHistory.push('/');
      this.props.setToast(true, 'Preferences updated!');
    })
    .catch((err) => {
      console.error(err);
      this.props.setToast(true, 'Sorry, something went wrong. Try again later.');
    });
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

    return <div>
      <h4 className="prefSelect">Categories:</h4>
      <div className="container">
        {this.state.preferences.categories.map((element, index) => {

          return <div className="item" key={element.id}>
            <Checkbox
              label={element.name.split(' ').join('')}
              onTouchTap={() => this.handleCheck(element.id)}
              checked={this.state.preferences.disabled.includes(element.id)}
            />
          </div>
        })}
      </div>
      <h4 className="prefSelect">Minimum Rating:</h4>
      <SelectField
        floatingLabelText="Minimum Yelp Rating"
        onChange={this.handleRatingChange}
        name="minRating"
        value={this.state.preferences.minRating}
      >
        {rating}
      </SelectField>
      <h4 className="prefSelect">Search Radius:</h4>
      <SelectField
        floatingLabelText="Search Radius"
        onChange={this.handleRadiusChange}
        name="searchRadius"
        value={this.state.preferences.searchRadius}
      >
        {items}
      </SelectField>

      <div className="raisedBtn">
        <RaisedButton
          icon={<Satisfied />}
          label="Save"
          style={styleRaisedButton}
          onTouchTap={this.handleSave}
        />

        <RaisedButton
          icon={<Dissatisfied />}
          label="Cancel"
          style={styleRaisedButton}
          onTouchTap={() => browserHistory.push('/')}
        />
      </div>
    </div>;
  }
});

export default withRouter(Preferences);
