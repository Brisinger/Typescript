interface Product
{
    productId:number;
    productName:string;
}

function getProductDetailsA(productObj:Product):string
{
    return `The product name is ${productObj.productName}`;
}

let productObject = {productId:1001,productName:"Mobile",productCategory:'Gadget'};
let productDetails:string = getProductDetailsA(productObject);
console.log(productDetails); 