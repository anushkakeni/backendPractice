import express from "express";

const app = express();



//app.get(/'path or endpoint' , functionality )
app.get("/hi", (req,res) =>
{
    res.send("hello from endpoint");
})

var products = [
    { "id":1, "title": "iphone", "price":50000},
    {"id": 2 , "title": "oppo", "price": 25000}
]

app.get("/products", (req,res) => {
    res.send(products);
})

app.use(express.json()); //middleware to receive json object from client in request body

//POST 
app.post("/products", (req,res) => {
  // logic to add new product to products array
    //var rec= [{ "id":3, "title": "vivo", "price":40000}];

    // var x= req.body.num // to receive number from client
    // res.send(`${x} - ${y} = {x-y}`); // to send response to client
 console.log(req.body);   
 var rec= req.body;
  products.push(rec);
    res.send("product added successfully");
})


//PUT 
app.put("/products", (req,res) => {
  //var prod = {"id": 2,"title": "samsung","price": 22000};  hard coded product to update

  var prod= req.body; // product to update will come from client in request body    

  products = products.map(p => {
    if(p.id == prod.id){
        p.title = prod.title;
        p.price = prod.price;
    }
    return p;
  })

    res.send("product updated successfully");
})




//DELETE
app.delete("/products/:id", (req,res) => {  
//   console.log("Params: ", req.params);
//   console.log("Query: ", req.query);
    //var id=1;
    var id= Number(req.params.id); // id of product to delete will come from client in request url as path parameter    
    products = products.filter(p => {
        return p.id !== id;
    } )
   
    res.send("Product delete successfully");
})

 

app.listen(3000, () => {
    console.log("App is serving on port 3000");
})