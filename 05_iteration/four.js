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
  //  console.log(key) this will get you keys like 0,1,2,3..
    console.log(programming[key]) // this prints values
}

//maps cant be iterated (for in loop)