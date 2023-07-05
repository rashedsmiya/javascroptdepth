// strict equality
// ligatures
// console.log(5 === 5);
// console.log(5 === 4);
// console.log(4 === 5);

// console.log("-------------");
// // strict not rqual
// console.log(5 !== 5);
// console.log(5 !== 4);
// console.log(4 !== 5);

// console.log("----------");
// // boolean "mathematical" operators
// console.log(9 > 7);
// console.log(6 > 5);
// console.log(3 < 3);
// console.log(3 <= 3);
// console.log(4 >= 2);

// and or operators
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log("----------");

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log("---------");


// console.log(!true);
// console.log(!false);


const fruit = true && "bananas";
console.log(fruit);

console.log(false && "oranges");
console.log(0 && "cucumbers");

console.log("---------");

console.log(true || "bananas");
console.log(false || "oranges");
console.log("" || "cucumbers");

console.log("---------");

console.log(0 ?? "monkey");
console.log("" ?? "koalas");
console.log(null ?? "elephants");
