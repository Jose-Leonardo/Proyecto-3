const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Posts = db.define(
    'posts', {
        id:{
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false
        },
        content:{
            type: DataTypes.STRING,
            allowNull: false
        },
        userName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        isPublished:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    }
)
module.exports = Posts