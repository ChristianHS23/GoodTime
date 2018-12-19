const router = require('express').Router()
const Model = require('../models')


router.get('/', (req, res)=> {
    res.send(`ini Page Home `)
})

module.exports = router