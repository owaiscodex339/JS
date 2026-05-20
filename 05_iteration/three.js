//for of

let array = [1, 2, 3, 4, 5]

for (const num of array) {
    console.log(num)
}

const greetings = "Hello world!"
for (const i of greetings) {
    console.log(i)
}

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United states of America')
map.set('Fr', 'France')

// console.log(map)

for (const [key, value] of map) {
    // console.log(key + " :- " + value)
}

const myObject = {
    game1 : 'NFS',
    game2 : 'GTA V'
}

for (const [key, value] of myObject) { //not iteratable
    console.log(key + " :- " + value)
}