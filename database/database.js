const Sequelize = require("sequelize")

// criando um obj de conexão
const connection = new Sequelize('blog', 'root' , 'bandtec', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection


