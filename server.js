const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

// Servir arquivos estáticos
app.use(express.static('.', {
  extensions: ['html'],
  index: 'index.html'
}));

// Endpoint TTS online (Streamlabs Polly)
app.get('/tts', (req, res) => {
  const { text = 'Olá' } = req.query;
  const voice = 'Ricardo'; // Voz masculina em PT-BR

  if (!text || text.length > 200) {
    return res.status(400).send('Texto inválido ou muito longo.');
  }

  const encodedText = encodeURIComponent(text);
  const ttsUrl = `https://streamlabs.com/polly/speak?text=${encodedText}&voice=${voice}`;
  res.redirect(302, ttsUrl);
});

// Qualquer rota retorna index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});