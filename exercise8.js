//Exercise 8 Pasangkan Angka Terbesar
function pasanganTerbesar(num) {
    var str = num.toString();
    var max = parseInt(str[0]+str[1]);
    for(var i=1; i<str.length-1; i++){
        var x = str[i] + str[i+1];
        if(x > max){
            max = x;
        }
    }
    return max;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99