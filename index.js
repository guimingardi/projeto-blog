const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require('./database/database')

//carregando view engine
app.set('view engine', 'ejs')

//static 
app.use(express.static('public'))

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Database 
connection
    .authenticate()
    .then(() => {
        console.log("Conexão realizada com sucesso")
    }).catch((error) => {
        console.log(error)
    })


app.get("/", (req, res) => {
    res.render("index")
})

app.listen(8181, () => {
    console.log("Servidor rodando")
})