const express = require('express')
const app = express()
const port = 3000

// criando rota padrão
app.get('/', (req, res) => {
    res.send('Curso de Node.JS')
})

// escutar porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
}) 
