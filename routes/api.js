const express = require('express');
const router = express.Router();


// middleware to validate the route inputs
router.post('/:math', function(req, res, next){
  if(!req.body.num1 && !req.body.num2) {
    return res.status(432).json({message: 'No data fool'});
  }

  next();
})
router.post('/:math', function(req, res, next){
  if(isNaN(req.body.num1) || isNaN(req.body.num2)) {
    return res.status(432).json({fail: 'Input is not a number'});
  }

  next();
})

// routes for the calculator
router.post('/add', function(req, res, next){
  res.json({result: req.body.num1 + req.body.num2});
});

router.post('/sub', function(req, res, next){
  res.json({result: req.body.num1 - req.body.num2});
});

router.post('/mult', function(req, res, next){
  res.json({result: req.body.num1 * req.body.num2});
});

router.post('/div', function(req, res, next){
  res.json({result: req.body.num1 / req.body.num2});
});


module.exports = router;
