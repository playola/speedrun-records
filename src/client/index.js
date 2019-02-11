import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store';
import Routes from './routes';

const store = createStore(window.REDUX_DATA);

const AppProvider = () => (
  <StoreProvider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </StoreProvider>
);

ReactDOM.hydrate(
  <AppProvider />,
  document.getElementById('root'),
);
