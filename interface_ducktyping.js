function getProductDetails(productObj) {
    return "The product name is " + productObj.productName;
}
var productObject = { productId: 1001, productName: "Mobile", productCategory: 'Gadget' };
var productDetails = getProductDetails(productObject);
console.log(productDetails);
