import AppBar from 'material-ui/AppBar';
import PersonAdd from 'material-ui/svg-icons/content/add-circle';
import Help from 'material-ui/svg-icons/action/help';
import Person from 'material-ui/svg-icons/action/account-circle';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import React from 'react';
import IconButton from 'material-ui/IconButton';
import LocalDining from 'material-ui/svg-icons/maps/restaurant';
import { red700, green700, orange500, brown700 }
  from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem}
  from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FontIcon from 'material-ui/FontIcon';
import ActionGrade from 'material-ui/svg-icons/action/grade';

const App = React.createClass({
  render() {
    const styleFlatButton = {
      height: '64px',
      lineHeight: '64px'
    };

    const styleTitle = {
      cursor: 'pointer'
    };

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

    const styleBottomNav = {
      backgroundColor: '#f2df8f',
      position: 'fixed',
      bottom: 0
    };

    const style = {
      height: 100,
      width: '100%',
      marginTop: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

    return <div>
      <AppBar
        onTitleTouchTap={this.handleTitleTouchTap}
        title="Meal Wheel"
        titleStyle={styleTitle}
      >
        <FlatButton
          style={styleFlatButton}
          onTouchTap={this.handleTouchTap}
          label="New Post"
        />
      </AppBar>

      <div>
        <div className="buttonBox">
          <IconButton
            tooltip="New User"
            touch={true}
            tooltipPosition="bottom-right"
            iconStyle={styleIcon.largeIcon}
            style={styleIcon.large}
          >
            <PersonAdd color={red700} />
          </IconButton>

          <IconButton
            tooltip="Login"
            touch={true}
            tooltipPosition="bottom-right"
            iconStyle={styleIcon.largeIcon}
            style={styleIcon.large}
          >
            <Person color={green700} />
          </IconButton>
        </div>

        <div className="buttonBox">
          <IconButton
            tooltip="What We Do"
            touch={true}
            tooltipPosition="bottom-right"
            iconStyle={styleIcon.largeIcon}
            style={styleIcon.large}
          >
            <Help color={orange500} />
          </IconButton>

          <IconButton
            tooltip="Lets Go!"
            touch={true}
            tooltipPosition="bottom-right"
            iconStyle={styleIcon.largeIcon}
            style={styleIcon.large}
          >
            <LocalDining color={brown700} />
          </IconButton>
        </div>
      </div>

      <Paper zDepth={3}>
        <BottomNavigation style={styleBottomNav} />
      </Paper>

    </div>;
  }
});

export default App;
