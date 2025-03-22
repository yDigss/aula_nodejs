import express from 'express'
const app = express()

//mock
const selecoes = [
    {id: 1, selecao: 'Brasil', group: 'G'},
    {id: 2, selecao: 'Suíça', group: 'G'},
    {id: 3, selecao: 'Sérvia', group: 'G'},
    {id: 4, selecao: 'Camarões', group: 'G'}
]

// criando rota padrão
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.JS')
})

app.get('/selecoes', (req, res) =>{
    res.send(selecoes)
})

export default app
