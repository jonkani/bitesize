import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import { BottomNavigation, BottomNavigationItem }
  from 'material-ui/BottomNavigation';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';
import { browserHistory, withRouter } from 'react-router';
import LocalDining from 'material-ui/svg-icons/maps/restaurant';
import Help from 'material-ui/svg-icons/action/help';
import Person from 'material-ui/svg-icons/action/account-circle';
import Settings from 'material-ui/svg-icons/action/settings';
import PowerSettings from 'material-ui/svg-icons/action/power-settings-new';
import PersonAdd from 'material-ui/svg-icons/content/add-circle';
import ResultModal from 'components/ResultModal';

const App = React.createClass({
  getInitialState() {
    return {
      restaurants: [],
      position: {
        start: 0,
        end: 4
      },
      modal: {
        open: false,
        restaurant: {}
      }
    }
  },

  setModal(restaurant) {
    const newModal = Object.assign({}, this.state.modal, { open: true, restaurant: restaurant });

    this.setState({ modal: newModal });
  },

  closeModal() {
    const newModal = Object.assign({}, this.state.modal, { open: false, restaurant: {} });

    this.setState({ modal: newModal });
  },

  searchRestaurants(location, term, displayNumber) {
    const search = { location, term, displayNumber };

    axios.get('/api/search', {params: search})
    .then((res) => {
      this.setState({ restaurants: res.data.restaurants })
      browserHistory.push('/results');
    })
    .catch((err) => {
      console.error(err);
    })
  },

  nextRestaurants() {
    let newStart = this.state.position.start;
    let newEnd = this.state.position.end;
    const resArr = this.state.restaurants;
    if (newEnd > resArr.length - 1) {
      newStart = 0;
      newEnd = 4;
    }
    else if (newEnd + 4 > resArr.length - 1) {
      newEnd = resArr.length;
      newStart += 4;
    }
    else {
      newStart += 4;
      newEnd += 4;
    }

    const newPostion = Object.assign({}, this.state.position, { start: newStart, end: newEnd });

    this.setState({ position: newPostion });
  },

  logOut() {
    axios.delete('api/token')
    .then(() => {
      browserHistory.push('/');
    })
    .catch((err) => {
      console.error(err);
    });
  },

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
      bottom: 0,
    };

    const styleAddBarr = {
      backgroundColor: '#f2df8f',
    };

    const styleBottonIcon = {
      marginLeft: '25px'
    };
    const styleSelected = {
      marginLeft: '25px',
      color: '#f2df8f'
    };

    const pathLoc = (this.props.routes[1].path || '');

    const navArray = [
      <BottomNavigationItem
      label="Login"
      icon={<Person
        style={styleBottonIcon}
        color={pathLoc === '/login' ? 'red' : ''}
      />}
      onTouchTap={() => {browserHistory.push('/login')}}
      key="login"
      />,
      <BottomNavigationItem
        label="New User"
        icon={<PersonAdd
          style={styleBottonIcon}
          color={pathLoc === '/registration' ? 'red' : ''}
        />}
        onTouchTap={() => {browserHistory.push('/registration')}}
        key="new"
      />,
      <BottomNavigationItem
        label="About"
        icon={<Help
          style={styleBottonIcon}
          color={pathLoc === '/about' ? 'red' : ''}
        />}
        onTouchTap={() => {browserHistory.push('/about')}}
        key="about"
      />,
      <BottomNavigationItem
        label="Hungry!"
        icon={<LocalDining
          style={styleBottonIcon}
          color={pathLoc === '' ? 'red' : ''}
        />}
        onTouchTap={() => {browserHistory.push('/')}}
        key="search"
      />
    ];

    if (document.cookie) {
      navArray.splice(0, 2,
      <BottomNavigationItem
        label="Log Out"
        icon={<PowerSettings style={styleBottonIcon}/>}
        onTouchTap={this.logOut}
        key="logout"
      />,
      <BottomNavigationItem
        label="Preferences"
        icon={
          <Settings
            style={styleBottonIcon}
            color={pathLoc === '/preferences' ? 'red' : ''}
          />}
        onTouchTap={() => {browserHistory.push('/preferences')}}
        key="pref"
      />
    );
    }

    return <div>
      <AppBar
        className="appBarBun"
        style={styleAddBarr}
        titleStyle={styleTitle}
        showMenuIconButton={false}
      >
      </AppBar>

      <Paper zDepth={2}>
        <BottomNavigation style={styleBottomNav} className="bottomNav">
          {navArray}
        </BottomNavigation>
      </Paper>

      {React.cloneElement(this.props.children, {
        searchRestaurants: this.searchRestaurants,
        restaurants: this.state.restaurants,
        nextRestaurants: this.nextRestaurants,
        setModal: this.setModal,
        position: this.state.position
      })}
      <ResultModal
        modalData = {this.state.modal}
        closeModal = {this.closeModal}
      />
    </div>;
  }
});

export default withRouter(App);
