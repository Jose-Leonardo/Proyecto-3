//! Dependencias "npm i sequilize" ORM y "npm i pg pg-hstore" para posgres
//* Utilidad para manejar la base de datos db

const {Sequelize} = require('sequelize')
const config = require('../config')

//* Crea la connection a la db
const db = new Sequelize ({
    dialect: 'postgres',
    host: config.db.host,
    username: config.db.username,
    password: config.db.password,
    database: config.db.name
})

module.exports = db