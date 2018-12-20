const router = require('express').Router()
const Model = require('../models')
const crypto = require('crypto')

router.get('/',(req,res)=>{
    let info = req.query.info
    let err = req.query.err
    
    res.render('index.ejs', {info: info, err: err, session : req.session.user})
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
           console.log("userLogin: ", userLogin)
           console.log(inputPassword)

            const hash = crypto.createHmac( 'sha256', userLogin.secret)
            .update(inputPassword)
            .digest('hex');
            console.log(hash)
            if(hash == userLogin.password) {
             
                req.session.user = {
                    username: userLogin.username,
                    role: userLogin.role
                }
                res.redirect('/admin?info=Success Login')
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