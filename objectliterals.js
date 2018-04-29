const person = {
        firstname : 'Arnav',
        lastName : 'Awasthi', 
        age : 17,
        hobbies : ['dance','reading'],
        address : {
            city : 'Mumbai', 
            state : 'MH'
        },
        getBirthday : function(){
            return 2018 - this.age;
        }
}
let val;
//get specific value
val = person.firstname;
val = person.hobbies[0];
val = person.address.city;
val = person.getBirthday();
console.log(val);
const people = [
    {name : 'Arnav', age : 17},
    {name : 'Chirayu', age : 18},
    {name : 'Raghav', age : 19},
    {name : 'Shivang', age : 17}
]
for(i=0 ; i<people.length ; i++){
    console.log(people[i].name);
}