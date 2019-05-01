var countLetters = function(input){
  var noSpace = input.split(" ").join("");
  var letterCounting = {};
  for (i = 0; i < noSpace.length; i++){
    letterCounting[noSpace[i]] = noSpace.split(noSpace[i]).length - 1;
  }
  console.log(letterCounting);
};



countLetters('lighthouse in the house');