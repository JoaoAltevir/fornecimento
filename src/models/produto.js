let nextID = 1;
const mercadoController = require("../controllers/mercado.js");
const fornecedorController = require("../controllers/fornecedor.js");

const model = (body, id = nextID++ ) => {
    if(
        body.nome != undefined &&
        body.nome != "" &&
        body.quantidade != undefined &&
        isNaN(Number(body.quantidade)) &&
        mercadoController.show(body.idMercado) &&
        fornecedorController.show(body.idFornecedor)
    ) {
        return {
            id,
            nome: body.nome,
            quantidade: body.quantidade,
            idMercado: body.idMercado,
            idFornecedor: body.idFornecedor
        }
    }
    return
}

module.exports = model