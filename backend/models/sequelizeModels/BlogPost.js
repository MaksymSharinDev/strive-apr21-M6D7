import sequelize from '../../db/sequelize.js'
import Sequelize, {DataTypes} from "sequelize";
import AuthorModel from '../sequelizeModels/Author.js'
/*
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
*/
const BlogPostModel = sequelize.define(
    'BlogPost',
    {
        "id":{
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        "category":{
            type: DataTypes.STRING(24)
        },
        "title":{
            type: DataTypes.STRING(24)
        },
        "cover":{
            type: DataTypes.STRING
        },
        "read_time_value":{
            type: DataTypes.INTEGER
        },
        "read_time_unit": {
            type: DataTypes.STRING('4')
        },
        "author":{
            type: DataTypes.UUID,
            references:{
                model: Author
            }
        },
        "content":{
            type: DataTypes.TEXT
        },
        "created_at":{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }
)
await BlogPostModel.sync({ alter: true })

export default BlogPostModel

