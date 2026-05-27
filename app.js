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
app.delete("/products", (req,res) => {  

   
    res.send("delete request received");
})

app.listen(3000, () => {
    console.log("App is serving on port 3000");
})