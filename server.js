let http = require("http");
let server = http.createServer(function (pet, res){
    res.end('Hola');
});

server.listen(3000, function(){
    console.log('Server listo en: ' + this.address().port);
})