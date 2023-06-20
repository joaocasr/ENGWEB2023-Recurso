var mongoose = require('mongoose')

var OperacaoSchema = new mongoose.Schema({
    codigo: String,
    nome: String,
    descricao: String
})

var ConsultaSchema = new mongoose.Schema({
    "_id": Number,
    nome: String,
    nif: Number,
    idade: Number,
    sexo: String,
    data:String,
    nr_operacoes: Number,
    operacoes: [OperacaoSchema]
})

module.exports = mongoose.model('consultas', ConsultaSchema)