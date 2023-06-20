var express = require('express');
var router = express.Router();
var env = require('../config/env')
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(env.APIaccesspoint+"/consultas")
  .then(resp =>{
      res.render('index', { consultas:resp.data, size:resp.data.length });
  }).catch(err=>{
      res.render('error',  {error: err});
  })
});

router.get('/:id', function(req, res, next) {
  axios.get(env.APIaccesspoint+"/consultas/"+req.params.id)
  .then(resp =>{
      res.render('consulta', { consulta:resp.data });
  }).catch(err=>{
      res.render('error',  {error: err});
  })
});

///consultas/interv/:id
router.get('/intervencoes/:id', function(req, res, next) {
  axios.get(env.APIaccesspoint+"/consultas/interv/"+req.params.id)
  .then(resp =>{
      res.render('intervencoes', { intervencoes:resp.data, intervencao: req.params.id});
  }).catch(err=>{
      res.render('error',  {error: err});
  })
});



module.exports = router;
