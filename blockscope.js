//GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;
/*function test(){
    //FUNCTION SCOPE
    var a = 4;
    let b = 5;
    const c = 6; 
    console.log('Function Scope : ', a, b, c); 
}
test();*/
/*if(true){
    //BLOCK SCOPE
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Global Scope : ', a, b, c);
}*/
for(var a= 0; a < 10 ; a++){
console.log(`LOOP : ${a}`);
}
console.log('Global Scope : ', a, b, c);