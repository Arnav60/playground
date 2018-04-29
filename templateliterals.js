const name = 'Arnav';
const age = '22';
const job = 'Salesman';
const city = 'Mumbai';
let html;
// without template strings (es5)
html = '<ul>' +
        '<li>Name : ' + name + '</li>' +
        '<li>Age : ' + age + '</li>' +
        '<li>Job : ' + job + '</li>' +
        '<li>City : ' + city + '</li></ul>';
// with template strings(es6)
function hello(){
    return 'hey!';
}
html = `
    <ul>
        <li>Name : ${name}</li>
        <li>Age : ${age}</li>
        <li>Job : ${job}</li>
        <li>City : ${city}</li>
        <li> ${2+2}</li>
        <li>${hello()}</li>
    </ul>

`;
document.body.innerHTML = html;