let age = 19
let name = "Owais"
let isLarge = true
let temp = null


// console.log(typeof temp)

// Primitive
// Number => Number
// BigInt => BigInt
// Boolean => Boolean
// Null => Object
// undefined => undefined
// Symbol => Symbol
// String => String

// Non-Primitive
// Array => Object
// Function => Function(Object Function)
// Object => Object

// +++++++++++++++++++++++++++++++++++++++++++++

//   Stack(Primitive) ..... Heap(Non-Primitive)

let myname = "Muhammad Owais"
let newname = myname

newname = "Shoaib"

console.log(myname)
console.log(newname)

let userone = {
    name:"owais",
    email: "134@gmail.com"
}

let usertwo = userone
usertwo.email = "3399@gmail.com"

console.log(userone.email)
console.log(usertwo.email)