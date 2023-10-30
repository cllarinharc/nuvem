const express = require("express"); //importa o mÃ³dulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function (req, res) {
  res.send("<h1>Bem vindo a minha loja!</h1>");
});

//rota do cadastro de produtos
app.get("/blusas", function (req, res) {
  res.send("<h1>Lista de blusas!</h1>");
});

//rota com parametro
app.get("/promocoes/:parametro", function (req, res) {
  //req --> dados enviados pelo cliente
  //res --> resposta enviada pelo servidor de volta ao cliente
  res.send("retorno do atacado : promoção:" + req.params.parametro);
});
