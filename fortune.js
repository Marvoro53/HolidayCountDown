// function tellFortune(numberOfChildren, partnerName, location, jobTitle) {
//     return("You will be a " + jobTitle + " ,married to " + partnerName + " in " + location + ", with " + numberOfChildren + " kids.");
// }

// // function tellFortune2(numberOfChildren, partnerName, location, jobTitle){
// //     var future= "You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + ",with " + numberOfChildren + " kids."
// //     return(future);
// // }
// console.log(tellFortune("2", "Carlos", "Denver", "Designer"));
// console.log(tellFortune("2", "David", "Colorado Springs", "Developer"));
// console.log(tellFortune("3", "Jose", "Mexico", "Designer"));
// // console.log(tellFortune2("1", "Marcos", "Canada", "Developer"));
// // console.log(tellFortune2("1", "Omar", "Colorado", "Designer"));

//Fortune fuction

var fortunes = [
    "You will be rich in 5 years!", 
    "You will die soon", 
    "You will get a raise in the next month!", 
    "You will get married next year!", 
    "You'll fall in love!",
    "You will get fired",
    "You will get a puppy!",
    "Careful, you're getting to comfortable..",
    "You will get cheated on",
    "You will visit your dream country!"
]
    function tellFortune(){
        var randomNum= Math.floor(Math.random() * fortunes.length);
    
    document.getElementById("btn").innerHTML = fortunes[randomNum];
    
};

