let number = [1,2,3,4,5,6,7,8,9,10];
let numberplus2= number.map(x=>x * 2);
console.log(numberplus2);
let number2 = [1,2,3,4,5,6,7,8,9,10];
let numberplus22= number.map(function(eln){
    return eln * 2;
});
console.log(numberplus22);
