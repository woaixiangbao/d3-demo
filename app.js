const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
  console.log('server start!', request.url)
  let filePath;
  if (request.url === '/demo') {
    filePath = 'demo1.html';
    fs.readFile(filePath, (err, data) => {
      response.write('' + data);
      response.end();
    })
  } else if (request.url === '/example-simple1.tsv') {
    filePath = 'example-simple1.tsv';
    fs.readFile(filePath, (err, data) => {
      response.write(data);
      response.end();
    })
  } else {
    response.write('welcome!');
    response.end();
  }
  
})
server.listen(8090, () => {
  console.log('start')
})