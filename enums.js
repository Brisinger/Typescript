var MobilePrce;
(function (MobilePrce) {
    MobilePrce[MobilePrce["Black"] = 25000] = "Black";
    MobilePrce[MobilePrce["Gold"] = 28000] = "Gold";
    MobilePrce[MobilePrce["White"] = 30000] = "White";
})(MobilePrce || (MobilePrce = {}));
;
function calculateAmount(price) {
    var discount;
    var totalAmount;
    if (price == MobilePrce.Gold)
        discount = 5;
    else if (price == MobilePrce.White)
        discount = 8;
    else
        discount = 10;
    totalAmount = price - price * discount / 100;
    return totalAmount;
}
console.log("Actual price of the Mobile is " + document.createElement('&#8377;') + MobilePrce.Black);
console.log("The final price after discount is " + calculateAmount(MobilePrce.Black));
