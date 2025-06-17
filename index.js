const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  
  if (req.url === '/') {  
    res.writeHead(200, { 'Content-Type': 'text/plain' });    
    res.end('Olá, Mundo!');
  } else {   
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});