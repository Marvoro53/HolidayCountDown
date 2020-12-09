function tellFortune(numberOfChildren, partnerName, location, jobTitle) {
    return("You will be a " + jobTitle + " ,married to " + partnerName + " in " + location + ", with " + numberOfChildren + " kids.");
}

// function tellFortune2(numberOfChildren, partnerName, location, jobTitle){
//     var future= "You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + ",with " + numberOfChildren + " kids."
//     return(future);
// }
console.log(tellFortune("2", "Carlos", "Denver", "Designer"));
console.log(tellFortune("2", "David", "Colorado Springs", "Developer"));
console.log(tellFortune("3", "Jose", "Mexico", "Designer"));
// console.log(tellFortune2("1", "Marcos", "Canada", "Developer"));
// console.log(tellFortune2("1", "Omar", "Colorado", "Designer"));