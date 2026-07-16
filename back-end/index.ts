import express from "express";

const app = express();

app.get("/teste", (req, res) => {
    res.json("Voce Acessou a rota inicial")
})

app.listen(3000, () => {
    console.log("Servidor Rodando na porta 3000")
});
