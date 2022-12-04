const express = require("express");
const mysql = require("mysql2");
const connect = require("./conexao.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("A API está " + "rodando neste servidor");
  res.end();
});

app.get("/clientes", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  return connect.execSQLQuery("SELECT * FROM clientes", res);
});

app.get("/clientes/:id", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  return connect.execSQLQuery("SELECT * FROM clientes WHERE id=" + req.params.id, res);
});

app.put("/clientes/:id", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  return connect.execSQLQuery("UPDATE clientes set nome='" + req.body.nome + "'WHERE id=" + req.params.id, res);
});

app.post("/clientes/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  return connect.execSQLQuery(
    "INSERT INTO clientes(id, nome, uf) VALUES ('" + req.body.id + "', '" + req.body.nome + "', '" + req.body.uf + "')",
    res
  );
});

app.delete("/clientes/:id", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  return connect.execSQLQuery("DELETE FROM clientes WHERE id=" + req.params.id, res);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server iniciado na porta ${PORT}`));
