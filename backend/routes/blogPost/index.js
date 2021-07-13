import express from 'express'

const router = express.Router();
import BlogPostModel from '../../models/BlogPost.js'

import pagination from '../../apiMiddlewares/pagination.js'

/*

    GET /blogPosts => returns the list of blogPosts
    GET /blogPosts /123 => returns a single blogPost

    PUT /blogPosts /123 => edit the blogPost with the given id
    DELETE /blogPosts /123 => delete the blogPost with the given id
 */
//POST /blogPosts => create a new blogPost
router.post('/', async (req, res) => {
    let blogPostObj = req.body
    let blogPostDoc = new BlogPostModel( blogPostObj )
    let blogPost = await blogPostDoc.save()
    res.send(blogPost)
})

router.get('/',pagination(BlogPostModel), async (req, res) => {

    if (res.paginatedResults !== {}) {
        res.status(200).send(res.paginatedResults)
    }else{
        const BlogPostList = await BlogPostModel.find({},{},{},)
        res.status(200).send(BlogPostList)
    }


})
router.get('/:id', (req, res) => {
    //TODO :id SANITIZATION
    BlogPostModel.findById( req.params.id )
})
router.put('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {

})

export default router

