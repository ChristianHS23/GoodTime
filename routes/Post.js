const router = require('express').Router()
const Model = require('../models')

router.post('/:UserId/createpost', (req, res)=> {
    let userid = req.params.UserId    
    let newPost = req.body
    let objPost = {
        title : newPost['title'],
        content : newPost['content'],
        UserId : userid
    }
    Model.Post.create(objPost)
    .then(()=>{
        res.redirect(`/post/${userid}`)
    })
    .catch(err=>{
        res.send(err)
    })

})


router.get('/listPost', (req, res)=> {
    Model.User.findAll({

        include: [
            {model: Model.Post , include: [
                {model: Model.PostLike}
            ]} 
        ]
    })
    .then(data => {
        res.render('post.ejs',{data})
        // res.send(data)
    })
    .catch(err => res.send(err.message))
})

module.exports = router