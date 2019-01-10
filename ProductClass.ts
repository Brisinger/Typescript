class Product{
    productName:String = "Mobile";
    getProductDetails():string{
        return "Product" + this.productName;
    }
    testThisFunction(){
        setTimeout(function(){
            console.log(this.productName);
        }, 100);//Error
        setTimeout(()=>{console.log(this.productName);},100);
    }
}

let prod:Product = new Product();
prod.productName = "Television"
prod.testThisFunction();
