const express = require('express')

const app = express()

app.use(express.json())

const db = require('./utils/database')
const initModels = require('./models/initModels')
const {port} = require('./config')
const postsRouter = require('./posts/posts.router')

db.authenticate()
    .then(() => console.log('DB Autentique seccesfully'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database sync'))
    .catch((err) => console.log(err))

initModels()

//*------------------------------------------
app.use('/api/v1/posts', postsRouter)
//*-------------------------------------------
app.get('/', (req, res) =>{
    res.status(200).json({mesage:"todo bien"})
})

app.listen(port, () => {
    console.log(`server start at port ${port}`)
})

module.exports = app
