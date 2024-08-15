class staff {
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}


let one_Staff = new staff("Jon","Doe",25);
let two_Staff = new staff("Jane","Doe",21);

let workers = [one_Staff,two_Staff];

staff.prototype.info = function() {
    console.log("Наш работник по имени " + this.firstname + " " + "проработал с нами " + this.age + " лет" )
}

workers.forEach ((person) => {
    person.info();
});