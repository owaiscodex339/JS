class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static createId(){
        return `123`
    }

}

const owais = new User("Owais")
// console.log(owais.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email
    }


}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId())