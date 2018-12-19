const router = require('express').Router()
const Model = require('../models')

router.get('/',(req,res)=>{
    res.render('index.ejs')
})
router.get('/top10',(req,res)=>{
    Model.User.findAll({
        limit : 10,
        order : [
            ['reputasi','DESC']
        ]
    })
    .then(dataUserTop3=>{
        res.render('top10user.ejs',{data : dataUserTop3})
    })
    .catch(err=>{
        res.send(err)
    })
})

module.exports = router