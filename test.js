function countLetters(str) {
    var noSpace = str.replace(/\s/g, "");
    var letterCount = {};
    for (var i = 0; i < noSpace.length; i++) {
        var char = noSpace[i]
        if (letterCount[char]) {
            letterCount[char] += 1;
        } else {
            letterCount[char] = 1
        }
    }
    console.log(letterCount);
    return letterCount;
}
countLetters("lighthouse in the house");