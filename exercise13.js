//Exercise 13 Target Terdekat
function targetTerdekat(arr) {
    var target;
    var posisi = 0;
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i] === 'o'){
            target = 'x';
        } else if(arr[i] === 'x'){
            target = 'o';
        } else {
            target = 'no target';
        }
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] === target && posisi === 0){ // Target Pertama
                posisi = j-i;
            } else if(arr[j] === target && (j-i) < posisi){ //Target Terdekat
                posisi = j-i;
            }
        }
    }
    return posisi;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2