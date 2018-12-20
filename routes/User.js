const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/edit/:id', (req, res) => {

    Model.User.findByPk(req.params.id)
        .then(dataUser => {
            res.render('editUser.ejs', { data: dataUser, session: req.session.user })
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/', (req, res) => {
    Model.Post.findAll({
        include: [
            {
                model: Model.User, include: [
                    { model: Model.PostLike }
                ]
            }
        ],
        order: [
            ['createdAt', 'DESC']
        ]
    })
        .then(data => {
            res.render('indexuser.ejs', { data, session: req.session.user })
            // res.send(data)
        })
        .catch(err => res.send(err.message))
})

router.get('/listpost/:postid', (req, res) => {
    let info = req.query.info
    Model.Post.findOne({
        include: [
            {
                model: Model.User, include: [
                    { model: Model.PostLike }
                ]
            }
        ],
        where: { id: req.params.postid }
    })
        .then(data => {
            // res.send(data)
            res.render('detailedPost.ejs', { data: data, session: req.session.user, info: info })
        })
})

router.get('/listpost/:postid/like', (req, res) => {
    let user = req.session.user

    Model.PostLike.create({
        PostId: req.params.postid,
        UserId: user.id,
        Like: true
    })
        .then(() => {
            res.redirect(`/user/listpost/${req.params.postid}?info=success like`)
        })
        .catch(err => {
            res.redirect(`/user/listpost/${req.params.postid}?info=you already like this post`)
        })
})

router.get('/:UserId/createpost', (req, res) => {
    res.render(`createpost.ejs`, { session: req.session.user })
})

router.post('/:UserId/createpost', (req, res) => {
    let userid = req.params.UserId
    let newPost = req.body
    let objPost = {
        title: newPost['title'],
        content: newPost['content'],
        UserId: userid
    }
    Model.Post.create(objPost)
        .then(() => {
            res.redirect(`/user/listpost/${userid}`)
        })
        .catch(err => {
            res.send(err)
        })
    // res.render('post', {info, err, session : req.session.user})

})

router.get('/:userid/profile', (req, res) => {
    let userId = req.params.userid
    Model.User.findByPk(userId,{
        include : [{
            model : Model.Post
        }]
    })
        .then(currentUser => {
            res.render('userProfile.ejs', { data: currentUser, session: req.session.user })
            // res.send(currentUser)
        })
        .catch(err=>{
            res.send(err)
        })
})

router.get('/:userid/profile/deletepost/:postid',(req,res)=>{
    let userId = req.params.userid
    let postid = req.params.postid
    Model.Post.destroy({where:{id:postid}})
    .then(()=>{
        res.redirect(`/user/${userId}/profile`)
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/:userid/profile/editpost/:postid', (req, res)=>{
    Model.Post.findByPk(req.params.postid)
    .then(dataPost=>{
        res.render('editpost.ejs',{data:dataPost, session : req.session.user})
    })
})

router.post('/:userid/profile/editpost/:postid', (req, res) => {
    let userId = req.params.userid
    let postid = req.params.postid
    let post = req.body
    let objPost = {
            id : postid,
            title : post['title'],
            content : post['content']            
    }
    Model.Post.update(objPost,{
        where : {id : postid}
    })
    .then(()=>{
        res.redirect(`/user/${userId}/profile`)
    })
    .catch(err=>{
        res.send(err)
    })    
})

router.get('/delete/:id', (req, res) => {
    res.send('delete sukses')
})

router.get('/add', (req, res) => {
    res.send('add user sukses')
})

module.exports = router

