const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota TTS
app.get('/tts', async (req, res) => {
    try {
        const text = req.query.text;
        // Implementar a lógica TTS aqui
        // Por enquanto, retornando um erro 501 (Not Implemented)
        res.status(501).send('TTS não implementado');
    } catch (error) {
        res.status(500).send('Erro no servidor');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});