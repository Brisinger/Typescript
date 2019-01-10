var cart = [];
var pushtoCart = function (productName) { cart.push(productName); };
function addtoCart() {
    var productName = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        productName[_i] = arguments[_i];
    }
    for (var i = 0; i < productName.length; i++) {
        pushtoCart(productName[i]);
    }
    return cart;
}
console.log("Cart items are:" + addtoCart("Moto G Play, 4th Gen", "Apple iphone 5s"));
