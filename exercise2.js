// Tantangan Array 1
var kata = 'test';

function balikString(kata){
    var dibalik = [];
    for(var i=kata.length-1; i>=0; i--){
        dibalik.push(kata[i]);
    }
    var ini = [];
    for(var j=0; j<dibalik.length; j++){
        ini.concat(dibalik[i]);
    }
    return ini;
}
console.log(balikString(kata));
