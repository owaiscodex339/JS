const isUserLoggedIn = true
const temperature = 31

// if(temperature < 40){
//     console.log("less than 40");   
// } else {
//     console.log("temp greater than 40");
// }

const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`Power: ${power}`)
// }
// console.log(`Power: ${power}`)

// const balance = 1000

// // if(balance > 500) console.log("Test"); avoid this type of code

// if(balance < 500){
//     console.log("Less than 500")
// }else if(balance < 750){
//     console.log("less than 750")
// } else {
//     console.log("less than 1200")
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGmail = true
const loggedInFromEmail = false

if(UserLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGmail){
    console.log("User logged in");
    
}