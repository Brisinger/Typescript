var manufacturers = [{ "id": "Samsung", "price": 15000 }, { "id": "Microsoft", "price": 20000 },
    { "id": "Apple", "price": 40000 }, { "id": "Micromax", "price": 10000 }];
var test;
function myFunction() {
    test = manufacturers.filter(function (manufacturer) { return manufacturer.price >= 20000; });
}
myFunction();
console.log("The filtered array is");
for (var i = 0; i < test.length; i++) {
    console.log(test[i].id);
}
