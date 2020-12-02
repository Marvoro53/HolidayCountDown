console.log("Hello World");

// alert("My name is Marvin Lara");
// confirm("Are you at least 18?");
// prompt("Are you Hungry?");
var currentTime= new Date();
console.log(currentTime);
// this will get the time 

var time = document.getElementById("time");
time.innerHTML= currentTime.toLocaleTimeString();

// this will get the date
var date = document.getElementById("date");
date.innerHTML= currentTime.toLocaleDateString();

// this will get the 
// var daysOfWeek= new Array()
var daysOfWeek= new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var day= document.getElementById("week-day");
day.innerHTML= daysOfWeek[currentTime.getDay()]; 