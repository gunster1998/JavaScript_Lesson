let word = "HelloWorld"
let newStr="";
function randomWord(str){
    for(let i=0; i< word.length; i++){
        let randomLetter=Math.floor(Math.random()*(str.length))
        newStr+=str[randomLetter]
        str = str.slice(0,randomLetter) + str.slice(randomLetter+1);
    }
    console.log(newStr)
    return newStr
}
randomWord(word)