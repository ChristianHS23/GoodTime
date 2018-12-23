const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const Post = require('./routes/Post')
const Role = require('./routes/Role')
const Tag = require('./routes/Tag')
const User = require('./routes/User')
const Index = require('./routes/Index')
const path = require('path')
const session  = require('express-session')
const middlewareLogin = require('./helpers/middlewareLogin')
const Admin = require('./routes/Admin')
const middlewareLoginRole = require('./helpers/middlewareLoginRole')


app.set("view engine", "ejs")
app.use(express.static('views'))
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Use the session middleware
 var sess = {
    secret: 'bebasajasihkak',
    cookie: {}
}

app.use(session(sess))



// app.locals({})

app.use('/', Index)

// register
// login

app.use(middlewareLogin)

app.use('/user', User)
// app.use('/post', Post)
app.use('/role', Role)
app.use('/tag', Tag)

app.use(middlewareLoginRole)
app.use('/admin', Admin)




app.listen(port, () => console.log(`Server listen to port : ${port}`))