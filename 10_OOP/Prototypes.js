// let myName = "Owais     "
// console.log(myName.trueLength)


let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman :'sling',

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.owais = function(){
    console.log(`Owais is present in all objects`)
}

Array.prototype.heyOwais = function(){
    console.log("Owais says hello")
}


// heroPower.owais()
// myHeros.owais()
// myHeros.heyOwais()
// heroPower.heyOwais()

//inheritence

const user = {
    name: "chai",
    email : "chai@google.com"
}

const teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'Js Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUsername = "ChaiaurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"Owais".trueLength()
"IceTea".trueLength()