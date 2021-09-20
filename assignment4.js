
//find unique items in an array
function onlyUnique(value,index,self){
    return self.indexOf(value) === index;

}
var values= ["green","green","red","red","yellow","yellow","pink","pink"];
var uniquevalues = values.filter(onlyUnique);
console.log(uniquevalues);



