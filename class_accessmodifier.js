var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(productId, productName, productCategory) {
        this.productId = productId;
        this.productName = productName;
        this.productCategory = productCategory;
    }
    Product.prototype.getProductId = function () {
        console.log("The product id is " + this.productId);
    };
    Product.productPrice = 15000;
    return Product;
}());
var Gadget = /** @class */ (function (_super) {
    __extends(Gadget, _super);
    function Gadget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gadget.prototype.getProduct = function () {
        console.log("Product Category: " + this.productCategory);
    };
    return Gadget;
}(Product));
var g = new Gadget(1234, "Mobile", "SmartPhone");
g.getProduct();
g.getProductId();
console.log("Product name is " + g.productName);
console.log("Product price is " + Product.productPrice);
