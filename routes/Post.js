const router = require('express').Router()
const Model = require('../models')

router.get('/createpost', (req, res)=> {
    let info = req.query.info
    let err = req.query.err



})


router.get('/listPost', (req, res)=> {
    Model.User.findAll({
        include: [
            {model: Model.Post , include: [
                {model: Model.PostLike}
            ]} 
        ]
    })
    .then(data => res.render('post.ejs',{data}))
    .catch(err => res.send(err.message))
})

module.exports = router