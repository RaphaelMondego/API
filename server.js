import express from 'express';

// import { PrismaClient } from './generated/prisma' // from '@prisma/client'
import { PrismaClient } from '@prisma/client' // from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json()) // essa linha garante que o express entenda o corpo da requisição, o body, como JSON


app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data : {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body) // aqui estamos retornando o usuário que foi criado, com o status 201 (Created)
})


app.get('/usuarios', async (req, res) => {

    let users = []

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    } else {

    }
    
    const user = await prisma.user.findMany()
    
    res.status(200).json(users) // aqui estamos retornando todos os usuários que foram criados, com o status 200 (OK)

}); 


app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data : {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body) // aqui estamos retornando o usuário que foi criado, com o status 201 (Created)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: { 
            id: req.params.id
        }
    })

    res.status(200).json({message: "Usuário deletado com sucesso!"})
})


// Start the server, using "listen"
app.listen(3000, () => {
    console.log("Rodando na porta 3000");
});


/* 
 Usuário: raphamondego
 Senha: NC9OFVK7a7DjuEje */