function getProductDetails(productObj) {
    return "The product name is " + productObj.productName;
}
var ProductObject = { productName: "Mobile", productCategory: "Gadget" };
var productDetails = getProductDetails(ProductObject);
console.log(productDetails);
