import express from 'express'

const app = express()

//indicar para o express ler body com json
app.use(express.json())

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

app.post('/selecoes', (req, res) =>{
    selecoes.push(req.body)
    res.status(201).send('Seleçao cadastrada com suscesso!')
})

export default app
