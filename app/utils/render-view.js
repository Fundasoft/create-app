const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');
const serialize = require('serialize-javascript');
const manifest = require(path.resolve(__dirname, '../../build/manifest'));

const render = (res, view, props, { page, title }) => {
  const View = view;
  const app = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="${manifest[page + '.css']}" />
      <script src="${manifest['vendor.js']}"></script>
      <script>
        window.__PRELOADED_STATE__ = ${serialize(props, { isJSON: true })};
      </script>
      <title>${title}</title>
    </head>
    <body>
      <div id="app-content">${ReactDOMServer.renderToString(<View {...props} />)}</div>
      <script src="${manifest[page + '.js']}"></script>
    </body>
    </html>
  `;
  res.send(app);
};

module.exports = render;
