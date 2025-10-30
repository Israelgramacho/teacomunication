// Dados das categorias principais
const mainCategories = [
    { 
        id: 'pessoas', 
        title: 'Pessoas', 
        icon: 'fas fa-users', 
        description: 'Família e amigos', 
        color: '#3498db' 
    },
    { 
        id: 'acoes', 
        title: 'Ações', 
        icon: 'fas fa-running', 
        description: 'Atividades diárias', 
        color: '#e74c3c' 
    },
    { 
        id: 'comer', 
        title: 'Comer', 
        icon: 'fas fa-utensils', 
        description: 'Alimentos e refeições', 
        color: '#f39c12' 
    },
    { 
        id: 'beber', 
        title: 'Beber', 
        icon: 'fas fa-glass-whiskey', 
        description: 'Bebidas', 
        color: '#2ecc71' 
    },
    { 
        id: 'lugares', 
        title: 'Lugares', 
        icon: 'fas fa-map-marker-alt', 
        description: 'Localizações', 
        color: '#9b59b6' 
    },
    { 
        id: 'sentimentos', 
        title: 'Sentimentos', 
        icon: 'fas fa-smile', 
        description: 'Emoções', 
        color: '#1abc9c' 
    },
    { 
        id: 'objetos', 
        title: 'Objetos', 
        icon: 'fas fa-box', 
        description: 'Itens do dia a dia', 
        color: '#e67e22' 
    },
    { 
        id: 'animais', 
        title: 'Animais', 
        icon: 'fas fa-paw', 
        description: 'Bichos e pets', 
        color: '#34495e' 
    }
];

// Dados das subcategorias
const subCategories = {
    pessoas: [
        { text: 'Mãe', icon: 'fas fa-female' },
        { text: 'Pai', icon: 'fas fa-male' },
        { text: 'Irmão', icon: 'fas fa-child' },
        { text: 'Irmã', icon: 'fas fa-child' },
        { text: 'Avó', icon: 'fas fa-female' },
        { text: 'Avô', icon: 'fas fa-male' },
        { text: 'Amigo', icon: 'fas fa-user-friends' },
        { text: 'Professor', icon: 'fas fa-chalkboard-teacher' }
    ],
    acoes: [
        { text: 'Comer', icon: 'fas fa-utensils' },
        { text: 'Beber', icon: 'fas fa-glass-whiskey' },
        { text: 'Dormir', icon: 'fas fa-bed' },
        { text: 'Brincar', icon: 'fas fa-gamepad' },
        { text: 'Estudar', icon: 'fas fa-book' },
        { text: 'Trabalhar', icon: 'fas fa-briefcase' },
        { text: 'Caminhar', icon: 'fas fa-walking' },
        { text: 'Correr', icon: 'fas fa-running' }
    ],
    comer: [
        { text: 'Pão', icon: 'fas fa-bread-slice' },
        { text: 'Fruta', icon: 'fas fa-apple-alt' },
        { text: 'Arroz', icon: 'fas fa-seedling' },
        { text: 'Carne', icon: 'fas fa-drumstick-bite' },
        { text: 'Vegetais', icon: 'fas fa-carrot' },
        { text: 'Biscoito', icon: 'fas fa-cookie' },
        { text: 'Chocolate', icon: 'fas fa-candy-cane' },
        { text: 'Sopa', icon: 'fas fa-bowl-food' }
    ],
    beber: [
        { text: 'Água', icon: 'fas fa-tint' },
        { text: 'Suco', icon: 'fas fa-glass-martini-alt' },
        { text: 'Leite', icon: 'fas fa-glass-whiskey' },
        { text: 'Chá', icon: 'fas fa-mug-hot' },
        { text: 'Café', icon: 'fas fa-mug-hot' },
        { text: 'Refrigerante', icon: 'fas fa-wine-bottle' },
        { text: 'Vitamina', icon: 'fas fa-blender' },
        { text: 'Iogurte', icon: 'fas fa-ice-cream' }
    ],
    lugares: [
        { text: 'Casa', icon: 'fas fa-home' },
        { text: 'Escola', icon: 'fas fa-school' },
        { text: 'Parque', icon: 'fas fa-tree' },
        { text: 'Hospital', icon: 'fas fa-hospital' },
        { text: 'Mercado', icon: 'fas fa-shopping-cart' },
        { text: 'Praia', icon: 'fas fa-umbrella-beach' },
        { text: 'Shopping', icon: 'fas fa-store' },
        { text: 'Trabalho', icon: 'fas fa-building' }
    ],
    sentimentos: [
        { text: 'Feliz', icon: 'fas fa-smile' },
        { text: 'Triste', icon: 'fas fa-frown' },
        { text: 'Bravo', icon: 'fas fa-angry' },
        { text: 'Cansado', icon: 'fas fa-tired' },
        { text: 'Assustado', icon: 'fas fa-grimace' },
        { text: 'Surpreso', icon: 'fas fa-grin-surprise' },
        { text: 'Doente', icon: 'fas fa-thermometer' },
        { text: 'Calmo', icon: 'fas fa-meh' }
    ],
    objetos: [
        { text: 'Livro', icon: 'fas fa-book' },
        { text: 'Bola', icon: 'fas fa-volleyball-ball' },
        { text: 'Boneca', icon: 'fas fa-child' },
        { text: 'Carrinho', icon: 'fas fa-car' },
        { text: 'Computador', icon: 'fas fa-laptop' },
        { text: 'Telefone', icon: 'fas fa-mobile-alt' },
        { text: 'Roupa', icon: 'fas fa-tshirt' },
        { text: 'Brinquedo', icon: 'fas fa-puzzle-piece' }
    ],
    animais: [
        { text: 'Cachorro', icon: 'fas fa-dog' },
        { text: 'Gato', icon: 'fas fa-cat' },
        { text: 'Pássaro', icon: 'fas fa-crow' },
        { text: 'Peixe', icon: 'fas fa-fish' },
        { text: 'Cavalo', icon: 'fas fa-horse' },
        { text: 'Vaca', icon: 'fas fa-cow' },
        { text: 'Porco', icon: 'fas fa-piggy-bank' },
        { text: 'Coelho', icon: 'fas fa-rabbit' }
    ]
};

// Classe principal da aplicação
class CommunicationApp {
    constructor() {
        this.currentCategory = null;
        this.currentText = '';
        this.availableVoices = [];
        this.selectedCard = null;
        this.isSpeaking = false;
        
        this.initializeElements();
        this.bindEvents();
        this.loadUserPreferences();
        this.initializeApp();
    }

    initializeElements() {
        this.categoriesContainer = document.getElementById('categoriesContainer');
        this.backButton = document.getElementById('backButton');
        this.voiceSelect = document.getElementById('voiceSelect');
        this.speedControl = document.getElementById('speedControl');
        this.volumeControl = document.getElementById('volumeControl');
        this.speakButton = document.getElementById('speakButton');
        this.statusText = document.getElementById('statusText');
        this.loadingIndicator = document.getElementById('loadingIndicator');
        this.errorMessage = document.getElementById('errorMessage');
        this.errorText = document.getElementById('errorText');
        this.closeError = document.getElementById('closeError');
    }

    bindEvents() {
        this.backButton.addEventListener('click', () => this.goBack());
        this.speakButton.addEventListener('click', () => this.speakCurrentText());
        this.closeError.addEventListener('click', () => this.hideError());
        
        // Eventos de teclado para acessibilidade
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    handleKeyboard(e) {
        if (e.key === 'Escape') {
            if (this.currentCategory) {
                this.goBack();
            }
        } else if (e.key === 'Enter' || e.key === ' ') {
            if (document.activeElement.classList.contains('category-card')) {
                e.preventDefault();
                document.activeElement.click();
            }
        }
    }

    async initializeApp() {
        try {
            this.showLoading('Inicializando aplicativo...');
            await this.loadVoices();
            this.renderMainCategories();
            this.hideLoading();
            this.updateStatus('Pronto para uso');
        } catch (error) {
            this.hideLoading();
            this.showError('Erro ao inicializar aplicativo: ' + error.message);
        }
    }

    showLoading(message = 'Carregando...') {
        if (this.loadingIndicator) {
            this.loadingIndicator.querySelector('p').textContent = message;
            this.loadingIndicator.style.display = 'block';
        }
    }

    hideLoading() {
        if (this.loadingIndicator) {
            this.loadingIndicator.style.display = 'none';
        }
    }

    showError(message) {
        if (this.errorText) {
            this.errorText.textContent = message;
            this.errorMessage.style.display = 'flex';
            
            // Auto-hide após 5 segundos
            setTimeout(() => this.hideError(), 5000);
        }
    }

    hideError() {
        if (this.errorMessage) {
            this.errorMessage.style.display = 'none';
        }
    }

    updateStatus(message) {
        if (this.statusText) {
            this.statusText.textContent = message;
        }
    }

    showSpeakingIndicator(text) {
        // Remove indicador anterior se existir
        const existing = document.querySelector('.speaking-indicator');
        if (existing) {
            existing.remove();
        }

        const indicator = document.createElement('div');
        indicator.className = 'speaking-indicator';
        indicator.innerHTML = `
            <i class="fas fa-volume-up" aria-hidden="true"></i>
            <span>Falando: "${text}"</span>
        `;
        document.body.appendChild(indicator);
    }

    hideSpeakingIndicator() {
        const indicator = document.querySelector('.speaking-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    createCategoryCard(category) {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.setAttribute('role', 'gridcell');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `${category.title}: ${category.description}`);
        
        card.innerHTML = `
            <div class="card-icon" style="background: linear-gradient(to bottom right, ${category.color}, ${this.darkenColor(category.color, 20)})">
                <i class="${category.icon}" aria-hidden="true"></i>
            </div>
            <div class="card-content">
                <h3>${category.title}</h3>
                <p>${category.description}</p>
            </div>
        `;
        
        card.addEventListener('click', () => this.showSubCategories(category.id));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.showSubCategories(category.id);
            }
        });
        
        return card;
    }

    createSubCategoryCard(item) {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.setAttribute('role', 'gridcell');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Selecionar: ${item.text}`);
        
        card.innerHTML = `
            <div class="card-icon" style="background: linear-gradient(to bottom right, #95a5a6, #7f8c8d)">
                <i class="${item.icon}" aria-hidden="true"></i>
            </div>
            <div class="card-content">
                <h3>${item.text}</h3>
            </div>
        `;
        
        card.addEventListener('click', () => this.selectItem(item.text, card));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.selectItem(item.text, card);
            }
        });
        
        return card;
    }

    selectItem(text, card) {
        // Remove seleção anterior
        if (this.selectedCard) {
            this.selectedCard.classList.remove('selected');
        }
        
        // Seleciona novo item
        this.selectedCard = card;
        card.classList.add('selected');
        this.currentText = text;
        
        // Fala automaticamente
        this.speakText(text);
    }

    darkenColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) - amt;
        const G = (num >> 8 & 0x00FF) - amt;
        const B = (num & 0x0000FF) - amt;
        
        return `#${(
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
            (B < 255 ? (B < 1 ? 0 : B) : 255)
        ).toString(16).slice(1)}`;
    }

    showSubCategories(categoryId) {
        try {
            this.currentCategory = categoryId;
            this.categoriesContainer.innerHTML = '';
            this.backButton.style.display = 'block';
            this.selectedCard = null;
            
            const subItems = subCategories[categoryId];
            if (!subItems) {
                throw new Error('Categoria não encontrada');
            }
            
            subItems.forEach(item => {
                const card = this.createSubCategoryCard(item);
                this.categoriesContainer.appendChild(card);
            });
            
            this.updateStatus(`Categoria: ${mainCategories.find(c => c.id === categoryId)?.title}`);
        } catch (error) {
            this.showError('Erro ao carregar subcategorias: ' + error.message);
        }
    }

    goBack() {
        this.currentCategory = null;
        this.currentText = '';
        this.selectedCard = null;
        this.backButton.style.display = 'none';
        this.renderMainCategories();
        this.updateStatus('Pronto para uso');
    }

    renderMainCategories() {
        this.categoriesContainer.innerHTML = '';
        mainCategories.forEach(category => {
            const card = this.createCategoryCard(category);
            this.categoriesContainer.appendChild(card);
        });
    }

    speakText(text) {
        if (!text) {
            this.showError('Nenhum texto selecionado');
            return;
        }
        
        if (!('speechSynthesis' in window)) {
            this.showError('Seu navegador não suporta síntese de voz');
            return;
        }
        
        try {
            // Cancelar qualquer fala anterior
            speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(text);
            
            // Configurar voz
            const selectedVoice = this.voiceSelect.value;
            if (selectedVoice && this.availableVoices.length > 0) {
                const voice = this.availableVoices.find(v => v.name === selectedVoice);
                if (voice) {
                    utterance.voice = voice;
                }
            }
            
            // Configurar velocidade e volume com validação
            utterance.rate = Math.max(0.1, Math.min(10, parseFloat(this.speedControl.value) || 1));
            utterance.volume = Math.max(0, Math.min(1, parseFloat(this.volumeControl.value) || 1));
            
            // Configurar idioma
            utterance.lang = 'pt-BR';
            
            // Feedback visual
            this.showSpeakingIndicator(text);
            this.isSpeaking = true;
            
            utterance.onstart = () => {
                this.updateStatus(`Falando: "${text}"`);
            };
            
            utterance.onend = () => {
                this.updateStatus('Pronto para uso');
                this.hideSpeakingIndicator();
                this.isSpeaking = false;
            };
            
            utterance.onerror = (event) => {
                this.showError(`Erro na síntese de voz: ${event.error}`);
                this.hideSpeakingIndicator();
                this.isSpeaking = false;
            };
            
            speechSynthesis.speak(utterance);
        } catch (error) {
            this.showError('Erro inesperado na síntese de voz');
            console.error('Speech synthesis error:', error);
            this.isSpeaking = false;
        }
    }

    speakCurrentText() {
        if (this.currentText) {
            this.speakText(this.currentText);
        } else {
            this.showError('Selecione um item primeiro!');
        }
    }

    async loadVoices() {
        return new Promise((resolve, reject) => {
            if (!('speechSynthesis' in window)) {
                this.voiceSelect.innerHTML = '<option value="">API não suportada</option>';
                reject(new Error('Speech synthesis not supported'));
                return;
            }
            
            const loadVoicesInternal = () => {
                this.availableVoices = speechSynthesis.getVoices();
                
                if (this.availableVoices.length === 0) {
                    setTimeout(loadVoicesInternal, 100);
                    return;
                }
                
                try {
                    // Filtrar vozes em português
                    const ptVoices = this.availableVoices.filter(voice => 
                        voice.lang.includes('pt') || voice.lang.includes('pt-BR')
                    );
                    
                    this.voiceSelect.innerHTML = '';
                    
                    if (ptVoices.length > 0) {
                        ptVoices.forEach(voice => {
                            const option = document.createElement('option');
                            option.value = voice.name;
                            option.textContent = `${voice.name} (${voice.lang})`;
                            this.voiceSelect.appendChild(option);
                        });
                    } else {
                        // Se não houver vozes em português, mostrar todas
                        this.availableVoices.forEach(voice => {
                            const option = document.createElement('option');
                            option.value = voice.name;
                            option.textContent = `${voice.name} (${voice.lang})`;
                            this.voiceSelect.appendChild(option);
                        });
                    }
                    
                    resolve();
                } catch (error) {
                    reject(error);
                }
            };
            
            loadVoicesInternal();
            
            // Timeout de segurança
            setTimeout(() => {
                if (this.availableVoices.length === 0) {
                    reject(new Error('Timeout ao carregar vozes'));
                }
            }, 5000);
        });
    }

    loadUserPreferences() {
        try {
            const savedSpeed = localStorage.getItem('communicationApp_speed');
            const savedVolume = localStorage.getItem('communicationApp_volume');
            const savedVoice = localStorage.getItem('communicationApp_voice');
            
            if (savedSpeed) this.speedControl.value = savedSpeed;
            if (savedVolume) this.volumeControl.value = savedVolume;
            if (savedVoice) this.voiceSelect.value = savedVoice;
        } catch (error) {
            console.warn('Erro ao carregar preferências:', error);
        }
    }

    saveUserPreferences() {
        try {
            localStorage.setItem('communicationApp_speed', this.speedControl.value);
            localStorage.setItem('communicationApp_volume', this.volumeControl.value);
            localStorage.setItem('communicationApp_voice', this.voiceSelect.value);
        } catch (error) {
            console.warn('Erro ao salvar preferências:', error);
        }
    }
}

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
    try {
        const app = new CommunicationApp();
        
        // Salvar preferências quando mudarem
        document.getElementById('speedControl').addEventListener('change', () => app.saveUserPreferences());
        document.getElementById('volumeControl').addEventListener('change', () => app.saveUserPreferences());
        document.getElementById('voiceSelect').addEventListener('change', () => app.saveUserPreferences());
        
        // Evento para recarregar vozes se necessário
        if ('speechSynthesis' in window) {
            speechSynthesis.onvoiceschanged = () => app.loadVoices();
        }
        
    } catch (error) {
        console.error('Erro ao inicializar aplicação:', error);
        document.body.innerHTML = `
            <div style="text-align: center; padding: 50px; color: white;">
                <h2>Erro ao carregar aplicação</h2>
                <p>Por favor, recarregue a página ou tente novamente mais tarde.</p>
                <button onclick="location.reload()" style="padding: 10px 20px; margin-top: 20px; border: none; border-radius: 5px; background: #3498db; color: white; cursor: pointer;">
                    Recarregar Página
                </button>
            </div>
        `;
    }
});
