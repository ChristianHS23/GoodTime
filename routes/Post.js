const router = require('express').Router
const Model = require('../models')


router.get('/', (req, res)=> {
    res.send(`ini Page Post `)
})

module.exports = router