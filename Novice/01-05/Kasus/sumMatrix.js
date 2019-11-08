var array1 = [1, 2, 3, 4];
var array2 = [5, 6, 7, 8];

var sum = array1.map(function (num, arr) {
    return num + array2[arr];
});

console.log(sum);