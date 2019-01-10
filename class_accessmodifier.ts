class Product
{
    private productId:number;
    public productName:string;
    static productPrice:number = 15000;
    protected productCategory:string;

    constructor(productId:number,productName:string,productCategory:string)
    {
        this.productId = productId;
        this.productName = productName;
        this.productCategory = productCategory;
    }

    getProductId()
    {
        console.log("The product id is " + this.productId);
    }
}

class Gadget extends Product
{
    getProduct():void
    {
        console.log("Product Category: " + this.productCategory);
    }
}

var g:Gadget = new Gadget(1234,"Mobile","SmartPhone");
g.getProduct();
g.getProductId();
console.log("Product name is " + g.productName);
console.log("Product price is " + Product.productPrice);