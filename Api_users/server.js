import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express()

app.use(express.json())
app.use(cors())
// aqui insere os usuários no BD, precisa ser assincrona com await
// cria o usuario com as informações do data
app.post('/usuarios', async (req, res) => {

    // cria o usuário com as informações do data colocadas no POST
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    // retorna o status 201 (deu certo) e o corpo da requisição como json
    res.status(201).json(req.body)
})

// :id se torna uma variavel id
app.put('/usuarios/:id', async (req, res) => {
   
    // editar um usuario pelo id (que é unico), no PUT coloca as
    // informações novas que vão ser subsituidas quando der o GET
    await prisma.user.update({
         where: {
        id: req.params.id
    },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    // resposta com status que deu certo
    res.status(201).json(req.body)
})

// deletar usuario pelo id
app.delete('/usuarios/:id', async (req, res) => {
    // deletar pelo id
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    // mensagem de resposta que deletou
    res.status(200).json({ message: 'Usuário deletado com sucesso!'})
})

app.get('/usuarios', async (req, res) => {
    
    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.listen(3000)
