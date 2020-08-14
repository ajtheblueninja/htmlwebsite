'use strict';
var today = new Date();

var hourNow = today.getHours();

var greeting;

var userName = prompt('Please Enter Your Name.')

var math = 5 * 6;

if(hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}


document.getElementById('greeting-placeholder').textContent = greeting + " " + userName;

document.getElementById('personal-hello').textContent = "Hello " + userName + " this is my page it isn't much but I will continue to add to this site, thanks for coming to my page and have a nice day!";

document.getElementById('math').textContent = " 5 * 6 = " + math +" The website did this equation itself";

alert('hello ' + userName + ' click ok to proceed');
