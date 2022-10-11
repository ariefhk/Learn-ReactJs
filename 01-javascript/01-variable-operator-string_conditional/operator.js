// 1. Aritmethics
let tambah = 10 + 5;
let kurang = 5 - 3;
let kali = 5 * 7;
let bagi = 20 / 4;
let modulus = 22 / 7;

// 2. Assignment
var angka;
angka = 10;
console.log(angka);

// 3. Perbandingan
console.log("Equal Operator ==");
var number = 22;
console.log(number == 22); //true
console.log(number == 10, "\n"); //false

console.log("Not Equal !=");
var hobby = "gaming";
console.log(hobby != "gaming"); //false
console.log(hobby != "reading", "\n"); //true

console.log("Strict Equal ===");
var number = 15;
console.log(angka == "15"); // true, padahal "8" adalah string.
console.log(angka === "15"); // false, karena tipe data nya berbeda
console.log(angka === 15, "\n"); // true

console.log("Strict not Equal !==");
var angka = 28;
console.log(angka != "28"); // false, padahal "11" adalah string
console.log(angka !== "28"); // true, karena tipe datanya berbeda
console.log(angka !== 28, "\n"); // false

console.log("Kurang dari & Lebih dari ( <, >, <=, >=)");
var number = 14;
console.log(number < 20); // true
console.log(number > 17); // false
console.log(number >= 17); // true, karena terdapat sama dengan
console.log(number <= 20, "\n"); // true

// 4. Kondisional
// OR ( || )
console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false

// AND ( && )
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true
