interface Products
{
    pId:number;
    productName:string;
    productPrice:number;
    productAvailable:boolean;
    imageUrl:string;
    productDescription:string;
}

let productList = [{pId:432,productName:"Samsung Galaxy Note 7",productPrice:59000,productAvailable:true,imageUrl:"SamsungGalaxy_Gold.jpg",
productDescription:"Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."
},{pId:231,productName:"Samsung Galaxy S6 Edge",productPrice:53499,productAvailable:true,imageUrl:"samsung_edge_silver.jpg",
productDescription:"Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 64GB memory."
},{pId:875,productName:"Nokia Lumia 640XL",productPrice:14990,productAvailable:false,imageUrl:"lumia_640xl.jpg",
productDescription:"Nokia Lumina 640XL is a stylish mobile you can ever have. It has 64GB memory."}];

for( let row:number = 0; row < productList.length; row++){
    document.getElementById(`pName${row}`).innerHTML = productList[row].productName;
    document.getElementById(`pPrice${row}`).innerHTML = productList[row].productPrice.toString();
    document.getElementById(`pAvailable${row}`).innerHTML = productList[row].productAvailable ? "Available":"Out of Stock!";
    document.getElementsByTagName('img').item(row).src = `images\\MobileCart_Images_part1\\${productList[row].imageUrl}`;
}

function getMobileDetails(productName:string = "Samsung Galaxy Note 7",productid?:number){
        let filteredList = productList.filter((product)=> product.pId == productid);
        localStorage.setItem("Product",JSON.stringify(filteredList[0]));
        open('ProductDetail.html');
}