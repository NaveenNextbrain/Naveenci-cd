// src/index.js
const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.end('Hello Naveen, this is the CI/CD demo app\n');
});
server.listen(port, () => console.log(`listening ${port}`));
