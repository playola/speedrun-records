import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import createStore from './store';
import Routes from './routes';

const store = createStore();

const AppProvider = () => (
  <StoreProvider store={store}>
    <BrowserRouter>
      { renderRoutes(Routes) }
    </BrowserRouter>
  </StoreProvider>
);

ReactDOM.hydrate(
  <AppProvider />,
  document.getElementById('root'),
);
