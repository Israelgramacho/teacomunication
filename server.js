const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

app.use(express.static('.', {
  extensions: ['html'],
  index: 'index.html'
}));

// Endpoint TTS usando Google Translate TTS (funciona em muitos navegadores)
app.get('/tts', (req, res) => {
  const { text = 'Olá' } = req.query;
  const voice = 'pt-BR'; // Idioma português do Brasil

  if (!text || text.length > 200) {
    return res.status(400).send('Texto inválido ou muito longo.');
  }

  // URL do Google Translate TTS (não oficial, mas funciona em muitos casos)
  const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${voice}&q=${encodeURIComponent(text)}&client=tw-ob`;

  // Redireciona para o áudio
  res.redirect(302, ttsUrl);
});

// Qualquer rota retorna index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
