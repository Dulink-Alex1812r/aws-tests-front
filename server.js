const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();

// handle vue-router
const staticFileMiddleware = express.static(path.join(__dirname, '/dist'));
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));

app.use(staticFileMiddleware);

const port = process.env.PORT || 8080;
app.listen(port);

console.log('FUNCIONA MALDITO!');
console.log("SERVER ON PORT : ", port);
