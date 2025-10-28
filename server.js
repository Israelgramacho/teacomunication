const express = require('express');
const path = require('path');
const https = require('https');
const app = express();

const PORT = process.env.PORT || 3000;

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

  https.get(ttsUrl, (audioResponse) => {
    res.setHeader('Content-Type', 'audio/mpeg');
    audioResponse.pipe(res);
  }).on('error', (error) => {
    console.error('Erro ao obter áudio:', error);
    res.status(500).send('Erro ao gerar áudio');
  });
});

// Qualquer rota retorna index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});