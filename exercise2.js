// Tantangan Array 1
var kata = 'dicoba coba';

function balikString(kata){
    var dibalik = [];
    for(var i=kata.length-1; i>=0; i--){
        dibalik.push(kata[i]);
    }
    return dibalik.join('');
}
console.log(balikString(kata));
