import { browserHistory, Route, Router } from 'react-router';
import App from 'components/App';
import Reg from 'components/Registration';
import Login from 'components/Login';
import About from 'components/About';
import Search from 'components/Search';
import React from 'react';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/">
        <Route component={Reg} path="/registration" />
        <Route component={Login} path="/login" />
        <Route component={About} path="/about" />
        <Route component={Search} path="/search" />
      </Route>
    </Router>;
  }
});

export default Routes;
