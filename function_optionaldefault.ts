function getMobileByManufacturer(manufacturer:string="Samsung",id?:number):string[]{
    let MobileList:string[];
    if(id){
        if(id == 101){
            MobileList = ["MotoGPlay, 4th Gen","Moto Z play with Style Mod"];
            return MobileList;
        }
    }
    if(manufacturer == "Samsung")
    {
        MobileList = ["Samsung Galaxy S6 Edge","Samsung Galaxy Note 7",
        "Samsung Galaxy J7 SM-J700F"];
        return MobileList;
    }
    else if(manufacturer == "Apple"){
        MobileList =["Apple iPhone 5s","Apple iPhone 6s ","Apple iPhone 7"];
        return MobileList;
    }
    else{
        MobileList = ["Nokia 105","Nokia 230 Dual Sim"];
        return MobileList;
    }
   }

    //To test optional parameters
    console.log(`The available mobile list:${getMobileByManufacturer("Apple")}`);
    //To Test Default Parameter
    console.log(`The available mobile list:${getMobileByManufacturer(undefined,101)}`);
    console.log(`The available mobile list:${getMobileByManufacturer()}`);
