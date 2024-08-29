let names = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike","Laurence", "Mike", "Laurence", "Mike"]

const apruveNames = names.filter((value,index,array)=>{
    return index === array.lastIndexOf(value)
})

console.log(apruveNames)