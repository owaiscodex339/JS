const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros)
console.log(marvel_heros[3][0])

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros)

console.log(Array.isArray("Owais"))
console.log(Array.from("Owais"))

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3))