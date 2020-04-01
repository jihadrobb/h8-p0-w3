//Exercise 6 Angka Palindrome
function angkaPalindrome(num) {
    num++;
    var palind = false;
    while (palind === false) {
        var kata = num.toString();
        var palind2 = true;
        for (var i = 0; i < kata.length / 2; i++) {
            if (kata[i] !== kata[kata.length - 1 - i]) {
                palind2 = false;
                num++;
                break;
            }
        }
        if (palind2) {
            palind = true;
        }
    }
    return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001