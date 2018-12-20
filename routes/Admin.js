const router = require('express').Router()
const Model = require('../models')

router.get('/', (req, res) => {
    let user = req.session.user
    console.log(user,"masukkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    res.render('indexadmin')
})

module.exports = router