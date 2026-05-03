const myarr = [0, 1, 2, 3 ,6 ,4]

myarr.push(49)
myarr.pop()
myarr.unshift(33)
myarr.shift(33)

console.log(myarr.includes(6))
console.log(myarr.indexOf(4))

console.log(myarr.includes(4))
console.log(myarr.indexOf(6))

const newarr = myarr.join()

console.log(myarr)
console.log(typeof newarr)

console.log("A ", myarr)
const myn1 = myarr.slice(1,3)
console.log(myn1)

console.log("B ", myarr)
const myn2 = myarr.splice(1,3)
console.log(myn2)
console.log(myarr)
