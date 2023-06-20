var express = require('express');
var router = express.Router();
var Consulta = require('../controllers/consultas')

router.get('/consultas', function(req, res, next) {
  if(req.query.sexo){
    Consulta.getBySex(req.query.sexo).then(consultas=>{
      res.jsonp(consultas);
    }).catch(error=>{
      res.render('Erro:',{erro: error,message:"Erro na obtenção das consultas."})
    })
  }
  else if(req.query.idade){
    Consulta.getByAge(req.query.idade).then(consultas=>{
      res.jsonp(consultas);
    }).catch(error=>{
      res.render('Erro:',{erro: error,message:"Erro na obtenção das consultas."})
    })
  }
  else{
    Consulta.list().then(consultas=>{
      res.jsonp(consultas);
    }).catch(error=>{
      res.render('Erro:',{erro: error,message:"Erro na obtenção das consultas."})
    })
  }
});

router.get('/consultas/nomes', function(req, res, next) {
  Consulta.getConsultasNomes().then(nomes=>{
    res.jsonp(nomes);
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na obtenção dos nomes."})
  })
});

router.get('/consultas/interv', function(req, res, next) {
  Consulta.getInterv().then(interv=>{
    res.jsonp(interv);
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na obtenção da consulta."})
  })
});

router.get('/consultas/interv/:id', function(req, res, next) {
  Consulta.getIntervByID(req.params.id).then(intervs=>{
    res.jsonp(intervs);
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na obtenção da consulta."})
  })
});

router.get('/consultas/:id', function(req, res, next) {
  Consulta.getConsulta(req.params.id).then(consulta=>{
    res.jsonp(consulta);
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na obtenção da consulta."})
  })
});

router.post('/consultas', function(req, res, next) {
  var size = 0
  if(!req.body["_id"]){
    Consulta.list().then(consultas=>{
      size=consultas.length
      req.body._id=size+1
      Consulta.addConsulta(req.body).then(consulta=>{
        res.jsonp(consulta);
      }).catch(error=>{
        res.render('Erro:',{erro: error,message:"Erro na adição da consulta."})
      })    
    }).catch(error=>{
      res.render('Erro:',{erro: error,message:"Erro na adição da consulta"})
    })
  }else{
    Consulta.addConsulta(req.body).then(consulta=>{
      res.jsonp(consulta);
    }).catch(error=>{
      res.render('Erro:',{erro: error,message:"Erro na adição do cliente."})
    })
  }
});

router.delete('/consultas/:id', function(req, res, next) {
  Consulta.deleteConsulta(req.params.id).then(consulta=>{
    res.jsonp(consulta);
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na obtenção dos clientes."})
  })
});


module.exports = router;
