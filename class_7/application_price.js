class menu {
    #priceOne = 10
    #priceTwo = 20 
    constructor(val1,val2){
        this.val1 = val1;
        this.val2 = val2;
    }
    calltotal() {
        return (this.val1*this.#priceOne) + (this.val2*this.#priceTwo)
    }

    get total(){
        return this.calltotal()
    }
}
const val1 =  new menu(2,3)
const val2 =  new menu(4,5)
const val3 =  new menu(6,7)
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);