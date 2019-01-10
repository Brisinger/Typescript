class Product
{
    private productId:number;
    constructor(productId:number)
    {
        this.productId = productId;
    }
    getProductId():string
    {
        return `Product id is ${this.productId}`;
    }
}

var product:Product = new Product(1234);
console.log(product.getProductId());