const controllers = require('./posts.controllers')

const getAllPosts = (req, res) => {
    controllers.findAllPosts()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getPostsById = (req, res) => {
    const {id} = req.params
    controllers.findPostById(id)
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const postPosts = (req, res) => {
    const {content, userName} = req.body
    controllers.createPost({content, userName })
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message, fields: {
                content: 'string',
                userName: 'string'
            }})
        })
}

const patchPosts = (req, res) => {
    const {id} = req.params
    const {content, userName} = req.body
    controllers.updatePost(id, {content, userName})
        .then((data) => {
            if (data) {
                res.status(200).json({message: `User edited succesfully with id: ${id}`})
            } else {
                res.status(404).json({message: `User with id: ${id}, not found`})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message, fields:{
                content: 'string',
                userName: 'string'
            }})
        })
}

const delePosts = (req, res) => {
    const {id} = req.params
    controllers.deletePost(id)
        .then((data) => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: `User with id:${id}, Not Found`})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    delePosts,
    getAllPosts,
    getPostsById,
    postPosts,
    patchPosts
}