import express from 'express';

import { cadastraLead } from './servico/cadastroServico.js';

const app = express();

app.use(express.json());

app.post("/usuarios", async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    await cadastraLead(nome, email);

    res.status(204).end();
});

app.listen(3001, async () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);

    cadastraLead('Marcos', 'marcos@ElementInternals.com');
});