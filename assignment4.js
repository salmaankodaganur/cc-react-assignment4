
//find unique items in an array
const unique = (value,index,arr) => {
    return arr.indexOf(value) === index
}
const values =["green","green","red","red","yellow","yellow","pink","pink"];
const uniquevalues = values.filter(unique);
console.log("unique values are",uniquevalues)


