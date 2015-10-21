var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Test',function(req,res){
  res.send('Bahador is a modern ushkul!')
})

router.post('/Test',function(req,res){
  res.send('Hamed Sent back: ' + req.body.Email);
})


module.exports = router;
