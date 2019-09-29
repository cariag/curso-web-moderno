const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}) // Converter para JSON
})

/*app.get('/produtos', (req, res, next) => {
    console.log('Middwleware 1...')
    next()
})*/

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})