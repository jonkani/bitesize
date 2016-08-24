import React from 'react';
import Paper from 'material-ui/Paper';
import { withRouter } from 'react-router';
import Checkbox from 'material-ui/Checkbox';
import { fullWhite, red700, green600, yellow600, brown700 }
  from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Dissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Satisfied from 'material-ui/svg-icons/social/sentiment-satisfied';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Preferences = React.createClass({
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
        <div className="item">
          <Checkbox
            label="African"
            // 1
          />
        </div>
        <div className="item">
          <Checkbox
            label="Asian Fusion"
            // 2
          />
        </div>
        <div className="item">
          <Checkbox
            label="Barbeque"
            // 3
          />
        </div>
        <div className="item">
          <Checkbox
            label="Burgers"
            // 4
          />
        </div>
        <div className="item">
          <Checkbox
            label="Cajun/Creole"
            // 5
            />
        </div>
        <div className="item">
          <Checkbox
            label="Caribbean"
            // 6
            />
        </div>
        <div className="item">
          <Checkbox
            label="Chinese"
            // 7
            />
        </div>
        <div className="item">
          <Checkbox
            label="Delis"
            // 8
          />
        </div>
        <div className="item">
          <Checkbox
            label="Diners"
            // 9
          />
        </div>
        <div className="item">
          <Checkbox
            label="Fast Food"
            // 10
          />
        </div>
        <div className="item">
          <Checkbox
            label="Italian"
            // 11
          />
        </div>
        <div className="item">
          <Checkbox
            label="Japanese"
            // 12
          />
        </div>
        <div className="item">
          <Checkbox
            label="Korean"
            // 13
          />
        </div>

        <div className="item">
          <Checkbox
            label="Mediterranean"
            // 15
          />
        </div>
        <div className="item">
          <Checkbox
            label="Mexican"
            // 16
          />
        </div>
        <div className="item">
          <Checkbox
            label="Pizza"
            // 18
          />
        </div>
        <div className="item">
          <Checkbox
            label="Gastro Pub"
            // 19
          />
        </div>
        <div className="item">
          <Checkbox
            label="Sandwiches"
            // 20
          />
        </div>
        <div className="item">
          <Checkbox
            label="Seafood"
            // 21
          />
        </div>
        <div className="item">
          <Checkbox
            label="Southern"
            // 22
          />
        </div>
        <div className="item">
          <Checkbox
            label="Spanish"
            // 23
          />
        </div>
        <div className="item">
          <Checkbox
            label="Thai"
            // 24
          />
        </div>
        <div className="item">
          <Checkbox
            label="Vietnamese"
            // 25
          />
        </div>
        <div className="item">
          <Checkbox
            label="LatinAmerican"
            // 14
          />
        </div>
        <div className="item">
          <Checkbox
            label="MiddleEastern"
            // 17
          />
        </div>
      </div>
      <h4 className="prefSelect">Minimum Rating:</h4>
      <SelectField
        floatingLabelText="Minimum Yelp Rating"
        name="minRating"
      >
        {rating}
      </SelectField>
      <h4 className="prefSelect">Search Radius:</h4>
      <SelectField
        floatingLabelText="Search Radius"
        name="searchRadius"
      >
        {items}
      </SelectField>

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

export default withRouter(Preferences);
