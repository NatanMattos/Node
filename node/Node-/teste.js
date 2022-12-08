var http = require('http');
var dia = require("./biblioteca.js");
http.createServer(function
    (req, res) {
res.writeHead(200, {'Content-Type' : 'text/html'});
res.write('<h2>Brasil 2x0 Suica</h2> <br>');
res.write('<p style=color:green>'+Date().substring(16,24)+'<br>');
res.write(dia.diadasemana()+'</p><br>')
res.end('Bom dia!');

}).listen(2020);

    