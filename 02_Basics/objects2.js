// const tinderUser = new Object()
const tinderUser = {}
    tinderUser.id = "134",
    tinderUser.name = "Sammy",
    tinderUser.isLoggedin = false


// console.log(tinderUser)

const regularUser = {
    email : "2112@gmail.com",
    fullname : {
        userfullname:{
            firstname : "Muhammad",
            lastname : "Owais"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}
const obj3 = {5:'a', 6:'b'}

// const obj4 = Object.assign({},obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
]

console.log(users[0].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty('id'))

// ++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    coursename : "js in urdu",
    courseprice : "333",
    courseinstructor : "owais"
}

const {courseinstructor : instructor} = course

console.log(instructor)