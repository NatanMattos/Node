var http = require('http');
var data = require('./primeiromodulo');
http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type' : 'text/html'});
res.write("<h2>Servidor Criado! </h2>");
res.write("Endereço Acessado: "+req.url+ '<br>');
res.write(data.myDateTime());
res.end();
}).listen(8080);