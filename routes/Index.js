const router = require('express').Router()
const Model = require('../models')


router.get('/', (req, res)=> {    
    res.render('index.ejs')
})

module.exports = router