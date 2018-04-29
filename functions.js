// FUNCTION DECLARATION
function greet(firstName = 'Sample', lastName = 'Name'){
        return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet());
// FUNCTION EXPRESSIONS
let square = function(x = 3){
        return x*x
};
console.log(square(13));
// IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
(function(name){
    console.log('Hello ' + name);
})('Arnav')
// PROPERTY METHODS
const todo = {
    add : function(){
        console.log('add todo..');
    },
    edit : function(id){
        console.log(`Edit todo ${id}`);
    }
}
todo.delete = function(){
        console.log('delete todo..');
}
todo.add();
todo.edit(11);
todo.delete();