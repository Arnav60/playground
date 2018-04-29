const id = 100;
// equal to type and value
/*if(id === 100){
    console.log('Correct');
} else {
    console.log('Incorrect');
}
// not equal to tyoe and value
const id2 = '100';
if(id2 !== 100){
    console.log('Correct');
} else {
    console.log('Incorrect');
}
// to test type of variable
if(typeof id !== 'undefined'){
        
        console.log(`The id is ${id}`);
}else {
    console.log('NO ID');
}*/
// greater than or less than
if(id >= 100){
    console.log('Correct');
} else {
    console.log('Incorrect');
}
const color = 'yellow';
if(color === 'red'){
    console.log('Color is red');
} else if(color === 'blue'){
    console.log('Color is blue');
}else {
    console.log('Color is neither red nor blue');
}
//LOGICAL OPERATORS
const name = 'Arnav';
const age = 17;
// LOGICAL AND &&
if(age >= 0 && age <= 12){
    console.log(`${name} is a child.`);
}else if(age >=13 && age <=19){
    console.log(`${name} is a teenager`);
}else {
    console.log(`${name} is an adult`);
}
// LOGICAL OR ||
if(age < 16 || age > 28){
    console.log(`${name} can not run in race`);
}else {
        console.log(`${name} can run in race`);
}
// TERNARY OPERATOR
console.log(id == 100 ? 'CORRECT':'INCORRECT');
// if statements can also work without brace but is not recommended 
