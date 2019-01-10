interface Category
{
    categoryName:string;
}
interface Product
{
    productName:string;
    productId:number;
}
interface productList extends Category,Product
{
    list:Array<string>;
}

let productDetails:productList = {
   categoryName:'Gadget',
   productName:'Mobile',
   productId:1234,
   list:['Samsung','Motorolla','LG']
}
let listProduct = productDetails.list;
let pName:string =productDetails.productName;
console.log("ProductName is "+ pName);
console.log("Product list is " + listProduct);