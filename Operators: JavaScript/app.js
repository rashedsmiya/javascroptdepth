// Assignment Operator

let x = 4;
let y;
y = x;
console.log(y);

// Compound Operators

let x = 10;
let y = 20;


x += y; // x = x + y
x -= y; // x = x - y
x /= y; // x = x / y
x *= y; // x = x * y

console.log(x);

// Arithmetic Operators

+
-
*
/
**
x++;
x--;

let x = 10;

x++;
x--;
console.log(x ** 6);

// Logical Operators
1. Logical AND && 
let happy = true && true;
console.log(happy);

const isLoggedIn = true;
const hasPermissions = false;

if (isLoggedIn && hasPermissions){
    // Delete an item
    console.log('Item deleted successfully');
}
2. Logical OR ||

const happy = true || false;
const happy = false || true;
console.log(happy);

const isLoggedIn = false;
const hasPermissions = true;

if (isLoggedIn || hasPermissions){
    // Delete an item
    console.log('Item deleted successfully');
}

3. Logical Not !

const happy = false;

const animal = 'Cat';

console.log(!animal);

const isLoggedIn = false;
const hasPermissions = false;

if (!isLoggedIn){
    console.log('Redirect to login page');
}

Conditional operators (Ternary Operators)

const userRole = 'admin';

if(userRole === 'admin'){
  console.log('You are an admin');
} else {
    console.log('You are not an admin');
}

userRole === 'admin' ? console.log('You are an admin') : console.log('You are not an admin'); 

// Comparison Operators

Equal (==)
Not equal (!=)
Strict equal (===)
Greater than (>)
Greater than or equal (>=)
Less than (<)
Less than or equal (<=)

console.log(4==5);
console.log(4 != 5);
console.log(4 === '4');
coerction
console.log(6 > 5);
console.log(4 < 5);
console.log(5 >= 5);
console.log(5 <= 8);
console.log(5 <= 8);

console.log((3 + 10) * 2); // 26

console.log(3 > 2 && 2 > 1); // true

console.log(3 > 2 > 1);