// Tantangan Array 2

//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(argumen){
    var output = '';
    for(var i=0; i<argumen.length; i++){
        output += `Nomor ID:  ${argumen[i][0]} \n`;
        output += `Nama Lengkap:  ${argumen[i][1]} \n`;
        output += `TTL:   ${argumen[i][2]} ${argumen[i][3]} \n`;
        output += `Hobi:  ${argumen[i][4]} \n \n`;
    }
    return output;
}
console.log(dataHandling(input));
