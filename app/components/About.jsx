import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import React from 'react';
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem }
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
    const stylePaper = {
      marginLeft: '3%',
      marginRight: '3%',
      padding: '1%'
    };

    return <div>
    <h2 className="aboutheader">Hungry?</h2>
    <h2 className="aboutheader">Indecisive?</h2>
    <Paper style={stylePaper}>
      <p className="aboutblock">We've all been there. Whether you're somewhere new and unfamiliar or just can't put your finger on which local eatery you're craving, Bitesize is here to help.</p>
      <p className="aboutblock">Put in a location, a search term (if you feel like it), and we'll give you a list just short enough to avoid the analysis paralysis that comes with a having huge pile of options to sort through.</p>
      <p className="aboutblock">Here's to good food and short hunts!</p>
    </Paper>
    </div>;
  }
});

export default About;
