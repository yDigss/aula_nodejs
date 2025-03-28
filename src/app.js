import express from 'express'

const app = express()

//indicar para o express ler body com json
app.use(express.json())

//mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Camarões', grupo: 'G'},
    {id: 4, selecao: 'Sérvia', grupo: 'G'}
]

function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id)
}

//Pegar a posicao do elemento no array por id
function buscarIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

// criando rota padrão
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.JS')
})

app.get('/selecoes', (req, res) =>{
    res.send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    let index = req.params.id
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) =>{
    selecoes.push(req.body)
    res.status(201).send('Seleçao cadastrada com suscesso!')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    console.log(index)
    selecoes.splice(index, 1)
    res.send(`Seleçao com id ${req.params.id} excluida com suscesso!`)
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    console.log(index)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo   = req.body.grupo
    res.json(selecoes)
})

export default app
