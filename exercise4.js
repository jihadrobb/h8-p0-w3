// Tantangan Array 3

function dataHandling2(input){
    //output pertama
    input.splice(1, 2, `${input[1]} Elsharawy`, `Provinsi ${input[2]}`);
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    console.log(input)

    //output bulan
    var ttl = input[3].split('/');
    var bulan = parseInt(ttl[1]);
    switch(bulan){
        case 1:
            console.log('Januari');
            break;
        case 2:
            console.log('Februari');
            break;
        case 3:
            console.log('Maret');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
            console.log('Mei');
            break;
        case 6:
            console.log('Juni');
            break;
        case 7:
            console.log('Juli');
            break;
        case 8:
            console.log('Agustus');
            break;
        case 9:
            console.log('September');
            break;
        case 10:
            console.log('Oktober');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('Desember');
            break;
        default:
            console.log('Salah Bulan');
    }

    //Sorting TTL
    for(var i=0; i<ttl.length-1; i++){
        for(var j=i+1; j<ttl.length; j++){
            if(parseInt(ttl[i]) < parseInt(ttl[j])){
                var x = ttl[i];
                ttl[i] = ttl[j];
                ttl[j] = x;
            }
        }
    }
    console.log(ttl);

    //Join TTL
    ttl = input[3].split('/');
    console.log(ttl.join('-'));

    //Nama 15 karakter
    console.log (input[1].toString().slice(0,15));
    return '';
}


var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */