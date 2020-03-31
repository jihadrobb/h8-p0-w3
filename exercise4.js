// Tantangan Array 3

function dataHandling2(input){
    input.splice(1, 2, `${input[1]} Elsharawy`, `Provinsi ${input[2]}`);
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    var ttl = input[3].split('/');
    var bulan = ttl[1];
    console.log(bulan);
    return input;
}


var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
console.log(dataHandling2(input));

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */