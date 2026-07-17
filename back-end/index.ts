import express from "express";

const app = express();

app.post("/", (req, res) => {
    res.json("oie isso é um teste");
    
})

app.listen(3000, () => {
    console.log("Servidor Rodando na porta 3000")
});
