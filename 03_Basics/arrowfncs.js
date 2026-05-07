const user = {
    username: "Owais",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Papichulo"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Owais"
//     console.log(this.username)
// }

// const chai = function(){
//     let username = "Owais"
//     console.log(this.username)
// }

// const chai = () => {
//     let username = "Owais"
//     console.log(this.username)
// }

// chai()

// const addTwo = (num1, num2) =>{ //arrow function
//     return num1+num2
// }

// console.log(addTwo(3,6))

// const addTwo = (num1, num2) =>  num1+num2 //implicit return (in which we dont have to use return and parenthesis)
const addTwo = (num1, num2) =>  (num1+num2) //you can also write normal parenthesis but not curly then you to write return

