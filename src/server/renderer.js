import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider as StoreProvider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
import Routes from '../client/routes';

export const renderer = (store, url) => {
  /**
   * Create server style sheet to inject the styled components.
   */
  const sheet = new ServerStyleSheet();

  /**
   * Create React DOM element wrapped with store and routes providers.
   */
  const ReactDomProvider = () => (
    <StoreProvider store={store}>
      <StaticRouter context={{}} location={url}>
        { renderRoutes(Routes) }
      </StaticRouter>
    </StoreProvider>
  );

  /**
   * Define body, styles and title for the HTML template.
   */
  const html = renderToString(sheet.collectStyles(<ReactDomProvider />));
  const styles = sheet.getStyleTags();
  const title = 'Speedrun records';

  return {
    html,
    styles,
    title,
  };
};
