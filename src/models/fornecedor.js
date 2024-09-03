let nextID = 1

const model = (body, id = nextID++) => {
    if(
        body.nome != undefined &&
        body.nome != ""
    ) {
        return {
            id,
            nome: body.nome
        }
    }
    return
}

module.exports = model