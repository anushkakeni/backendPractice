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

app.listen(3000, () => {
    console.log("App is serving on port 3000");
})