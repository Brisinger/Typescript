var Product = /** @class */ (function () {
    function Product() {
        this.productName = "Mobile";
    }
    Product.prototype.getProductDetails = function () {
        return "Product" + this.productName;
    };
    Product.prototype.testThisFunction = function () {
        var _this = this;
        setTimeout(function () {
            console.log(this.productName);
        }, 100); //Error
        setTimeout(function () { console.log(_this.productName); }, 100);
    };
    return Product;
}());
var prod = new Product();
prod.productName = "Television";
prod.testThisFunction();
