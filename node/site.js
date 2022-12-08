var http = require ('http');
var data = require ('./primeiromodulo');
var url = require('url');

http.createServer(function (req,res) {
    res.writeHead(200, {'content-Type': 'Text/html'});
    res.write(data.myDateTime());
    res.write('<h2>Servidor criado</h2>');
    res.write('endereço acessado: <i>'+req.url+' </i><br><br>');
    var q = url.parse(req.url, true).query;
    var ano = q.year;
    var mes = q.month;
    res.write('Data:'+mes+ '/'+ano);
    res.end();
}).listen(8080);