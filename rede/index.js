const express = require('express');
const app = express();
app.use(express.json())

let contador = 0;

//Base de dados em memória volátil
const usuarios = {
}
//GET base de dados usuários
app.get('/rede', (req, res) => {
    console.log('Requisição GET..')
    res.send(usuarios)
})
app.post('/rede', (req, res) => {
    contador++
    const nome = req.body.nome
    const email = req.body.email
    usuarios[contador] = {
        id: contador,
        nome: nome,
        email: email
    }
    res.status(201).end()
})


app.listen(5000, () => console.log('Escutando na porta 5000'))