//Counting down to
var countDownDate = new Date("Oct 30, 2021 12:30:00").getTime();

//seconds
var x = setInterval(function() {

//today date and time
var now = new Date().getTime();
  
// distance between now and the count down date
var distance = countDownDate - now;
  
// days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
// result in the element with id="demo"
 document.getElementById("demo").innerHTML = days + " days " + hours + " hours "
+ minutes + " minutes " + seconds + " seconds ";
  
// If the count down is finished, write some text
if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
//used w3schools as my resource to do this cause I was kinda lost not going to lie


//Practice down 
// console.log("Hello World");

// // alert("My name is Marvin Lara");
// // confirm("Are you at least 18?");
// // prompt("Are you Hungry?");
// var currentTime= new Date();
// console.log(currentTime);
// // this will get the time 

// var time = document.getElementById("time");
// time.innerHTML= currentTime.toLocaleTimeString();

// // this will get the date
// var date = document.getElementById("date");
// date.innerHTML= currentTime.toLocaleDateString();

// // this will get the 
// // var daysOfWeek= new Array()
// var daysOfWeek= new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
// var day= document.getElementById("week-day");
// day.innerHTML= daysOfWeek[currentTime.getDay()]; 
   

// //1
// var x= 40;
// var y= 2;
// var z= x+y;
// console.log(x+y);

// var number= 7*6;
// console.log(number);

// console.log(40+10-10+2);
// //2
// var food= "Mexican";
// console.log(food);
// console.log("Enfrijoladas " + "are my favorite " + food + " food");
// //3
// var egFamily= new Array('Julia', 'James', "Marvin");
// console.log(egFamily);
// //4
// console.log("All Strings are CrEaTeD equal" != "All STRINGS are CrEaTeD Equal");
// var boolean= "All Strings are CrEaTeD equal" != "All STRINGS are CrEaTeD Equal";
// console.log(boolean);
// //5
// var celcius= 12;
// var farenheit= celcius * 1.8 + 32;
// console.log(farenheit);
// //6
// var poem= "Blowing from the west" + "\nFallen leaves gather" + "\nIn the east";
// console.log(poem);
// //7
// var thingOne= "red";
// var thingTwo= "blue";
// console.log(thingOne, thingTwo);
// //8
// var fullName= "Marvin Eduardo Barron Lara";
// console.log(fullName);
// //9
// var bill= 10.25 + 3.99 + 7.15;
// var tip= bill * 0.15;
// var total= bill + tip;
// console.log("$" + total);
// //10
// let firstName = 'Hi, my name is Julia.'
// let interest = 'I love cats.'
// let hobby = 'I like to play video games.'
// const JuliaMessage = firstName + "" + interest + "" + hobby;
// console.log(JuliaMessage);

// let secondName = 'Hi, my name is James ';
// let interest2 = 'I love baseball ';
// let hobby2 = 'I like to read ';
// const jamesMessage = secondName + "" + interest2 + "" + hobby2;
// console.log(jamesMessage)

// let thirdName = 'Hi, my name is Marvin';
// let interest3 = 'I love soccer ';
// let hobby3 = 'I like to listen to music ';
// const marvinMessage = thirdName + "" + interest3 + "" + hobby3;
// console.log(marvinMessage)
// //11
// var big= "I'm BIG like an elephant";
// var small= "I'm small like a mouse";
// console.log(big, small);

// var Movie = "Batman";
// console.log(Movie);
// console.log("I really " + "Like " + Movie);

// var boolean= "All MOVIES are Boring" != "All Movies are BORING";
// console.log(boolean);

// console.log("I really " + "Like to " + "Eat.");

// var bill= 15 + 6;
// var tip= bill * 0.20;
// var total= bill + tip;
// console.log("$" + total);

//functions

// function findAverage(x, y){
//     var answer = (x + y)/2; 
//     return answer;
//     var avg= findAverage +
// }