(function () {

        var birds = {};

        function Bird(type, price) {
            this.type = type;
            this.price = price;
        };
        
        Bird.prototype = new Market();
        
        function Market() {
            this.count = 0;
            this.sold = 0;
        };
        
        
        var getBird = function (type) {

            return birds[type];
        };

        Market.addBird = function (type, count, price) {
            var bird = new Bird(type, price);
            bird.count += count;

            birds[bird.type] = bird;

            addToChart("add", bird, count);

            return type;
        };

        var addToChart = function (transaction, bird, count) {

            var table = document.getElementById("info");

            var row = table.insertRow();

            var transaction = row.insertCell(0);
            transaction.innerHTML = transaction;
            var type = row.insertCell(1);
            type.innerHTML = bird.type;
            var price = row.insertCell(2);
            price.innerHTML = bird.price;
            var count = row.insertCell(3);
            count.innerHTML = count;

        };


        Market.sellBird = function (type, count) {
            getBird(type).sold +=count;
            
            getBird(type).count-= count;
            
            addToChart("sold", getBird(type), count);

            return type;

        };

//
//         Market.changePrice = function (arr, type, newPrice) {
//             var oldPrice;
//
//             for (var i = 0; i < arr.length; i++) {
//                 for (var j = 0; j < arr[i].length; j++) {
//                     if (arr[i][j] == type) {
//
//                         if (arr[i][j + 2] == newPrice) {
//                             return console.log("The price is similar");
//                         }
//
//                         oldPrice = arr[i][j + 2];
//
//                         arr[i][j + 2] = newPrice;
//
//                     }
//                 }
//             }
//             return oldPrice;
//         };
//
// // count of birds
//         var countBirds = function (arr, type) {
//
//             for (var i = 0; i < arr.length; i++) {
//                 for (var j = 0; j < arr[i].length; j++) {
//
//                     if (arr[i][j] == type) {
//                         return arr[i][j + 1];
//                     }
//
//                 }
//             }
//
//         };
//
//         var countAllBirds = function (arr) {
//
//             var count = 0;
//
//             for (var i = 0; i < arr.length; i++) {
//                 for (var j = 0; j < arr[i].length; j++) {
//
//                     count += arr[i][j + 1];
//                 }
//
//             }
//             return count;
//         };
    }
// if count <3
)();