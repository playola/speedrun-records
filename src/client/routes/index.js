import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Containers routes
import RecordsList from '#containers/records-list';
import RecordDetail from '#containers/records-detail';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={RecordsList} />
      <Route path="/record-detail/:index" component={RecordDetail} />
    </Switch>
  </Router>
);

export default Routes;
