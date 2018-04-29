/*const numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers)
numbers.pop(6)
console.log(numbers)
console.log(typeof numbers)*/
/*let val;
val = (374).toString;
console.log(val)
val = parseFloat('2988');
console.log(val)
console.log(typeof val)*/
/*const val1 = '5';
const val2 = 6;
const val = parseInt(val1) + val2;
console.log(val)
const val1 = 70;
const val2 = 30;
let val;
// Simple math operators
val = val1 / val2;
// Math object
val = Math.PI;
val= Math.E;
val = Math.round(val1/val2);
val = Math.ceil(val1/val2);
val = Math.sqrt(81);
val = Math.abs(-4.745);
val = Math.pow(3 , 4);
val = Math.min(11 , 13, 7, 23, 37);
val = Math.max(3 , 13, 23, 43, 37);
val = Math.round(Math.random()*20 + 1);*/
const firstName = 'Arnav';
const lastName = 'Awasthy';
const age = 31;
const str = 'Hey there my name is Arnav'
let val;
//Concatenation
val = firstName + ' ' + lastName;
//Append
val = 'Arnav';
val += 'Awasthi';
val = 'My name is ' + firstName + ' and i am ' + age + ' years old';
//Length
val = firstName.length;
//Concat
val = firstName.concat(' ', lastName);
//Change case
val = firstName.toUpperCase();
val = firstName[3];
//indexof
val = firstName.indexOf('r');
//charAt
val = firstName.charAt(4);
// get last character
val = firstName.charAt(firstName.length -1);
// substring() and slice()
val = firstName.substring(0, 2);
val = firstName.slice(0 , 3);
val = firstName.slice(-4);
//split()
val = str.split(' ');
//replace()
val = str.replace('Hey' , 'Hello');
//includes()
val = str.includes('name');
console.log(val)


