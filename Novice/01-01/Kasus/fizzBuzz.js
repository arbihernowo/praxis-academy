for (let i = 1;  i<= 100; i++) {
let hasil = "";
if (i % 3 == 0) hasil += "Fizz";
if (i % 5 == 0) hasil += "Buzz";
console.log(hasil || i);
}