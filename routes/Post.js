const router = require('express').Router()
const Model = require('../models')


router.get('/listPost', (req, res)=> {
    Model.Post.findAll({
        include: [
            {model: Model.User}, {model: Model.Tag}
        ]
    })
    .then(data => res.send(data))
    .catch(err => res.send(err))
})

module.exports = router