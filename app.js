const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
  console.log('server start!', request.url)
  let filePath;
  if (/\/demo\d+$/.test(request.url)) {
    filePath = request.url.replace(/(\/)(demo)(\d+)/, (match, $1, $2, $3) => {
      return `./${$2}${$3}/${$2}${$3}.html`
    })
    fs.readFile(filePath, (err, data) => {
      response.write('' + data);
      response.end();
    })
  } else if (/\/demo\d+\.*/.test(request.url)) {
    filePath = request.url.replace(/\/(demo\d+)(\.*)/, (match, $1, $2) => {
      return `./${$1}/${$1}${$2}`
    })
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