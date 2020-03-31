// Tantangan Array 1
var kata = 'coba ini dibalik';

function balikString(kata){
    var dibalik = [];
    for(var i=kata.length-1; i>=0; i--){
        dibalik.push(kata[i]);
    }
    return dibalik.toString()
}
console.log(balikString(kata));
