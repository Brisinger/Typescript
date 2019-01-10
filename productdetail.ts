enum MobilePrice {GoldPlatinum = 59000, PinkGold = 55000, SilverTitanium = 60200};
document.getElementById('gold').innerHTML = MobilePrice.GoldPlatinum.toString() + "/-";
document.getElementById('pinkgold').innerHTML = MobilePrice.PinkGold.toString() + "/-";
document.getElementById('silver').innerHTML = MobilePrice.SilverTitanium.toString() + "/-";

function calculateDiscount(price:number):number{
    let discount:number;
    let totalAmount:number;
    if(price == MobilePrice.GoldPlatinum)
        discount = 15;
    else if(price  == MobilePrice.PinkGold)
        discount = 8;
    else
        discount = 10;
    totalAmount = price - price * discount / 100;
    return discount;
}
let Product = JSON.parse(localStorage.getItem("Product"));
document.getElementById('phoneImage')
.setAttribute("src",`images\\MobileCart_Images_part1\\${Product.imageUrl}`);
document.getElementById('pName').innerHTML = Product.productName;
document.getElementById('pPrice').innerHTML = Product.productPrice;
document.getElementById('productDescription').innerHTML = Product.productDescription;
document.getElementById('pAvailable').innerHTML = Product.productAvailable?"Available":"Out of Stock!";
document.getElementById('pDiscount').innerHTML = calculateDiscount(MobilePrice.GoldPlatinum).toString() + '%';

function getMobileByColor(color:string = "gold")
{
    if(color == "gold")
    {
        Product.imageUrl = "SamsungGalaxy_Gold.jpg";
        Product.productPrice = 59000;
            document.getElementById('phoneImage')
        .setAttribute("src",`images\\MobileCart_Images_part1\\${Product.imageUrl}`);
        document.getElementById('pName').innerHTML = Product.productName;
        document.getElementById('pPrice').innerHTML = Product.productPrice;
        document.getElementById('productDescription').innerHTML = Product.productDescription;
        document.getElementById('pAvailable').innerHTML = Product.productAvailable?"Available":"Out of Stock!";
        document.getElementById('pDiscount').innerHTML = calculateDiscount(MobilePrice.GoldPlatinum).toString() + '%';
    }
    else if(color == "pink")
    {
        Product.imageUrl = "SamsungGalaxy_Pink.jpg";
        Product.productPrice = 55000;
            document.getElementById('phoneImage')
        .setAttribute("src",`images\\MobileCart_Images_part1\\${Product.imageUrl}`);
        document.getElementById('pName').innerHTML = Product.productName;
        document.getElementById('pPrice').innerHTML = Product.productPrice;
        document.getElementById('productDescription').innerHTML = Product.productDescription;
        document.getElementById('pAvailable').innerHTML = Product.productAvailable?"Available":"Out of Stock!";
        document.getElementById('pDiscount').innerHTML = calculateDiscount(MobilePrice.GoldPlatinum).toString() + '%';
    }
    else if(color == "silver")
    {
        Product.imageUrl = "SamsungGalaxy_Silver.jpg";
        Product.productPrice = 60200;
            document.getElementById('phoneImage')
        .setAttribute("src",`images\\MobileCart_Images_part1\\${Product.imageUrl}`);
        document.getElementById('pName').innerHTML = Product.productName;
        document.getElementById('pPrice').innerHTML = Product.productPrice;
        document.getElementById('productDescription').innerHTML = Product.productDescription;
        document.getElementById('pAvailable').innerHTML = Product.productAvailable?"Available":"Out of Stock!";
        document.getElementById('pDiscount').innerHTML = calculateDiscount(MobilePrice.GoldPlatinum).toString() + '%';
    }
}