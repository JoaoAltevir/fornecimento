const db = [];
const model = require("../models/mercado.js");

const store = body => {
    const novo = model(body);
    if(novo){
        db.push(novo);
        return 200
    }
    return 400
}

const index = () => db

const show = id => db.find(el => el.id == id)

const update = (body, id) => {
    const index = db.findIndex(el => el.id == id)
    const atualizado = model(body, id);
    if(atualizado && index != -1){
        db[index] = atualizado;
        return 200
    }
    return 400
}

const destroy = id => {
    const index = db.findIndex(el => el.id == id);
    if(index != -1){
        db.splice(index,1);
        return 200
    }
    return 400
}