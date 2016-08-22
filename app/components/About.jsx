import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import React from 'react';
import {BottomNavigation, BottomNavigationItem}
  from 'material-ui/BottomNavigation';

const About = React.createClass({
  render() {
    const styleFlatButton = {
      height: '64px',
      lineHeight: '64px'
    };

    const styleTitle = {
      cursor: 'pointer'
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

    </div>;
  }
});

export default About;
