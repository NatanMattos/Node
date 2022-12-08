var fs = require('fs');

fs.appendFile('text.txt', 'olá', function (err){
    if(err) throw err;
    console.log('arquivo criado!');
});