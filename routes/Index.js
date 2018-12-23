const router = require('express').Router()
const Model = require('../models')
const cryptoHash = require('../helpers/cryptoHash')

router.get('/',(req,res)=>{
    let info = req.query.info
    let err = req.query.err
    
    res.render('index.ejs', {info: info, err: err, session : req.session.user})
})

router.get('/rules',(req,res)=>{
    res.render('rules.ejs',{session:req.session.user})
})

router.get('/top10',(req,res)=>{
    Model.User.findAll({
        limit : 10,
        order : [
            ['reputasi','DESC']
        ]
    })
    .then(dataUserTop3=>{
        res.render('top10user.ejs',{data : dataUserTop3 , session : req.session.user})
    })
    .catch(err=>{
        res.send(err)
    })
})


router.get(`/register`, (req, res)=> {
    let info = req.query.info
    let err = req.query.err

    res.render('register', {info: info, err: err , session : req.session.user})

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
        res.redirect(`/register?info=${info}`)
    })
    .catch((err)=> {
        res.redirect(`/register?err=${err}`)
    })
})

router.get('/logout',(req, res)=> {
    req.session.destroy()
    res.redirect('/')
})

router.get('/login',(req, res)=> {
    let info = req.query.info
    let err = req.query.err
    res.render('login.ejs',{info:info, err:err, session : req.session.user})
})

router.post('/login',(req, res)=>{    
  
    let inputPassword = req.body.password
    
    Model.User.findOne({
        where : {
            email : req.body.email            
        }
    })
    .then(userLogin=>{
        if(!userLogin){
            let err = 'email not found'
            res.redirect(`/login?err=${err}`)
        } else {
            if(cryptoHash(userLogin.secret, inputPassword) == userLogin.password) {
                req.session.user = {
                    id: userLogin.id,
                    username: userLogin.username,
                    role: userLogin.role
                }
                if(userLogin.role == "admin"){
                    res.redirect('/admin?info=Success Login')
                } else if( userLogin.role == "user") {
                    res.redirect('/user?info=Success Login')
                }   
              
            } else {
                res.redirect('/login?err=Incorrect Password')
            }
        }
    })
    .catch(err=>{
        res.send(err)
    })

})

module.exports = router