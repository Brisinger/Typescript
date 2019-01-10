let cart:string[] = [];
let pushtoCart = (productName:string)=>{cart.push(productName);}

function addtoCart(...productName:string[]):string[]{
    for(let i:number = 0; i < productName.length; i++){
        pushtoCart(productName[i]);
    }
    return cart;
}
console.log("Cart items are:"+addtoCart("Moto G Play, 4th Gen","Apple iphone 5s"));
