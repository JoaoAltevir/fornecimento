const express = require("express");
const router = express.Router();
const mercadoController = require("../controllers/mercado.js");
const upperCase = require("../middleware/caixaAlta.js");
const cepEndereco = require("../middleware/cepEndereco.js");

app.use(upperCase);

router.post("/", cepEndereco, (req,res)=> {
    const dados = req.body;
    const code = mercadoController.store(dados)
    res.status(code).json()
})

router.get("/", (req, res)=>{
    res.json(mercadoController.index());
})

router.get("/:id", (req, res)=> {
    res.json(mercadoController.show(req.params.id));
})

router.put("/:id", cepEndereco, (req, res)=>{
    const dados = req.body
    const code = mercadoController.update(dados, req.params.id);
    res.status(code).res.json();
})

router.delete("/:id", (req, res) => {
    const code = mercadoController.destroy(req.params.id);
    res.status(code).json();
})

module.exports = router