import express from 'express'

const router = express.Router();
import BlogPostModel from '../../models/BlogPost.js'

import pagination from '../../apiMiddlewares/pagination.js'

/*
    GET /blog => returns the list of blog with author
    GET /blog /123 => returns a single blog with author

    PUT /blog /123 => edit the blog with the given id
    DELETE /blog /123 => delete the blog with the given id
 */
//POST /blog => create a new blogPost
router.post('/', async (req, res) => {
    let blogPostObj = req.body
    {
        "id": 1,
        "category": "ARTICLE CATEGORY",
        "title": "ARTICLE TITLE",
        "cover":"ARTICLE COVER (IMAGE LINK)",
        "read_time_value": 2,
        "read_time_unit": "minute"
        "author":"AUTHOR FOREIGN KEY",
        "content": "HTML",
        "created_at": "DATE"
    }

    let query =
        `PREPARE createBlogPost() AS` +
        `UPDATE blogPosts `
        `ÈXECUTE createBlogPost( ${category} , ${title} , ${cover}  , ${author} , ${content}  )`
    res.send(blogPost)
})

router.get('/',async (req, res) => {

    if (res.paginatedResults !== {}) {
        res.status(200).send(res.paginatedResults)
    }else{
        const BlogPostList = await BlogPostModel.find({},{},{},)
        res.status(200).send(BlogPostList)
    }


})
router.get('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {

})

export default router

