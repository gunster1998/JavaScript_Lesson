let offering = "thIs will be capiTalized for each word This Will Be Capitalized For Each Word."
function upper(str){
    let apruv = []
    let low_str = str.toLowerCase().split(" ");
    for (let i=0; i<low_str.length; i++){
        apruv.push( low_str[i][0].toUpperCase() + low_str[i].slice(1,low_str[i].length)) ;
    }
    let apruver = apruv.join(" ")

    console.log(apruver)
}
upper(offering)