// var i = 0;
// while(true)

// {
//     if(i==3)
//     {
//         break;
//     }
//     console.log(i); // 0 1 2
//     i++;
// }


// let number = 0;

// while (number < 1){ // while (true)
//     console.log(number);
//     number++;
// }

// let number = 0;

// while (number < 3) {
//     console.log(number);
//     number++; // number = number + 1;
// }

// console.log("All Done!");

// let counter = 5;

// while (counter <= 10) {
//     console.log(counter);
//     break;
//     console.log("increasing counter....");
//     counter--;
// }

// console.log("Thanks for playing!");

// let score = 0;

// // infinite loop
// while (true) {
//     console.log("inside the loop!");
     
//     if (score >= 3){
//         break;
//     }

//    score++;
// }

// console.log("Done the loop!");

// let loopNumber = 5;

// while (loopNumber <= 10){
//     console.log(loopNumber);
//     loopNumber++;
// }

let loggedin = false;
let loopCounter = 0;

while (!loggedin){
    console.log(loopCounter);
    if(loopCounter === 3){
        loggedin = true;
    }
    
    loopCounter++;
}

// after the loop
console.log("Sucessfully logged in!");
