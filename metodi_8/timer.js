let endDate = Date.parse("2024-12-12");
console.log(endDate)

function timer(date){
    let dateNow = Date.now();
    let dateDiff = date-dateNow;
    let dayRemaining = Math.floor(dateDiff/(1000*3600*24))
    // console.log(`Осталось ${dayRemaining} дня`)
    let hourseRemaining = Math.floor(dateDiff/(1000*3600))
    // console.log(`Осталось ${hourseRemaining} часа`)
    let minutsRemaining = Math.floor(dateDiff/(1000*60))
    // console.log(`Осталось ${minutsRemaining} минут`)
    let secondsRemaining = Math.floor(dateDiff/1000);
    // console.log(`Осталось ${secondsRemaining} секунд`)
    return {
        dayRemaining,
        hourseRemaining,
        minutsRemaining,
        secondsRemaining
    }
}

function update(){
let temp = timer(endDate)
let output = ""
for ( let key in temp){
    output += (`${key} +${temp[key]}`)
}
console.log(output)
setTimeout(update,1000)
}
update();


const arr = ["Hi","world","hello","Hii","hi","hi World","Hi"];
arr.copyWithin(0, 3, 5);
console.log(arr);