
let middlewareLoginRole = function (req, res, next) {
    
    if(!req.session.user) {
        res.redirect('/login')
    } else if(req.session.user.role != "admin"){
        res.redirect('/user')
    } else {
        next()
    }
}

module.exports = middlewareLoginRole