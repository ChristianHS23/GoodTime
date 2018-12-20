const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/edit/:id',(req,res)=>{

    Model.User.findByPk(req.params.id)
    .then(dataUser=>{
        res.render('editUser.ejs',{data:dataUser, session : req.session.user})
    })
    .catch(err=>{
        res.send(err)
    })   
})

router.get('/', (req, res)=> {
    Model.Post.findAll({

        include: [
            {model: Model.User , include: [
                {model: Model.PostLike}
            ]} 
        ]
    })
    .then(data => {
        res.render('indexuser.ejs',{data, session : req.session.user})        
        // res.send(data)
    })
    .catch(err => res.send(err.message))
})

router.get('/listpost/:postid',(req,res)=>{
    let info = req.query.info
    Model.Post.findOne({
        include: [
            {model: Model.User , include: [
                {model: Model.PostLike}
            ]} 
        ],
        where : {id : req.params.postid}
    })
    .then(data => {
        // res.send(data)
        res.render('detailedPost.ejs',{data:data, session : req.session.user, info:info})
    })
})

router.get('/listpost/:postid/like',(req,res)=>{
    let user = req.session.user
    
    Model.PostLike.create({
        PostId : req.params.postid,
        UserId : user.id,
        Like : true
    })
    .then(()=>{
        res.redirect(`/user/listpost/${req.params.postid}?info=success like`)
    })
    .catch(err=>{
        res.redirect(`/user/listpost/${req.params.postid}?info=you already like this post`)
    })
})

router.post('/edit/:id',(req,res)=>{
    res.send('hore edit sukses')
})

router.get('/delete/:id',(req,res)=>{
    res.send('delete sukses')
})

router.get('/add',(req,res)=>{
    res.send('add user sukses')
})

module.exports = router

