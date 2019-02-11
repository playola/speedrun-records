import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers routes
import {
  RecordsList,
  RecordDetails,
} from '../containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={RecordsList} />
    <Route path="/record-detail/:index" component={RecordDetails} />
  </Switch>
);

export default Routes;
