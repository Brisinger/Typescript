{
    interface Product{
    productId:number;
    productName:string; 
    }

function getProductDetails(productobj:Product):string
{
    return `The product name is ${productobj.productName}`;
}


    let productObject = {productId:1001,productName:"Mobile"};
    //Incorrect way of using interface duck type
    let productObjecta = {productName:"Mobile", productCategory:"Gadget"};
    //Correct way of using interface duck type
    //let productObjects = {productName:"Mobile",productId:1001,productCategory:"Gadget"};
    let productDetails:string = getProductDetails(productObject);

    console.log(productDetails);
}