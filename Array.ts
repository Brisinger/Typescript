{
    let manufacturers:any[] = [{"id": "Samsung","checked":false},
    {"id": "Motorolla","checked": false},
    {"id": "Apple","checked": false},
    {"id": "Sony", "checked": false}];

    console.log("Available products are:");

    for(let i:number = 0; i < manufacturers.length; i++){
        console.log(manufacturers[i].id);
    }
    let color: string[] = ["red","green","blue"];
    console.log(color.pop());
}