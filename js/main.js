//DOM elements
const greeting = document.getElementById('greeting'),
    focusElement = document.getElementById('focus'),
    timeElement = document.getElementById('time'),
    nameElement = document.getElementById('name');

var setAmOrPm = function (hour) {

};

// Prefix 0 
var prefixZero = function (n) {

    // if (n.toString().length === 1) {
    //     return '0' + n;
    // }
    // return n;

    return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

// Set Current Time
var showCurrentTime = function () {
    let today = new Date(),
        hour = today.getHours(),
        minute = today.getMinutes(),
        second = today.getSeconds();

    timeElement.innerHTML = `${prefixZero(hour)}<span>:</span>${prefixZero(minute)}<span>:</span>${prefixZero(second)}`;
    setInterval(showCurrentTime, 1000);
};

// To Set background image based on time
var setBackgroundImage = function () {
    let hour = (new Date()).getHours();

    // if(hour > 10)
    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon, ';
    } else {
        // Evening
        document.body.style.backgroundImage = 'url("https://i.ibb.co/924T2Wv/night.jpg")';
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    }
};

// Get Name 

var getName = function () {
    if (localStorage.getItem('name') === null) {
        nameElement.textContent = '[Enter name]';
    } else {
        nameElement.textContent = localStorage.getItem('name');
    }
};

var getFocus = function () {
    if (localStorage.getItem('focus') === null) {
        focusElement.textContent = '[Enter your Focus]';
    } else {
        focusElement.textContent = localStorage.getItem('focus');
    }
};

var setName = function (e) {
    if (e.type === 'keypress') {
        //Make sure enter is pressed
        if (e.keyCode === 13) {
            localStorage.setItem('name', e.target.innerText);
            nameElement.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
};

var setFocus = function (e) {
    debugger;
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.keyCode === 13) {
            localStorage.setItem('focus', e.target.innerText);
            focusElement.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
};

nameElement.addEventListener('keypress', setName);
nameElement.addEventListener('blur', setName);
focusElement.addEventListener('keypress', setFocus);
focusElement.addEventListener('blur', setFocus);

// Run
showCurrentTime();
setBackgroundImage();
getName();
getFocus();