//Exercise 15 Mengelompokkan Hewan
function groupAnimals(animals) {
    var newArr = [[animals[0]]];
    for (let i = 1; i < animals.length; i++) {
        var hurufpertama = animals[i][0];
        var ada = false; //mengecek udah ada belum index dengan inisial ini
        for (let j = 0; j < newArr.length; j++) {
            if(hurufpertama === newArr[j][0][0]){
                ada = true;
            }
        }
        if(!ada){ //buat index baru kalo belum ada
            newArr.push([animals[i]]);
        } else {
            //cari index yg ber inisial sama
            for (let k = 0; k < newArr.length; k++) {
                if(hurufpertama === newArr[k][0][0]){
                    newArr[k].push(animals[i]);
                }
            }
        }
    }
    //urutkan index
    for (let l = 0; l < newArr.length-1; l++) {
        for (let m = 0; m < newArr.length; m++) {
            
        }
    }
    return newArr;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]