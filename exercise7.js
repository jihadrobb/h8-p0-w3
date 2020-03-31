// Exercise 7 Hitung Jumlah Angka
function hitungJumlahKata(kalimat) {
    if(kalimat === ''){
        return 0;
    }
    var jumlah = 1;
    for(var i=0; i<kalimat.length; i++){
        if(kalimat[i] === ' ' && kalimat[i+1]){
            jumlah++;
        }
    }
    return jumlah;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5