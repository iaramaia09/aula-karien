require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    res.json({message: "Funcionando"});
})

app.get("/clientes", async (req, res) => {
    const clientes = await db.selectCustomers();
    res.json(clientes);
})
app.listen(port);

console.log("Backend rodando");