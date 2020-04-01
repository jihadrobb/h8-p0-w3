//Exercise 9 Mencari Mean
function cariMean(arr) {
    var jumlah = 0;
    for (var i = 0; i < arr.length; i++) {
        jumlah += arr[i];
    }
    var rata2 = jumlah / arr.length;
    //Pembulatan
    var carikoma = rata2.toString();
    for (var i = 0; i < carikoma.length; i++) {
        if (carikoma[i] === '.') {
            var newStr = '';
            if (carikoma[i + 1] > 5) { //Pembulatan diatas .5
                for (var j = 0; j <= i; j++) {
                    newStr += carikoma[j];
                    rata2 = parseInt(newStr) + 1;
                }
            } else { //Pembulatan ke bawah
                for (var j = 0; j <= i; j++) {
                    newStr += carikoma[j];
                    rata2 = parseInt(newStr);
                }
            }
        }
    }
    return rata2;
}
//Pakai Math.ceil()
function cariMean2(arr){
    var jumlah = 0;
    for (var i = 0; i < arr.length; i++) {
        jumlah += arr[i];
    }
    var rata2 = jumlah / arr.length;
    //Pembulatan
    var carikoma = rata2.toString();
    for (var i = 0; i < carikoma.length; i++) {
        if (carikoma[i] === '.') {
            if (carikoma[i + 1] > 5) { //Pembulatan diatas .5
                rata2 = Math.ceil(rata2);
            } else { //Pembulatan ke bawah
                rata2 = Math.floor(rata2);
            }
        }
    }
    return rata2;

}

    // TEST CASES
    console.log(cariMean2([1, 2, 3, 4, 5])); // 3
    console.log(cariMean2([3, 5, 7, 5, 3])); // 5
    console.log(cariMean2([6, 5, 4, 7, 3])); // 5
    console.log(cariMean2([1, 3, 3])); // 2
    console.log(cariMean2([7, 7, 7, 7, 7])); // 7