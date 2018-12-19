const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/register',(req,res)=>{
    // res.send('ini tampilan list user aktif dari forum kami')
    let objUser = {
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
        
    }
    Model.User.create()
})

router.get('/edit/:id',(req,res)=>{
    res.send('saat tombol edit user dipencet, ini tampilannya')
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

