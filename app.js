const express = require ('express')
const app = express()
const port = 3000
const Post = require('./routes/Post')
const Role = require('./routes/Role')
const Tag = require('./routes/Tag')
const User = require('./routes/User')
const Index = require('./routes/Index')

app.set("view engine", "ejs")
app.use(express.static('views'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use('/', Index)
app.use('/post', Post)
app.use('/role', Role)
app.use('/tag', Tag)
app.use('/user', User)





app.listen(port,()=> console.log(`Server listen to port : ${port}`))