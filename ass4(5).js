let user = {
    person:"rahul",
    employee:"rahul",
    firstname:"rahul",
    likes:["cycling","hiking","driving"]
}

let{person,employee,firstname,likes:[,second]} = user;
console.log(firstname);
console.log(second)