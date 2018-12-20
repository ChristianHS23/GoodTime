const router = require('express').Router()
const Model = require('../models')

router.get('/', (req, res) => {
    let user = req.session.user
    console.log(user);
    
    res.render('indexadmin', {session : user})
})

module.exports = router