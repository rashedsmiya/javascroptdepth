/*
    1. Use let to create a variable that points at a String
       - Then "add" another String to this same variable and print it out
    2. Use let to create a variable that points to a Number
       - Then add another Number to this same variable and print it out
*/

let name = "monkey";
name = name +  " Says hello";

console.log(name);

let points = 40;
points *= 5;
console.log(points);

/* 
    Before printing these out, see if you can calculate them yourself mathematically:

    1. Print out 5 / 2
    2. Print out 5 % 2
    3. Print out 5 ** 2

    4. Print out 6 / 2
    5. Print out 6 % 2
    6. Print out 6 ** 2
*/

console.log(5 / 2); // 2.5
console.log(5 % 2) // 1
console.log(5 ** 2) // 25

console.log(6 / 2); // 3
console.log(5 % 2); // 1
console.log(5 ** 2); // 36

/*
    1. Create a let variable called "points" and print it out
    2. Assign "points" the number 20 and print it out
    3. Add 15 to "points" and print it out

    Question1: What are all the ways you can achieve step 3 above?
    Question2: What would happen if you tried to do this with a const variable?
*/

let points;
console.log(points);

// const points;
// console.log(points);

points = 20;
console.log(points);

// points = points + 15;

points += 15;
console.log(points);

/*
    Try to calculate these all yourself before coding them:

    1. What is 5 / 5?
    2. What is 5 % 5?
    3. What is 256 / 2?
    4. What is 256 % 10?

    BONUS: What are all the possible values of ANY_NUMBER % 2?
    BONUS2: What are all the possible values of ANY_NUMBER % 10?
*/

console.log(5 / 5); // 3
console.log(5 % 5); // 0
console.log(256 / 2); // 128
console.log(256 % 10); // 6

/*
    1. What happens when you add 2 strings together?
    2. What about when you add a number to a string?
    3. How about when you add booleans together?

    Try to think about how these behaviours might work,
    as well as why it might happen.
*/

// string concatenation

let animal = "dog";
animal += " says woof";
console.log(animal);

let hello = "cat" + 10;
console.log(hello);

let bools = true + true;
console.log(bools);