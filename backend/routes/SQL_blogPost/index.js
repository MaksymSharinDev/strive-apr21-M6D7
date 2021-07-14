import express from 'express'

const router = express.Router();
import BlogPostModel from '../../models/BlogPost.js'
import db from '../../db/pg.js'
/*
    GET /blog => returns the list of blog with author
    GET /blog /123 => returns a single blog with author

    PUT /blog /123 => edit the blog with the given id
    DELETE /blog /123 => delete the blog with the given id
 */
//POST /blog => create a new blogPost
router.post('/', async (req, res) => {
    let blogPostObj = {
        id, category,
        title, cover, author, content,
        read_time_value,
        read_time_unit,
        created_at
    }
    blogPostObj = req.body

    db.query(```
        INSERT INTO blogPosts (
            id , category ,
            title , cover , author , content ,
            read_time_value , read_time_unit , created_at )
        VALUES ( ${new Array(15).reduce( (acc, elem , i) => acc = acc + `$${i}`  ,'') } )
        ``` ,
    [   blogPostObj.id  ,  blogPostObj.category  ,
        blogPostObj.title  ,  blogPostObj.cover  ,  blogPostObj.author  ,  blogPostObj.content  ,
        blogPostObj.read_time_value  ,  blogPostObj.read_time_unit  ,  blogPostObj.created_at ])
    res.send(blogPost)
})

router.get('/', async (req, res) => {

    if (res.paginatedResults !== {}) {
        res.status(200).send(res.paginatedResults)
    } else {
        const BlogPostList = await BlogPostModel.find({}, {}, {},)
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

