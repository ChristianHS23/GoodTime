const express = require ('express')
const app = express()
const port = 3000
const Post = require('./routes/Post')
const Role = require('./routes/Role')
const Tag = require('./routes/Tag')
const User = require('./routes/User')







app.listen(port,()=> console.log(`Server listen to port : ${port}`))