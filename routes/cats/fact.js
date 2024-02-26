var express = require('express');
var router = express.Router();

const URL = 'https://catfact.ninja/fact'

router.get('/', async function(req, res, next){
    const catFact = await fetch(URL)
        const catFactData = await catFact.json();
        res.render('cat/fact', { catFact: catFactData.fact }) 
})

module.exports = router;