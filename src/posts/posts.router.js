const router = require('express').Router()

const services = require('./posts.services')

router.route('/')
    .get(services.getAllPosts)
    .post(services.postPosts)

router.route('/:id')
    .get(services.getPostsById)
    .patch(services.patchPosts)
    .delete(services.delePosts)

module.exports = router