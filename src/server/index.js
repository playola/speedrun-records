import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { App } from '../client/components';

const app = express();
const port = 3000;

const htmlTemplate = (html, styles, title) => (
  `
    <!DOCTYPE html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="theme-color" content="#000000">
      <title>${title}</title>
      ${styles}
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
    </html>
  `
);

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  /**
   * Create server style sheet to inject the styled components.
   */
  const sheet = new ServerStyleSheet();

  /**
   * Define body, styles and title for the HTML template.
   */
  const html = renderToString(sheet.collectStyles(<App />));
  const styles = sheet.getStyleTags();
  const title = 'Speedrun records';

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(html, styles, title));
});

app.listen(port);
