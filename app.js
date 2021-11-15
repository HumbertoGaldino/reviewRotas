const express = require('express');

let app = express();

//Cria o servidor
app.listen(3000,()=>console.log("Servidor rodando na porta 3000"));

app.get('/',(req,res)=>res.send("Olá mundo!"));