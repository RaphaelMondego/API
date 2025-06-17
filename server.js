import express from 'express';

const app = express()
app.use(express.json()) // essa linha garante que o express entenda o corpo da requisição, o body, como JSON

const users = []

app.post('/usuarios', (req, res) => {

    users.push(req.body) // o push adiciona os dados do usuário que enviamos na TC.

    res.status(201).json(req.body) // aqui estamos retornando o usuário que foi criado, com o status 201 (Created)
})


app.get('/usuarios',(req, res) => {
    res.status(200).json(users) // aqui estamos retornando todos os usuários que foram criados, com o status 200 (OK)
}); 

// Start the server, using "listen"
app.listen(3000)


/* 
 Usuário: raphamondego
 Senha: NC9OFVK7a7DjuEje */