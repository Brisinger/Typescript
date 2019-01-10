var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, i);
    var products = ["Gadget", "Furniture", "Accessories"];
    products[3] = "Books";
    products[2] = "Ace";
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
var productName = "Television";
var message = "The product name is " + productName;
console.log(message);
