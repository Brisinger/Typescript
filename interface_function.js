function CreateCustomerID(name, id) {
    return "The customerid is " + (name + id);
}
var IdGenerator;
IdGenerator = CreateCustomerID;
var id = IdGenerator("Infy", 101);
console.log(id);
