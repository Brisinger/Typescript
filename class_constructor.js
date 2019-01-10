var Product = /** @class */ (function () {
    function Product(productId) {
        this.productId = productId;
    }
    Product.prototype.getProductId = function () {
        return "Product id is " + this.productId;
    };
    return Product;
}());
var product = new Product(1234);
console.log(product.getProductId());
