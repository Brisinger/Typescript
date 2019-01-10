interface ProductOption
{
    productId? :number;
    productName:string;
}
function getProductDetails(productObj:ProductOption):string
{
    return `The product name is ${productObj.productName}`;
}

let ProductObject = {productName:"Mobile",productCategory:"Gadget"};
let productDetails = getProductDetails(ProductObject);

console.log(productDetails);