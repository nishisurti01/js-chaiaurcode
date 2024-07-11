let score = 33

console.log(typeof score)

scoreIntoStrings = "33A"

let scoreIntonumber = Number(scoreIntoStrings)
console.log(typeof scoreIntoStrings)
console.log(scoreIntonumber)

// number => Number 
// string+number => NaN
// true=>1

let isLoggedIn = 1
let booleanIsValue = Boolean(isLoggedIn)
console.log(booleanIsValue)

// 1=> true 0=> false
// " " => false "1"=> true 


// --------------- Operation -----------------

// Post fix 

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

// Pre fix
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"