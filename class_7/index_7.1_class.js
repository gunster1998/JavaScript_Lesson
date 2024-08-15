class Person {
    constructor(firstname,lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let oneFrend = new Person ("Sasha","Semakin")
let twoFrend = new Person ("Kosty","Vitevsky")


console.log("Hi",oneFrend.firstname, oneFrend.lastname)
console.log("Hi",twoFrend.firstname, twoFrend.lastname)