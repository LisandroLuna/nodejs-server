class Product{
    constructor() {
        this.id = this.getRandom(1,11,0);
        this.title = 'Producto ' + this.getRandom(1,11,0);
        this.price = this.getRandom(0,1000,2);
        this.thumbnail = 'Foto ' + this.getRandom(1,11,0);
    }
    // Retorna un número aleatorio entre min (incluido) y max (excluido)
    getRandom(min, max, dec) {
        let result = Math.random() * (max - min) + min;
        return result.toFixed(dec);
    }
}

let http = require("http");
let server = http.createServer(function (pet, res){
    let prod = new Product();
    let final = JSON.stringify(prod);
    res.end(final);
});

server.listen(3000, function(){
    console.log('Server listo en: ' + this.address().port);
})