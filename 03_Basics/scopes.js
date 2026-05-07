// var c = 300 => in result it doesnt change its val it shows c = 30
let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ", a)
}
// console.log("Outer: ",a)
// console.log(a) => show error cause of scope
// console.log(b) => show error cause of scope
// console.log(c) => this shows c = 30 (var issues with scope)

function one(){
    const username = "Owais"

    function two(){
        const website = "Instagram"
        console.log(username)
    }
    // console.log(website)
    two()
}

// one()

if(true){
    const user = "Owais"
    if(user === "Owais"){
        const website = " Youtube"
        console.log(user + website)
    }
    // console.log(website)
}

// console.log(user)

//+++++++++++++++++++++ Interesting +++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num+1
}

// console.log(addtwo(4))
const addtwo = function(num){
    return num+1
}

