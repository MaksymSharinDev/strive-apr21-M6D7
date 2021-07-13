
import express from "express";
const router = express.Router();

router.use( express.json() )
/*
import serviceRouter from './service/index.js'
router.use( '/v1/service', serviceRouter )
 */
import blogPostRouter from './blogPost/index.js'
router.use( '/v2/blogPost', blogPostRouter )


export default router