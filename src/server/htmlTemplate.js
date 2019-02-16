/**
 * Create the HTML string to be rendered.
 */
export const htmlTemplate = (
  html,
  styles,
  title,
  reduxState,
) => (
  `
    <!DOCTYPE html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="theme-color" content="#000000">
      <base href="/" />
      <title>${title}</title>
      ${styles}
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.REDUX_DATA = ${JSON.stringify(reduxState)}
      </script>
      <script src="./main.js"></script>
    </body>
    </html>
  `
);
