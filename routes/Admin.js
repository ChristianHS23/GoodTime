const router = require('express').Router()
const Model = require('../models')

router.get('/', (req, res) => {
    console.log(req.session.user,"masukkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    res.render('indexadmin')
})

module.exports = router