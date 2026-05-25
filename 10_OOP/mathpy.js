const decripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(decripter)
// console.log(Math.PI)

// Math.PI = 4
// console.log(Math.PI)

const chai = {
    name : "ginger",
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log(`chai nai bani`)
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
    //writable : false,
    enumerable : true
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}, ${value}`)
    }
}