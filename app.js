const express = require('express');

let app = express();

//Cria o servidor
app.listen(3000,()=>console.log("Servidor rodando na porta 3000"));

app.get('/',(req,res)=>res.send("Olá mundo!"));

app.get('/contato', (req,res)=>res.send(['Contato1','Contato2']));

app.get('/endereco', (req,res)=>res.send({endereco:'Rua dos Alfeneiros', numero:4,cidade:"Little Whinging",complemento:"Condado de Surrey"}));