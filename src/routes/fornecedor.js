const express = require("express");
const router = express.Router();
const fornecedorController = require("../controllers/fornecedor.js");

router.post("/", (req,res)=> {
    const dados = req.body;
    const code = fornecedorController.store(dados)
    res.status(code).json()
})

router.get("/", (req, res)=>{
    res.json(fornecedorController.index());
})

router.get("/:id", (req, res)=> {
    res.json(fornecedorController.show(req.params.id));
})

router.put("/:id", (req, res)=>{
    const dados = req.body
    const code = fornecedorController.update(dados, req.params.id);
    res.status(code).res.json();
})

router.delete("/:id", (req, res) => {
    const code = fornecedorController.destroy(req.params.id);
    res.status(code).json();
})

module.exports = router