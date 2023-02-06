
const Posts = require('../models/posts.models')
const uuid = require('uuid') 

const findAllPosts = async() => {
    const data = await Posts.findAll()
    return data 
}

const findPostById = async(id) => {
    const data = await Posts.findOne({
        where: {
            id
        }
    })
    return data
}

const createPost = async(data) => {
    const newPosts = await Posts.create(
        {
            id: uuid.v4(),
            content: data.content,
            userName: data.userName,
            isPublished: true
        }
    )
    return newPosts
}

const updatePost = async(id, obj) => {
    const data = await Posts.update(obj, {
        where: {
            id
        }
    })
    return data[0]
}

const deletePost = async(id) => {
    const data = await Posts.destroy({
        where:{
            id
        }
    })
}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}
