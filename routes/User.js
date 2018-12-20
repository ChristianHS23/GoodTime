const express = require('express')
const router = express.Router()
const Model = require('../models')


router.get('/', (req,res) => {
    res.send('MASUK')
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

