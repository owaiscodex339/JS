const user = {
    username : "owais",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        //console.log("Got user details from db")
        console.log(`Username: ${this.username}`);
        console.log(this)
    }
}


// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("Owais", 13, true)
const UserTwo = new User("ChaiaurCode",12, false)
console.log(userOne.constructor)
// console.log(UserTwo)

// 1 after adding new keyword an empty obj is created which is
//instance
// 2 constructor function is called
// 3 arguments injected in this
// 4 you will get this arguments