import AppBar from 'material-ui/AppBar';
import { BottomNavigation, BottomNavigationItem }
  from 'material-ui/BottomNavigation';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';
import { withRouter } from 'react-router';


const App = React.createClass({

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

    const styleAddBarr = {
      backgroundColor: '#f2df8f',
    };

    return <div>
      <AppBar
        style={styleAddBarr}
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

      <Paper zDepth={3}>
        <BottomNavigation style={styleBottomNav} />
      </Paper>

      {this.props.children}
    </div>;
  }
});

export default withRouter(App);
