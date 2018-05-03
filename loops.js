// FOR LOOP
/*for(let i = 0 ; i < 10 ; i++){
    if(i === 7){
        console.log('7 is the luckiest number');
        continue;
    }
    console.log('Number ' + i);
    if(i === 8){
        console.log('Stopped the loop!')
        break;
    }
}*/
// WHILE LOOP
/*let i = 0;
while( i < 10){
    console.log('Number ' + i);
    i++;
}*/
// DO WHILE LOOP (always runs once)
let i = 0;
/*do{
    console.log('Number ' + i);
    i++;
}while(i < 10);*/
//LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy' , 'Suzuki' , 'GM'];
/*for(i=0 ; i < cars.length ; i++){
    console.log(cars[i]);
}*/
// FOR EACH
/*cars.forEach(function(car , index , array){
    console.log(`${index} : ${car}`);
});*/
//MAP
/*const users = [
    {id : 1 , name : 'Arnav'},
    {id : 2 , name : 'Raghav'},
    {id : 3 , name : 'Chirayu'}
]
const ids = users.map(function(user){
    return user.name;
})
console.log(ids);*/
//FOR IN LOOP
const user = {
    firstName : 'Arnav',
    lastName : 'Awasthy',
    age : 17
}
for(let x in user){
    console.log(`${x} : ${user[x]}`);
}
