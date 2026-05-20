const mySym = Symbol("Key1")

let User = {
    name : "Owais",
    "full name" : "Muhammad Owais",
    [mySym]: "mykey1",
    age : 13,
    location: "Mianwali",
    email: "344@gmail.com",
    isLoggedin: false,
    lastLogindays: ["saturday", "sunday"]
}
console.log(User.email)
console.log(User["email"])
console.log(User["full name"])
console.log(User[mySym])

User.age = 34
Object.freeze(User)
User.age = 42
console.log(User)

User.greeting = function(){
    console.log("Assalamoalaikum")
}

User.greetingTwo = function(){
    console.log(`Hello from ${this.name}`)
}

console.log(User.greeting())
console.log(User.greetingTwo())