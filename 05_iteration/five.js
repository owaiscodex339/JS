const coding = ["python","java", "cpp", "swift", "ruby"]

coding.forEach(function (val) { //in call back function there is no name
  // console.log(val)
})

coding.forEach( (item) => {
    //console.log(item)
})

function printme(item) {
    //console.log(item)
}

// coding.forEach(printme)

coding.forEach( (item, index, arr) => {
  // console.log(item, index, arr)
})

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js",
    },
    {
        languageName : "Java",
        languageFileName : "java",
    },
    {
        languageName : "Python",
        languageFileName : "py",
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})