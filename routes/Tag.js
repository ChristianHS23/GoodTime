const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/',(req,res)=>{
    res.send('ini adalah list dari tag tag dalam forum')
})

router.get('/add',(req,res)=>{
    res.send('ini adalah tampilan saat add tag diklik, berupa form isian tag')
})

router.post('/add',(req,res)=>{
    res.send('tampilan saat tag berhasil di tambahkan, hore sukses')
})

router.get('/delete',(req,res)=>{
    res.send('delete tag')
})

router.get('/edit',(req,res)=>{
    res.send('edit tag')
})

router.post('/edit',(req,res)=>{
    res.send('sukses edit tag')
})

module.exports = router