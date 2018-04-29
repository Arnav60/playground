//create some arrays
const numbers = [ 23, 45, 33, 17, 43];
const numbers2 = new Array(21, 37, 11, 6);
const fruits = ['Apple', 'Banana' ,'Strawberry'];
const mixed = [24, 'Hello', 33 , 'Arnav'];
let val;
//to find array length
val = numbers.length;
//to check if it is array;
val = Array.isArray(numbers);
// to get single value
val = numbers[2];
//insert into the array
numbers[3] = 27;
//find index of element of array
val = numbers.indexOf(33);
//MUTATING ARRAYS
//add on from end
numbers.push(365);
//add from front
numbers.unshift(137);
//delete from end
numbers.pop();
//delete from start
numbers.shift();
//delete from middle splice()
numbers.splice(1,3);
// reverse the array
numbers.reverse();
//concatenate two arrays
val = numbers.concat(numbers2);
//sorting array for strings
val = fruits.sort();
//sorting array for numbers using compare func
val = numbers.sort(function(x , y){
        return x - y;
})
//find element in array
function under50(num){
    return num < 50;
}
val = numbers2.find(under50);
console.log(numbers);
console.log(val);







