const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("A API está " + "rodando neste servidor");
  res.end();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server iniciado na porta ${PORT}`));
