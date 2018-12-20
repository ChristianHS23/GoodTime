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

    res.render('post', {info, err, session : req.session.user})

})


router.get('/listPost', (req, res)=> {
    Model.Post.findAll({

        include: [
            {model: Model.User , include: [
                {model: Model.PostLike}
            ]} 
        ]
    })
    .then(data => {
        res.render('post.ejs',{data, session : req.session.user})        
        // res.send(data)
    })
    .catch(err => res.send(err.message))
})

module.exports = router