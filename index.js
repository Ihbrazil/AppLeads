import express from 'express';
import cors from 'cors';

import { cadastraLead } from './servico/cadastroServico.js';
import { validaUsuario } from './validacao/valida.js';

const app = express();

app.use(express.json());
app.use(cors());

app.post("/usuarios", async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    const usuarioValido = validaUsuario(nome, email);

    if (usuarioValido.status) {
        await cadastraLead(nome, email);
        res.status(204).end();
    } else {
        res.status(400).send({mensagem: usuarioValido.mensagem});
    }
    
});

app.listen(3001, async () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});