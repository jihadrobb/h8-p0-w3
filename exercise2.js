// Tantangan Array 1
var kata = 'dicoba coba';

function balikString(kata){
    var dibalik = [];
    for(var i=kata.length-1; i>=0; i--){
        dibalik.push(kata[i]);
    }
    var str = '';
    for (var i=0; i<dibalik.length; i++){
        str += dibalik[i];
    }
    return str;
}
console.log(balikString(kata));
