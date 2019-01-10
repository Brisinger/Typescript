var productAvailable;
var productName;
var availability;
productAvailable = ["Samsung Galaxy J7", true];
productAvailable.push("Samsung Galaxy J5", false);
for (var i = 0; i < productAvailable.length; i++) {
    if (typeof productAvailable[i] == "string")
        productName = productAvailable[i];
    else if (typeof productAvailable[i] == "boolean") {
        availability = productAvailable[i];
        if (availability === true)
            console.log("The product " + productName + " is available");
        else if (availability === false)
            console.log("The product " + productName + " is not available");
    }
}
