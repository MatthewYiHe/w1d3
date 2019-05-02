function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found();   // execute callback
      var indexNum = i;
      console.log(indexNum);
    }
  }
}

function actionWhenFound() {
  console.log("Found Waldo at index");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
