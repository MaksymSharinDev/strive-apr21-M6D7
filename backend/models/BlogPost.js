import mongoose from 'mongoose'

let Schema = mongoose.Schema

const author = new Schema({
    name: {type: String, required: true},
    avatar: {type: String},
})
const readTime = new Schema({
    value: Number,
    unit: Number
})
const blogPostSchema = new Schema({
        title: {type: String, required: true},
        cover: {type: String},
        category: {type: String, required: true},
        readTime: [readTime],
        author: [author]
    }, {collection: 'BlogPosts'});
const Model = mongoose.model('BlogPost', blogPostSchema);
export default Model

/*
{
	    "_id": "MONGO GENERATED ID",
	    "category": "ARTICLE CATEGORY",
	    "title": "ARTICLE TITLE",
	    "cover":"ARTICLE COVER (IMAGE LINK)",
	    "readTime": {
	      "value": 2,
	      "unit": "minute"
	    },
	    "author": {
	      "name": "AUTHOR NAME",
	      "avatar":"AUTHOR AVATAR LINK"
	    },
	    "content": "HTML",
	    "createdAt": "DATE",
        "updatedAt": "DATE"
}
*/

