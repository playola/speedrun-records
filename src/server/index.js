import 'babel-polyfill';
import express from 'express';
import path from 'path';
import { matchRoutes } from 'react-router-config';
import createStore from '../client/store';
import Routes from '../client/routes';
import { htmlTemplate } from './htmlTemplate';
import { renderer } from './renderer';

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('/*', (req, res) => {
  const store = createStore();

  /**
   * Filter components that needs to load initial data.
   * Dispatch the action and return the promise.
   */
  const loadRouteDependencies = (location, store) => {
    const dataRequirements = matchRoutes(Routes, location)
      .filter(({ route }) => route.component && route.loadData)
      .map(({ route }) => route.loadData(store));
    return Promise.all(dataRequirements);
  };

  /**
   * When the load data promise is resolved, we get the state and render the DOM elements.
   */
  loadRouteDependencies(req.path, store).then(() => {
    /**
     * Get render elements.
     */
    const { html, styles, title } = renderer(store, req.path);

    /**
     * Get state from Redux store.
     */
    const reduxState = store.getState();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlTemplate(html, styles, title, reduxState));
  });
});

app.listen(port);
