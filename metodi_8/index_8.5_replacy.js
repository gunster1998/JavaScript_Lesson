let stringProtitype = "I love JavaScript";
let stringlow = stringProtitype.toLowerCase();
let result = stringlow
console.log(stringlow);
vowels = ["a", "e", "i", "o", "u"];
for (let i = 0; i < vowels.length;i++){
    result = (result.replaceAll(vowels[i],i))
}
console.log(result)