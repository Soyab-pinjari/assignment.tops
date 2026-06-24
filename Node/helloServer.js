const http = require('http');

const routes = {
  '/': 'Home Page',
  '/about': 'About Us Page'
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end(routes[req.url] || 'Page Not Found');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
