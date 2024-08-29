let Pi=Math.PI;
console.log(Pi);

let x= 5.7;

console.log(Math.ceil(x));
console.log(Math.floor(x));


console.log((Math.floor(Math.random()*10)));
console.log((Math.floor(Math.random()*100)));
console.log((Math.floor(Math.random()*1000)));
function randomizer(min,max){
    console.log(Math.floor(Math.random()*(max-min)+min));
}

for (let i=0;i<10000;i++){
    randomizer(1,100);
}