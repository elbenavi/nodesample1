const http = require('http');

http.createServer((req, resp) => {

    resp.writeHead(200, {'Content-Type': 'application/json'})
    //esp.write('Hola mundo');
    let salida = {
        nombre: 'Fernando',
        edad: 28,
        url: req.url
    }

    resp.write(JSON.stringify(salida));

    resp.end();
})
.listen(8080);

console.log('Escuchando en el Puerto 8080');
