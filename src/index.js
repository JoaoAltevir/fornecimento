const mercadoRouter = require("./routes/mercado.js");
const fornecedorRouter = require("./routes/fornecedor.js");
const produtoRouter = require("./routes/produto.js");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/mercado", mercadoRouter);

app.use("/fornecedor", fornecedorRouter);

app.use("/produto", produtoRouter);


app.listen(port, () => {
    console.log(`listening on ${port} port`);
})