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
app.get("/products", (req, res) => {

    var sql= "Select * from products ORDER BY id DESC LIMIT 0,10";

    db.query(sql, (err, result) => {
        res.send(result);
    })



});

app.listen(3000, () => {
    console.log("App is serving on port 3000");
})