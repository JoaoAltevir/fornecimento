const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produto.js");
const upperCase = require("../middleware/caixaAlta.js");

app.use(upperCase);

router.post("/", (req,res)=> {
    const dados = req.body;
    const code = produtoController.store(dados)
    res.status(code).json()
})

router.get("/", (req, res)=>{
    res.json(produtoController.index());
})

router.get("/:id", (req, res)=> {
    res.json(produtoController.show(req.params.id));
})

router.put("/:id", (req, res)=>{
    const dados = req.body
    const code = produtoController.update(dados, req.params.id);
    res.status(code).res.json();
})

router.delete("/:id", (req, res) => {
    const code = produtoController.destroy(req.params.id);
    res.status(code).json();
})

module.exports = router