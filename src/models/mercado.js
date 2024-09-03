let nextID = 1

const model = (body, id = nextID++) => {
    if(
        body.nome != undefined &&
        body.nome != "" &&
        body.endereco != undefined
    ){
        return {
            id,
            nome: body.nome,
            endereco: body.endereco
        }
    }
    return
}


module.exports = model