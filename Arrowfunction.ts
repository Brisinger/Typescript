let manufacturers = [{"id":"Samsung","price":15000},{"id":"Microsoft","price":20000},
{"id":"Apple","price":40000},{"id":"Micromax","price":10000}];

let test;

function myFunction(){
    test = manufacturers.filter((manufacturer) => manufacturer.price >= 20000);
}

myFunction();
console.log("The filtered array is");

for(let i:number = 0; i < test.length; i++)
{
    console.log(test[i].id);
}