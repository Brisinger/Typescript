enum MobilePrce{Black = 25000, Gold = 28000, White = 30000};

function calculateAmount(price:number):number{
    let discount:number;
    let totalAmount:number;
    if(price == MobilePrce.Gold)
        discount = 5;
    else if(price  == MobilePrce.White)
        discount = 8;
    else
        discount = 10;
    totalAmount = price - price * discount / 100;
    return totalAmount;
}
console.log(`Actual price of the Mobile is ${MobilePrce.Black}`);
console.log(`The final price after discount is ${calculateAmount(MobilePrce.Black)}`);