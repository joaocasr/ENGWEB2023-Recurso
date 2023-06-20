var consultaModel = require('../models/consultas')

module.exports.list = () => {
    return consultaModel.find()
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getByAge = age => {
    return consultaModel.find({"idade":{$gte:age}})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getBySex = sex => {
    return consultaModel.find({"sexo":sex})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getConsulta = id => {
    return consultaModel.findOne({"_id":id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getConsultasNomes = () => { 
    return consultaModel.aggregate([{$group:{_id:"$nome"}},{$sort:{"_id":1}}])
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getInterv = () => {
    return consultaModel.aggregate([{$unwind:"$operacoes"},{$group:{_id:"$operacoes"}},{$sort:{"_id.codigo":1}}])
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}
module.exports.getIntervByID = id => {
    return consultaModel.aggregate([{$unwind:"$operacoes"},{$match:{"operacoes.codigo":id}}])
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}


module.exports.deleteConsulta = id => { 
    return consultaModel.deleteOne({"_id":id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.addConsulta = c => { 
    console.log(c)
    return consultaModel.create(c)
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
    })
}