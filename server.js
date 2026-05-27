import express from "express";

const app = express();

import mysql from "mysql2";


app.use(express.json()); //middleware to receive json object from client in request body


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecomm"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected Successfully");
});

//READ OF CRUD 
app.get("/products/:id", (req, res) => {
  
    const id = Number(req.params.id);
    var sql= `Select * from products where id = ${id}`; // id of product to read will come from client in request url as path parameter

    db.query(sql, (err, result) => {
        res.send(result);
    })



});

app.listen(3000, () => {
    console.log("App is serving on port 3000");
})