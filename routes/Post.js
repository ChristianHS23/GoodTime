const router = require('express').Router()
const Model = require('../models')

router.get('/', (req, res)=> {
    let info = req.query.info
    let err = req.query.err

    res.render('post', {info, err})

})


router.get('/listPost', (req, res)=> {
    Model.User.findAll({
        include: [
            {model: Model.Post , include: [
                {model: Model.PostLike}
            ]} 
        ]
    })
    .then(data => res.send(data))
    // .then(data => res.render('post.ejs',{data}))
    .catch(err => res.send(err.message))
})

module.exports = router