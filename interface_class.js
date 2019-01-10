var Gadget = /** @class */ (function () {
    function Gadget() {
    }
    Gadget.prototype.getProductDetails = function () {
        return ["Samsung", "LG", "Moto"];
    };
    Gadget.prototype.displayProductName = function (productId) {
        if (productId == 101)
            return "Product Name is Mobile";
        else if (productId == 201)
            return "Product Name is Tablet";
    };
    Gadget.prototype.getGadget = function () {
        return ["Mobile", "Tablet", "Ipad", "Ipod"];
    };
    return Gadget;
}());
var g = new Gadget();
var productName = g.displayProductName(101);
console.log(productName);
var productDetails = g.getProductDetails();
console.log("The available products are " + productDetails);
