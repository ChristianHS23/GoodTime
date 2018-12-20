const express = require('express')
const router = express.Router()
const Model = require('../models')


router.get(`/register`, (req, res)=> {
    let info = req.query.info
    let err = req.query.err

    res.render('register', {info: info, err: err})

})

router.post('/register',(req,res)=> {
  
    let info = `Success to register`
    let objUser = {
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
    }
    console.log(objUser);
    
    Model.User.create(objUser)
    .then(()=> {
        res.redirect(`/user/register?info=${info}`)
    })
    .catch((err)=> {
        res.redirect(`/user/register?err=${err}`)
    })
})

router.get('/login',(req,res)=>{
    let info = req.query.info
    let err = req.query.err
    res.render('login.ejs',{info:info,err:err})
})

router.post('/login',(req,res)=>{    
    
    Model.User.findOne({
        where : {
            email : req.body.email            
        }
    })
    .then(userLogin=>{
        if(!userLogin){
            let err = 'email not found'
            res.redirect(`/user/login?info=${err}`)
        }
    })
    .catch(err=>{
        res.send(err)
    })

})

router.get('/edit/:id',(req,res)=>{

    Model.User.findByPk(req.params.id)
    .then(dataUser=>{
        res.render('editUser.ejs',{data:dataUser})
    })
    .catch(err=>{
        res.send(err)
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

