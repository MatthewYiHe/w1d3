function letterPosition(input) {
    var position = {};
    for (var i = 0; i < input.length; i++) {
        // console.log(i, input[i] === " ")
        if (input[i] === " "){
            continue;
        }
        // console.log("where am I?");
        if (position[input[i]]) {
            // console.log(position[input[i]])
            position[input[i]].push(i);
        } else {
            position[input[i]] = [i];
        }
    }
 console.log(position);
}


letterPosition('lighthouse in the house');