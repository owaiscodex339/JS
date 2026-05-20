const name = "Owais"
const repoCount = 50

//console.log(name + repoCount+ "Values")

console.log(`My name is ${name} and have ${repoCount} Repo Counts`)

const gameName = new String("Owais-sheikh")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))
console.log(gameName.indexOf('s'))

console.log(gameName.substring(0,2))
console.log(gameName.slice(0,1))

const newString = "   Ronaldo   "
console.log(newString)
console.log(newString.trim())

const url = "https://owais.com/owais%20sheikh"
console.log(url.replace("%20", "-"));

console.log(url.includes("owais"))
console.log(gameName.split('-'));

