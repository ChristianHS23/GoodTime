const router = require('express').Router()
const Model = require('../models')
const searchByOne = require('../helpers/searchByOne')

router.get('/', (req, res) => {
    let user = req.session.user
    console.log(user);
    
    res.render('indexadmin', {session : user})
})

router.get(`/listpost`, (req, res)=> {
    let info = req.query.info
    let err = req.query.err
    // let tempPost = []
    Model.Post.findAll()
    .then(dataPost=> {
        res.render('adminlistpost', {searchByOne : searchByOne ,info: info, err: err, session: req.session.user, Post:dataPost})
    })
})

router.get(`/listpost/delete/:id`, (req, res)=> {
    let postId=req.params.id
    Model.Post.destroy({where: {
        id :postId
    }})
    .then(()=> {
        res.redirect(`/admin/listpost?info=Success delete Post`)
    })
    .catch(err => res.redirect(`/admin/listpost?err=${err}`))
})

router.get('/listuser' ,(req, res)=> {
    let info = req.query.info
    let err = req.query.err
    Model.User.findAll()
    .then(dataUsers=> {
        // res.send(dataUsers)
        res.render('adminlistuser', {user: dataUsers , session:req.session.user, info:info, err: err})
    })
    // res.render()
})



router.get('/listuser/id', (req, res)=> {
    let info = req.query.info
    let err = req.query.err
    Model.User.findAll({ order: [[ 'id', 'ASC' ]]})
    .then(dataUsers => {
        // res.send(dataSubject)
        res.render('adminlistuser' , {user: dataUsers, info:info, err:err, session: req.session.user})
    })
    .catch(err => res.send(err))
   
})


router.get('/listuser/username', (req, res)=> {
    let info = req.query.info
    let err = req.query.err
    Model.User.findAll({ order: [[ 'username', 'ASC' ]]})
    .then(dataUsers => {
        // res.send(dataSubject)
        res.render('adminlistuser' , {user: dataUsers, info:info, err:err, session: req.session.user})
    })
    .catch(err => res.send(err))
})


router.get('/listuser/reputation', (req, res)=> {
    let info = req.query.info
    let err = req.query.err
    Model.User.findAll({ order: [[ 'reputasi', 'DESC' ]]})
    .then(dataUsers => {
        // res.send(dataSubject)
        res.render('adminlistuser' , {user: dataUsers, info:info, err:err, session: req.session.user})
    })
    .catch(err => res.send(err))
   
})

router.get('/listuser/email', (req, res)=> {
    let info = req.query.info
    let err = req.query.err
    Model.User.findAll({ order: [[ 'email', 'ASC' ]]})
    .then(dataUsers => {
        // res.send(dataSubject)
        res.render('adminlistuser' , {user: dataUsers, info:info, err:err, session: req.session.user})
    })
    .catch(err => res.send(err))
})


router.get('/listuser/role', (req, res)=> {
    let info = req.query.info
    let err = req.query.err
    Model.User.findAll({ order: [[ 'role', 'ASC' ]]})
    .then(dataUsers => {
        // res.send(dataSubject)
        res.render('adminlistuser' , {user: dataUsers, info:info, err:err, session: req.session.user})
    })
    .catch(err => res.send(err))
})


router.get('/listuser/status', (req, res)=> {
    let info = req.query.info
    let err = req.query.err
    Model.User.findAll({ order: [[ 'isBan', 'DESC' ]]})
    .then(dataUsers => {
        // res.send(dataSubject)
        res.render('adminlistuser' , {user: dataUsers, info:info, err:err, session: req.session.user})
    })
    .catch(err => res.send(err))
   
})

router.get('/listuser/edit/:id', (req, res)=> {
    let info = req.query.info
    let err = req.query.err
    let userId = req.params.id
    Model.User.findByPk(userId)
    .then(userData=> {
        res.render('adminedituser', {tempId: userId, user :userData, info:info, err:err, session: req.session.user })
    })
    .catch(err=> res.send(err))
})

router.post('/listuser/edit/:id', (req, res)=> {
    let userId = req.params.id
    console.log(userId);
    
    let objUpdate = {
        id:userId,
        username: req.body.username,
        email : req.body.email,
        role : req.body.role
    }
    Model.User.update(objUpdate,{where: {
        id:userId
    }})
    .then(()=> {
        res.redirect(`/admin/listuser/edit/${userId}?info=Success Update User`)
    })
    .catch(err => res.redirect(`/admin/listuser/edit/${userId}?err=${err}`))
})

router.get('/listuser/delete/:id', (req, res)=> {
    let userId = req.params.id
    Model.User.destroy({where: {
        id: userId
    }})
    .then(()=> {
        res.redirect(`/admin/listuser?info=Success Delete User`)
    })
    .catch(err=> {
        res.redirect(`/admin/listuser?err=${err}`)
    })
})

router.get('/listuser/ban/:id', (req, res)=> {
    let userId = req.params.id
    Model.User.update({isBan: true},{ where: {
        id : userId
    }})
    .then(()=> {
        res.redirect(`/admin/listuser?info=Success Ban User`)
    })
    .catch(err=> {
        res.redirect(`/admin/listuser?err=${err}`)
    })
})

module.exports = router