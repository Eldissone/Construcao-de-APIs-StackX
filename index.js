import express, { json } from 'express';
import Fs from 'fs';

const app = express()
app.use(express.json())

let users = []


app.post('/', (req, res) => {
    const { nome, idade, email, post } = req.body;

    if (!nome || !idade || !email || !post) {
        return res.status(400).send("Falta dados")
    }

    const data = `Nome ${nome}, Idade ${idade}, email ${email}, post ${post}`;

    users.push(req.body)

    Fs.writeFileSync("arquivo.txt", JSON.stringify(users, null, 2))
    Fs.appendFileSync("arquivo.txt", JSON.stringify(users, null, 2))

    let result = Fs.readFileSync("arquivo.txt", "utf-8")

    // Fs.unlinkSync("arquivo.txt")

    // res.status(201).json(req.body)
    res.status(201).send(data)

})


app.delete('/Usuarios/:nome', (req, res) => {
    const nome = req.params.nome;
    const initialLength = users.length;
    
    let updatedUsers = users.filter(user => user.nome !== nome);
    
    if (updatedUsers.length < initialLength) {
      users = updatedUsers;  
      Fs.writeFileSync("arquivo.txt", JSON.stringify(users, null, 2));
      res.status(200).send(`Usuário ${nome} removido com sucesso!`);
    } else {
      res.status(404).send(`Usuário ${nome} não encontrado.`);
    }
  
});


app.get('/Usuarios', (req, res) => {
    res.status(200).json(users)
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})