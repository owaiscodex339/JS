const coding = ["python","java", "cpp", "swift", "ruby"]

const values  = coding.forEach( (item) => {
    //console.log(item)
    return item
})

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// console.log(newNums)

const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})

// console.log(newNums)

const userBooks = [
    {
        title : "Book one",
        genre : "Fiction",
        publish: 1991,
        edition: 2024
    },
    {
        title : "Book two",
        genre : "Science",
        publish: 1994,
        edition: 2000
    },
    {
        title : "Book three",
        genre : "Science",
        publish: 2000,
        edition: 2017
    },
    {
        title : "Book four",
        genre : "Fiction",
        publish: 1993,
        edition: 2002
    },
    {
        title : "Book five",
        genre : "Science",
        publish: 2006,
        edition: 2019
    },
    {
        title : "Book six",
        genre : "History",
        publish: 2003,
        edition: 2016
    },
    {
        title : "Book seven",
        genre : "Non-Fiction",
        publish: 2004,
        edition: 2013
    },
    {
        title : "Book eight",
        genre : "History",
        publish: 1992,
        edition: 2014
    }
]

let Books = userBooks.filter( (bk) => bk.genre === 'History')

Books = userBooks.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'History'
 })
console.log(Books)