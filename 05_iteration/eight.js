const myNums = [1, 2, 3, 4, 5]

let initialValue = 0

// const myTotal = myNums.reduce( (acc, curVal) => {
//     console.log(`acc : ${acc} and curVal : ${curVal}`)
//     return acc + curVal
// }, 3)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName : "Js Course",
        price : 333
    },
    {
        itemName : "py Course",
        price : 999
    },
    {
        itemName : "mob dev Course",
        price : 1000
    },
    {
        itemName : "DS Course",
        price : 12000
    },
]

const totalPrice = shoppingCart.reduce( (acc, curval) => (acc + curval.price),0)

console.log(totalPrice)