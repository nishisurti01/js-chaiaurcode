// Primitives call by value (original data no refrence for memory )

// 1. String 
// 2. null
// 3. Number 
// 4. undefined 
// 5. symbol // unique data
// 6. Boolean
// 7. BigInt 

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

let bigumber = 12265345545645n

console.log(typeof bigumber)
// Non- Primitives call by refrence  (Memory refrence )

// 1. Array 
// 2. Objects 
// 3. Functions 



// JS is dynamic type because you never specified data types 

// let score = 123 
//  const name="Nishi"

// console.log(typeof(score))
// console.log(typeof(name))

// then I explained through output. I explained here I did not declare any data type for score or name. Still Java Script handle variables of different types at runtime. That is why Java script is dynamical language. Where as in type script or in Java we have to declare data type. 

// This feature of Java script works as double edged swords for an example :

// let empId=null (Suppose we got null value from server)
// let finalId = Number(empId)
// console.log(finalId)

// Here output will be 0 as it converts null into 0 which may lead to an error as we were expecting null response from server.

// Interview panel was impressed and I got a project. 

// So moral is we all have plenty knowledge but sometimes we failed to explain it practically.