//Exercise 15 Mengelompokkan Hewan
function groupAnimals(animals) {
    var newArr = [[animals[0]]];
    for (let i = 1; i < animals.length; i++) {
        var hurufpertama = animals[i][0];
        
    }
    return newArr;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  //console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]