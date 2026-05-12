const myObject = {
    js : "JavaScript",
    cpp : "c++",
    rb : "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`)
}

const programming = ["java", "cpp", "python"]

for (const key in programming){
    console.log(programming[key])
}