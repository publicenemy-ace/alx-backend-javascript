const http = require('http');

const hostname = 'localhost';
const port = 1245;

// create http server
const app = http.createServer((req, res) => {
  // set the response http header with the http status and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // send the response body
  res.end('Hello Holberton School!');
});

// make the server listen on teh specified port
app.listen(port, hostname);

module.exports = app;
