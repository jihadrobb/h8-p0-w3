//Test Flaging (Hapus data kembar)
function flaging(arr) {
    var newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        var kembar = false;
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
                kembar = true;
            }
        }
        if(!kembar){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//Contoh 
console.log(flaging([5, 5, 4, 6, 4, 3, 5])); // [5, 4, 6, 3]
console.log(flaging([12, 13, 14, 12, 14])); // [12, 13 ,14]
console.log(flaging([99, 98, 89, 99, 88, 88, 97, 99, 88])) // [99, 98, 89, 88, 97]