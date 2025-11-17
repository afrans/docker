import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Servidor rodando dentro do Docker! 2");
});

app.listen(3000, () => console.log("App rodando na porta 3000"));
