for(let i = 0; i < 10 ; i++){
    setTimeout(function(){console.log(i);},i);
    const products:string[] = ["Gadget","Furniture","Accessories"];
    products[3] = "Books";
    products[2] = "Ace";
}
let productName:string = "Television";
let  message:string = `The product name is ${productName}`;
console.log(message);