const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    blog_title: {
        type: DataTypes.STRING
    },
    blog_content: {
        type: DataTypes.STRING
    },
    },
{
    sequelize,
    modelName: 'post'
});

module.exports = Post;