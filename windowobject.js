// WINDOW OBEJECT / EXPRESSIONS
// ALERT

//alert('HELLO');

// PROMPT

//const input = prompt();
//alert(input);

//CONFIRM
/*if(confirm('Are you sure?')){
    console.log('YES');
}else{
    console.log('NO')
}*/
let val;
//OUTER HEIGHT AND WIDTH
val = window.outerHeight;
val = window.outerWidth;
//INNER HEIGHT AND WIDTH
val = window.innerHeight;
val = window.innerWidth;
//SCROLL POINTS
val = window.scrollX;
val = window.scrollY;
// LOCATION OBJECTS
val = window.location.hostname;
val = window.location.protocol;
val = window.location.pathname;
val = window.location.href;
val = window.location.search;
// REDIRECT
//window.location.href = 'https://www.google.com';

//HISTORY OBJECT
//window.history.go(-2);
val = window.history.length;

// NAVIGATOR OBJECT
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.language;
val = window.navigator.vendor;
val = window.navigator.platform;
console.log(val);