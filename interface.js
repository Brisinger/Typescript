function getProductDetails(productobj) {
    return "The product name is " + productobj.productName;
}
var productObject = { productId: 1001, productName: "Mobile" };
//Incorrect way of using interface duck type
var productObjecta = { productName: "Mobile", productCategory: "Gadget" };
//Correct way of using interface duck type
//let productObjects = {productName:"Mobile",productId:1001,productCategory:"Gadget"};
var productDetails = getProductDetails(productObject);
console.log(productDetails);
