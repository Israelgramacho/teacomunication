// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Servir arquivos estáticos da pasta raiz (onde está seu index.html)
app.use(express.static('.', {
  extensions: ['html'],
  index: 'index.html'
}));

// Endpoint de TTS online (Text-to-Speech)
app.get('/tts', (req, res) => {
  const { text = 'Olá' } = req.query;
  const voice = 'Ricardo'; // Voz masculina em português do Brasil (alternativas: 'Vitoria')

  // Validação básica para evitar abuso
  if (!text || text.length > 200) {
    return res.status(400).send('Texto inválido ou muito longo (máx. 200 caracteres).');
  }

  // Codifica o texto para URL
  const encodedText = encodeURIComponent(text);
  const ttsUrl = `https://streamlabs.com/polly/speak?text=${encodedText}&voice=${voice}`;

  // Redireciona para o áudio gerado pelo Streamlabs
  res.redirect(302, ttsUrl);
});

// Qualquer outra rota retorna o index.html (útil se usar rotas no futuro)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
  console.log(`🌐 Acesse em: http://localhost:${PORT}`);
});