// will return a value of undefined
var myvar = 'my value';

(function () {
    console.log(myvar); // undefined
    var myvar = 'local value';
})();