var express = require('express');
var router = express.Router();
const axios = require('axios');

const URL = 'https://catfact.ninja/fact';

/* GET home page. */ //axios needs to installed!!!! command: npm i axios****
router.get('/', async function(req, res, next) {
  try {
    const response = await axios.get(URL);
    const catFact = response.data.fact; 
    res.render('index', { title: 'Cat Facts', catFact });
  } catch (error) {
    console.error('Error fetching cat fact:', error);
    res.status(500).send('Error fetching cat fact');
  }
});

module.exports = router;
