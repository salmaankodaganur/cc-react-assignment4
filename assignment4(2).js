camelizeWord = function camelizeWord(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }

console.log(camelizeWord("backgound-color"));
console.log(camelizeWord("list-style-image"));
console.log(camelizeWord("-webkit-transition"));
