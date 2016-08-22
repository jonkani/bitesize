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
        className="appBarBun"
        style={styleAddBarr}
        titleStyle={styleTitle}
      >
        <FlatButton
          style={styleFlatButton}
          onTouchTap={this.handleTouchTap}
          label="btn"
        />
      </AppBar>

      <Paper zDepth={3}>
        <BottomNavigation style={styleBottomNav} className="appBarBun"/>
      </Paper>

      {this.props.children}
    </div>;
  }
});

export default withRouter(App);
