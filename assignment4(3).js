//js program to find larger item than the given number in the array
let larger = (arr,num) => arr.filter(n => n >num);
console.log(larger([1,33,999,50,100,150,60,99,1000,999,0,-1,10],150));