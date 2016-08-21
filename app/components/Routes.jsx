import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import App from 'components/App';
import Registration from 'components/Registration';
import Landing from 'components/Landing';
import Login from 'components/Login';
import About from 'components/About';
import Search from 'components/Search';
import React from 'react';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/" >
        <IndexRoute component={Landing} />
        <Route component={Registration} path="/registration" />
        <Route component={Login} path="/login" />
        <Route component={About} path="/about" />
        <Route component={Search} path="/search" />
      </Route>
    </Router>;
  }
});

export default Routes;
