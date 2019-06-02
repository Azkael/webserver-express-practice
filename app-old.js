const http =  require('http');

http.createServer((rep, res) => {
    res.write('Hola Mundo');
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080');