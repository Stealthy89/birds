(function () {

 var birds;

 var createArray = function (arr) {
  birds = [["orel", 10, 5.0, 0], ["durk", 20, 2.0, 0]];

 }

 var addBird = function (arr, type) {

  for (var i = 0; i < arr.length; i++) {
   for (var j = 0; j < arr[i].length; j++) {

    if (arr[i][j] == type) {
     arr[i][j + 3] += 1;
    }

   }
  }
  return type;
 }

 var sellBird = function (arr, type) {

  for (var i = 0; i < arr.length; i++) {
   for (var j = 0; j < arr[i].length; j++) {
    if (arr[i][j] == type) {
     if (arr[i][j + 3] <= 0) {
      return console.log("No bird for sell");
     }
     birds[i][j + 1] -= 1;
     birds[i][j + 3] += 1;
    }
   }
  }
  return type;

 }

 var changePrice = function (arr, type, newPrice) {
  var oldPrice;

  for (var i = 0; i < arr.length; i++) {
   for (var j = 0; j < arr[i].length; j++) {
    if (arr[i][j] == type) {

     if (arr[i][j + 2] == newPrice) {
      return console.log("The price is similar");
      ;
     }

     oldPrice = arr[i][j + 2];

     arr[i][j + 2] = newPrice;

    }
   }
  }
  return oldPrice;
 }

// count of birds
 var countBirds = function (arr, type) {

  for (var i = 0; i < arr.length; i++) {
   for (var j = 0; j < arr[i].length; j++) {

    if (arr[i][j] == type) {
     return arr[i][j + 1];
    }

   }
  }

 }

 var countAllBirds = function (arr) {

  var count = 0;

  for (var i = 0; i < arr.length; i++) {
   for (var j = 0; j < arr[i].length; j++) {

    count += arr[i][j + 1];
   }

  }
  return count;
 }

}


// if count <3
//
// createArray(birds);
// console.log(birds);
// addBird(birds, "orel");
// sellBird(birds, "orel");
// changePrice(birds,"orel", 6.0);
// console.log(countBirds(birds, "orel"));
// console.log(countBirds(birds, "durk"));
// console.log( "All: " +countAllBirdsBirds());
)();