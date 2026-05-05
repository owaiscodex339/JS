// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    return number1 + number2
}
 
const result = addTwoNumbers(3,5)
// console.log("Result: ", result)

function userloggedinMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(userloggedinMessage())

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(4, 42, 533))

const user = {
    name : "Owais",
    price : 145
}

function handleObject(anyobject){
    console.log(`Name is ${anyobject.name} and price is ${anyobject.price}`)
}


// handleObject(user)
handleObject( {
    name : "Kala",
    price : 0
})

const mynewarray = [133, 422, 3, 31]

function handleArray(getArray){
    return getArray[1]
}

// console.log(handleArray(mynewarray))
console.log(handleArray([34,56,22,6]))