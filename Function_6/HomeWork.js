function scoreTen (n){
    console.log(n);
    if (n>=10) {
        return;
    }
    else {
        scoreTen(n+1);
    }
}
scoreTen(4);


const one = () => console.log("one");
const two =() => console.log("two");
const three = () => {
    console.log("three");
    one();
    two();
}

const four = () => {
    console.log("four")
    setTimeout(one(),0)
    three ()
}
four();