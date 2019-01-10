function CreateCustomerID(name:string,id:number):string
{
    return `The customerid is ${name+id}`;
}

interface StringGenerator
{
    (chars:string,nums:number):string;
}

let IdGenerator:StringGenerator;
IdGenerator = CreateCustomerID;
let id:string = IdGenerator("Infy",101);
console.log(id);
