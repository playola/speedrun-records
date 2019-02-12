import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers routes
import {
  RecordsList,
  RecordDetails,
  NotFoundPage,
} from '../containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={RecordsList} />
    <Route path="/record-detail/:id" component={RecordDetails} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
