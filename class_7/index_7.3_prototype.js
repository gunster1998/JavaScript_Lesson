class animals {
    constructor(type,song) {
        this.type = type;
        this.song = song;
    }
    data(){
        console.log(this.type);
        console.log(this.song);
    }
}

let dog = new animals("dog","bark");
let cat = new animals("cat","meow");

animals.prototype.paws = 4;
animals.prototype.pawsLog = function(){
    console.log("Колличество лап " + this.paws)
}


cat.pawsLog();
console.log(cat)