// Dados das categorias principais
const mainCategories = [];

// Dados das subcategorias padrão (mantido para compatibilidade com categorias customizadas que possam usar os mesmos IDs)
const subCategories = {};

// Mapeamento de palavras-chave para ícones Font Awesome
const iconKeywordMap = [
    { keywords: ['pessoas', 'gente', 'família', 'familia', 'amigos', 'pessoal', 'parentes', 'parentesco'], icon: 'fas fa-users' },
    { keywords: ['ações', 'acoes', 'atividades', 'correr', 'andar', 'mover', 'movimento', 'exercício', 'exercicio'], icon: 'fas fa-running' },
    { keywords: ['comer', 'comida', 'alimentação', 'alimentacao', 'refeição', 'refeicao', 'alimento', 'prato', 'lanche'], icon: 'fas fa-utensils' },
    { keywords: ['beber', 'bebida', 'água', 'agua', 'líquido', 'liquido', 'suco', 'refrigerante', 'café', 'cafe'], icon: 'fas fa-glass-whiskey' },
    { keywords: ['lugares', 'lugar', 'local', 'localização', 'localizacao', 'endereço', 'endereco', 'localidade'], icon: 'fas fa-map-marker-alt' },
    { keywords: ['sentimentos', 'sentimento', 'emoções', 'emocoes', 'emoção', 'emocao', 'humor', 'feliz', 'triste'], icon: 'fas fa-smile' },
    { keywords: ['objetos', 'objeto', 'item', 'itens', 'coisa', 'coisas', 'artigo', 'artigos'], icon: 'fas fa-box' },
    { keywords: ['animais', 'animal', 'bichos', 'bicho', 'pet', 'pets', 'cachorro', 'gato'], icon: 'fas fa-paw' },
    { keywords: ['brincar', 'brincadeira', 'jogo', 'jogos', 'diversão', 'diversao', 'lazer'], icon: 'fas fa-gamepad' },
    { keywords: ['estudar', 'estudo', 'escola', 'aprender', 'ensino', 'educação', 'educacao'], icon: 'fas fa-book' },
    { keywords: ['dormir', 'sono', 'cama', 'descanso', 'repouso'], icon: 'fas fa-bed' },
    { keywords: ['trabalhar', 'trabalho', 'trabalho', 'emprego', 'escritório', 'escritorio'], icon: 'fas fa-briefcase' },
    { keywords: ['casa', 'lar', 'residência', 'residencia', 'moradia', 'habitação', 'habitacao'], icon: 'fas fa-home' },
    { keywords: ['hospital', 'médico', 'medico', 'saúde', 'saude', 'clínica', 'clinica'], icon: 'fas fa-hospital' },
    { keywords: ['música', 'musica', 'som', 'canto', 'canção', 'cancao'], icon: 'fas fa-music' },
    { keywords: ['esporte', 'esportes', 'futebol', 'natação', 'natacao', 'ginástica', 'ginastica'], icon: 'fas fa-futbol' },
    { keywords: ['natureza', 'planta', 'plantas', 'árvore', 'arvore', 'flor', 'flores'], icon: 'fas fa-tree' },
    { keywords: ['transporte', 'carro', 'ônibus', 'onibus', 'avião', 'aviao', 'veículo', 'veiculo'], icon: 'fas fa-car' }
];

// Função para detectar ícone baseado no título
function detectIconByTitle(title) {
    if (!title) return 'fas fa-star';
    
    const titleLower = title.toLowerCase().trim();
    
    // Busca por correspondência de palavras-chave
    for (const map of iconKeywordMap) {
        for (const keyword of map.keywords) {
            if (titleLower.includes(keyword)) {
                return map.icon;
            }
        }
    }
    
    // Retorna ícone padrão se não encontrar correspondência
    return 'fas fa-star';
}

// Função para gerar cor aleatória
function generateRandomColor() {
    // Gera valores RGB que garantem bom contraste (não muito claros nem muito escuros)
    // Limitando entre 50-200 para evitar cores muito claras ou muito escuras
    const r = Math.floor(Math.random() * 150) + 50; // 50-200
    const g = Math.floor(Math.random() * 150) + 50; // 50-200
    const b = Math.floor(Math.random() * 150) + 50; // 50-200
    
    // Converte para hexadecimal
    const toHex = (n) => {
        const hex = n.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Classe principal da aplicação
class CommunicationApp {
    constructor() {
        this.currentCategory = null;
        this.currentText = '';
        this.availableVoices = [];
        this.selectedCard = null;
        this.isSpeaking = false;
        this.volume = 1.0; // Volume padrão
        
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
        this.toneControl = document.getElementById('toneControl');
        this.settingsButton = document.getElementById('settingsButton');
        this.statusText = document.getElementById('statusText');
        this.loadingIndicator = document.getElementById('loadingIndicator');
        this.errorMessage = document.getElementById('errorMessage');
        this.errorText = document.getElementById('errorText');
        this.closeError = document.getElementById('closeError');
        this.createCategoryBtn = document.getElementById('createCategoryBtn');
        this.toggleControlsBtn = document.getElementById('toggleControlsBtn');
        this.hideControlsBtn = document.getElementById('hideControlsBtn');
        this.voiceControls = document.getElementById('voiceControls');
        this.controlsHideTimer = null;
        this.toggleCreateCategoryBtn = document.getElementById('toggleCreateCategoryBtn');
        this.hideCreateCategoryBtn = document.getElementById('hideCreateCategoryBtn');
        this.createCategoryWrapper = document.getElementById('createCategoryWrapper');
        this.createCategoryHideTimer = null;
        this.toggleDeleteModeBtn = document.getElementById('toggleDeleteModeBtn');
        this.toggleDeleteSubcategoryBtn = document.getElementById('toggleDeleteSubcategoryBtn');
        this.deleteSelectedCategoriesBtn = document.getElementById('deleteSelectedCategoriesBtn');
        this.deleteSelectedSubcategoriesBtn = document.getElementById('deleteSelectedSubcategoriesBtn');
        this.selectedCategoriesCount = document.getElementById('selectedCategoriesCount');
        this.selectedSubcategoriesCount = document.getElementById('selectedSubcategoriesCount');
        this.deleteMode = false;
        this.deleteSubcategoryMode = false;
    }

    bindEvents() {
        if (this.backButton) {
            this.backButton.addEventListener('click', () => this.goBack());
        }
        if (this.closeError) {
            this.closeError.addEventListener('click', () => this.hideError());
        }
        if (this.createCategoryBtn) {
            // Função dinâmica será definida por updateCreateButton()
            this.createCategoryBtn.addEventListener('click', () => {
                if (this.currentCategory === null) {
                    this.openCreateCategoryModal();
                    this.resetCreateCategoryHideTimer();
                } else {
                    this.openCreateSpeechModal();
                    this.resetCreateCategoryHideTimer();
                }
            });
        }
        if (this.settingsButton) {
            this.settingsButton.addEventListener('click', () => this.openSettingsModal());
        }
        if (this.toggleControlsBtn) {
            this.toggleControlsBtn.addEventListener('click', () => this.showVoiceControls());
        }
        if (this.hideControlsBtn) {
            this.hideControlsBtn.addEventListener('click', () => this.hideVoiceControls());
        }
        if (this.toggleCreateCategoryBtn) {
            this.toggleCreateCategoryBtn.addEventListener('click', () => this.showCreateCategoryBtn());
        }
        if (this.hideCreateCategoryBtn) {
            this.hideCreateCategoryBtn.addEventListener('click', () => this.hideCreateCategoryButton());
        }
        if (this.toggleDeleteModeBtn) {
            this.toggleDeleteModeBtn.addEventListener('click', () => this.toggleDeleteMode());
        }
        if (this.toggleDeleteSubcategoryBtn) {
            this.toggleDeleteSubcategoryBtn.addEventListener('click', () => this.toggleDeleteSubcategoryMode());
        }
        if (this.deleteSelectedCategoriesBtn) {
            this.deleteSelectedCategoriesBtn.addEventListener('click', () => this.handleDeleteSelectedCategories());
        }
        if (this.deleteSelectedSubcategoriesBtn) {
            this.deleteSelectedSubcategoriesBtn.addEventListener('click', () => this.handleDeleteSelectedSubcategories());
        }
        // Eventos de teclado para acessibilidade
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    toggleDeleteSubcategoryMode() {
        this.deleteSubcategoryMode = !this.deleteSubcategoryMode;
        
        if (this.deleteSubcategoryMode) {
            this.toggleDeleteSubcategoryBtn.style.background = 'rgba(231, 76, 60, 0.2)';
            this.toggleDeleteSubcategoryBtn.style.borderColor = '#e74c3c';
            this.toggleDeleteSubcategoryBtn.style.color = '#e74c3c';
            this.updateStatus('Modo exclusão ativado - Marque as falas para excluir');
        } else {
            this.toggleDeleteSubcategoryBtn.style.background = 'rgba(231, 76, 60, 0.1)';
            this.toggleDeleteSubcategoryBtn.style.borderColor = 'rgba(231, 76, 60, 0.3)';
            this.toggleDeleteSubcategoryBtn.style.color = '#e74c3c';
            this.updateStatus('Pronto para uso');
            // Ocultar botão de excluir selecionados ao desativar modo
            if (this.deleteSelectedSubcategoriesBtn) {
                this.deleteSelectedSubcategoriesBtn.style.display = 'none';
            }
        }
        
        // Recarrega subcategorias para mostrar/ocultar checkboxes
        if (this.currentCategory !== null) {
            this.showSubCategories(this.currentCategory);
            // Atualiza botão após renderizar (com pequeno delay para garantir que os checkboxes foram criados)
            setTimeout(() => this.updateDeleteSelectedButton(), 100);
        } else {
            // Atualiza botão de excluir selecionados
            this.updateDeleteSelectedButton();
        }
    }

    toggleDeleteMode() {
        this.deleteMode = !this.deleteMode;
        
        if (this.deleteMode) {
            this.toggleDeleteModeBtn.style.background = 'rgba(231, 76, 60, 0.2)';
            this.toggleDeleteModeBtn.style.borderColor = '#e74c3c';
            this.toggleDeleteModeBtn.style.color = '#e74c3c';
            this.updateStatus('Modo exclusão ativado - Marque as categorias para excluir');
        } else {
            this.toggleDeleteModeBtn.style.background = 'rgba(231, 76, 60, 0.1)';
            this.toggleDeleteModeBtn.style.borderColor = 'rgba(231, 76, 60, 0.3)';
            this.toggleDeleteModeBtn.style.color = '#e74c3c';
            this.updateStatus('Pronto para uso');
            // Ocultar botão de excluir selecionados ao desativar modo
            if (this.deleteSelectedCategoriesBtn) {
                this.deleteSelectedCategoriesBtn.style.display = 'none';
            }
        }
        
        // Recarrega categorias para mostrar/ocultar checkboxes
        if (this.currentCategory === null) {
            this.renderMainCategories();
            // Atualiza botão após renderizar (com pequeno delay para garantir que os checkboxes foram criados)
            setTimeout(() => this.updateDeleteSelectedButton(), 100);
        } else {
            // Atualiza botão de excluir selecionados
            this.updateDeleteSelectedButton();
        }
    }

    showCreateCategoryBtn() {
        if (this.createCategoryWrapper) {
            this.createCategoryWrapper.classList.remove('create-category-hidden');
            localStorage.setItem('createCategoryBtnVisible', 'true');
            this.resetCreateCategoryHideTimer();
        }
    }

    hideCreateCategoryButton() {
        if (this.createCategoryWrapper) {
            this.createCategoryWrapper.classList.add('create-category-hidden');
            localStorage.setItem('createCategoryBtnVisible', 'false');
            if (this.createCategoryHideTimer) {
                clearTimeout(this.createCategoryHideTimer);
                this.createCategoryHideTimer = null;
            }
        }
    }

    resetCreateCategoryHideTimer() {
        if (this.createCategoryHideTimer) {
            clearTimeout(this.createCategoryHideTimer);
        }
        
        const autoHide = localStorage.getItem('createCategoryAutoHide');
        if (autoHide !== 'false' && !this.createCategoryWrapper.classList.contains('create-category-hidden')) {
            this.createCategoryHideTimer = setTimeout(() => {
                this.hideCreateCategoryButton();
            }, 8000);
        }
    }

    showVoiceControls() {
        if (this.voiceControls) {
            this.voiceControls.classList.remove('controls-hidden');
            // Salvar preferência de mostrar controles
            localStorage.setItem('voiceControlsVisible', 'true');
            // Resetar timer de auto-ocultação
            this.resetControlsHideTimer();
        }
    }

    hideVoiceControls() {
        if (this.voiceControls) {
            this.voiceControls.classList.add('controls-hidden');
            // Salvar preferência de ocultar controles
            localStorage.setItem('voiceControlsVisible', 'false');
            // Cancelar timer
            if (this.controlsHideTimer) {
                clearTimeout(this.controlsHideTimer);
                this.controlsHideTimer = null;
            }
        }
    }

    resetControlsHideTimer() {
        // Cancela timer anterior se existir
        if (this.controlsHideTimer) {
            clearTimeout(this.controlsHideTimer);
        }
        
        // Se controles estão visíveis e tem preferência de auto-ocultar, configura timer
        const autoHide = localStorage.getItem('voiceControlsAutoHide');
        if (autoHide !== 'false' && !this.voiceControls.classList.contains('controls-hidden')) {
            this.controlsHideTimer = setTimeout(() => {
                this.hideVoiceControls();
            }, 8000); // Auto-oculta após 8 segundos sem uso
        }
    }

    updateCreateButton() {
        if (!this.createCategoryBtn) return;
        
        if (this.currentCategory === null) {
            // Tela principal: mostrar "Criar Categoria"
            this.createCategoryBtn.innerHTML = '<i class="fas fa-plus-circle" style="font-size: 1.2em; margin-right: 6px;"></i> Criar Categoria';
            this.createCategoryBtn.setAttribute('aria-label', 'Criar nova categoria');
            // Ocultar botão de exclusão de subcategorias na tela principal
            if (this.toggleDeleteSubcategoryBtn) {
                this.toggleDeleteSubcategoryBtn.style.display = 'none';
            }
            if (this.deleteSelectedSubcategoriesBtn) {
                this.deleteSelectedSubcategoriesBtn.style.display = 'none';
            }
            // Mostrar botão de exclusão de categorias na tela principal
            if (this.toggleDeleteModeBtn) {
                this.toggleDeleteModeBtn.style.display = 'flex';
            }
            // Mostrar botão toggle de controles de voz na tela principal
            if (this.toggleControlsBtn) {
                this.toggleControlsBtn.style.display = 'flex';
            }
        } else {
            // Dentro de categoria: mostrar "Criar Fala"
            this.createCategoryBtn.innerHTML = '<i class="fas fa-microphone" style="font-size: 1.2em; margin-right: 6px;"></i> Criar Fala';
            this.createCategoryBtn.setAttribute('aria-label', 'Criar nova fala');
            // Mostrar botão de exclusão de subcategorias quando dentro de uma categoria
            if (this.toggleDeleteSubcategoryBtn) {
                this.toggleDeleteSubcategoryBtn.style.display = 'flex';
            }
            // Ocultar botão de exclusão de categorias quando dentro de uma categoria
            if (this.toggleDeleteModeBtn) {
                this.toggleDeleteModeBtn.style.display = 'none';
            }
            if (this.deleteSelectedCategoriesBtn) {
                this.deleteSelectedCategoriesBtn.style.display = 'none';
            }
            // Ocultar botão toggle de controles de voz dentro de categoria
            if (this.toggleControlsBtn) {
                this.toggleControlsBtn.style.display = 'none';
            }
        }
    }

    updateDeleteSelectedButton() {
        if (this.deleteMode && this.currentCategory === null) {
            // Modo exclusão de categorias ativo
            const selected = this.getSelectedCategories();
            const count = selected.length;
            
            if (this.deleteSelectedCategoriesBtn && this.selectedCategoriesCount) {
                if (count > 0) {
                    this.deleteSelectedCategoriesBtn.style.display = 'flex';
                    this.selectedCategoriesCount.textContent = count;
                } else {
                    this.deleteSelectedCategoriesBtn.style.display = 'none';
                }
            }
        }
        
        if (this.deleteSubcategoryMode && this.currentCategory !== null) {
            // Modo exclusão de subcategorias ativo
            const selected = this.getSelectedSubcategories();
            const count = selected.length;
            
            if (this.deleteSelectedSubcategoriesBtn && this.selectedSubcategoriesCount) {
                if (count > 0) {
                    this.deleteSelectedSubcategoriesBtn.style.display = 'flex';
                    this.selectedSubcategoriesCount.textContent = count;
                } else {
                    this.deleteSelectedSubcategoriesBtn.style.display = 'none';
                }
            }
        }
    }

    getSelectedCategories() {
        const selected = [];
        const checkboxes = document.querySelectorAll('.delete-checkbox:checked');
        checkboxes.forEach(checkbox => {
            const categoryId = checkbox.getAttribute('data-category-id');
            if (categoryId) {
                selected.push(categoryId);
            }
        });
        return selected;
    }

    getSelectedSubcategories() {
        const selected = [];
        const checkboxes = document.querySelectorAll('.delete-subcategory-checkbox:checked');
        checkboxes.forEach(checkbox => {
            const itemText = checkbox.getAttribute('data-item-text');
            const itemIndex = checkbox.getAttribute('data-item-index');
            if (itemText !== null && itemIndex !== null) {
                const indexValue = parseInt(itemIndex);
                selected.push({
                    text: itemText,
                    index: !isNaN(indexValue) ? indexValue : null
                });
            }
        });
        return selected;
    }

    handleDeleteSelectedCategories() {
        const selected = this.getSelectedCategories();
        if (selected.length === 0) {
            this.showError('Nenhuma categoria selecionada');
            return;
        }
        
        // Busca títulos das categorias para mostrar na confirmação
        const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
        const categoriesToDelete = selected.map(id => {
            const cat = customCategories.find(c => c.id === id);
            return { id, title: cat ? cat.title : id };
        });
        
        this.showDeleteConfirmationMultiple(categoriesToDelete);
    }

    handleDeleteSelectedSubcategories() {
        const selected = this.getSelectedSubcategories();
        if (selected.length === 0) {
            this.showError('Nenhuma fala selecionada');
            return;
        }
        
        this.showDeleteSubcategoryConfirmationMultiple(selected);
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
            this.initializeExampleData(); // Cria categorias e falas de exemplo se for primeira vez
            this.renderMainCategories();
            this.hideLoading();
            this.updateStatus('Pronto para uso');
        } catch (error) {
            this.hideLoading();
            this.showError('Erro ao inicializar aplicativo: ' + error.message);
        }
    }

    initializeExampleData() {
        // Verifica se já existem categorias (não é primeira vez)
        const existingCategories = localStorage.getItem('customCategories');
        const existingSpeeches = localStorage.getItem('customSpeeches');
        
        // Se já existem dados, não cria exemplos
        if (existingCategories && JSON.parse(existingCategories).length > 0) {
            return;
        }

        // Cria 5 categorias de exemplo com suas falas
        const exampleCategories = [
            {
                id: 'custom_casa',
                title: 'Casa',
                icon: 'fas fa-home',
                color: '#3498db'
            },
            {
                id: 'custom_escola',
                title: 'Escola',
                icon: 'fas fa-book',
                color: '#e74c3c'
            },
            {
                id: 'custom_necessidades',
                title: 'Necessidades',
                icon: 'fas fa-heart',
                color: '#2ecc71'
            },
            {
                id: 'custom_emoções',
                title: 'Emoções',
                icon: 'fas fa-smile',
                color: '#f39c12'
            },
            {
                id: 'custom_brincadeiras',
                title: 'Brincadeiras',
                icon: 'fas fa-gamepad',
                color: '#9b59b6'
            }
        ];

        const exampleSpeeches = {
            'custom_casa': [
                { text: 'Quarto', icon: 'fas fa-bed' },
                { text: 'Banheiro', icon: 'fas fa-bath' },
                { text: 'Cozinha', icon: 'fas fa-utensils' },
                { text: 'Sala', icon: 'fas fa-couch' }
            ],
            'custom_escola': [
                { text: 'Aula', icon: 'fas fa-chalkboard' },
                { text: 'Recreio', icon: 'fas fa-clock' },
                { text: 'Lanche', icon: 'fas fa-apple-alt' },
                { text: 'Casa', icon: 'fas fa-home' }
            ],
            'custom_necessidades': [
                { text: 'Água', icon: 'fas fa-tint' },
                { text: 'Comida', icon: 'fas fa-utensils' },
                { text: 'Banheiro', icon: 'fas fa-restroom' },
                { text: 'Descanso', icon: 'fas fa-bed' }
            ],
            'custom_emoções': [
                { text: 'Feliz', icon: 'fas fa-smile' },
                { text: 'Triste', icon: 'fas fa-frown' },
                { text: 'Com fome', icon: 'fas fa-bread-slice' },
                { text: 'Cansado', icon: 'fas fa-tired' }
            ],
            'custom_brincadeiras': [
                { text: 'Brincar', icon: 'fas fa-gamepad' },
                { text: 'Bola', icon: 'fas fa-volleyball-ball' },
                { text: 'Desenhar', icon: 'fas fa-paint-brush' },
                { text: 'Correr', icon: 'fas fa-running' }
            ]
        };

        // Salva as categorias e falas no localStorage
        localStorage.setItem('customCategories', JSON.stringify(exampleCategories));
        localStorage.setItem('customSpeeches', JSON.stringify(exampleSpeeches));
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
        const ariaLabel = category.description ? `${category.title}: ${category.description}` : category.title;
        card.setAttribute('aria-label', ariaLabel);
        
        // Monta o conteúdo do parágrafo apenas se houver descrição ou tempo
        let descriptionHtml = '';
        if (category.description || category.tempo) {
            descriptionHtml = `<p>${category.description || ''}${category.tempo ? `${category.description ? '<br/>' : ''}<span style='font-size:0.9em;color:#0288d1;'>⏱ ${category.tempo}s</span>` : ''}</p>`;
        }
        
        // Checkbox para modo exclusão (apenas categorias customizadas)
        const isCustom = category.id && category.id.startsWith('custom_');
        const checkboxHtml = (this.deleteMode && isCustom) ? `
            <div class="delete-checkbox-wrapper">
                <input type="checkbox" class="delete-checkbox" data-category-id="${category.id}" id="delete-${category.id}" />
                <label for="delete-${category.id}" class="delete-checkbox-label">Excluir</label>
            </div>
        ` : '';
        
        // Se tiver foto, usa a mesma estrutura do card de subcategoria
        if (category.photo) {
            card.innerHTML = `
                ${checkboxHtml}
                <div class="card-icon-with-image">
                    <img src="${category.photo}" alt="${category.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px 16px 0 0;" />
                </div>
                <div class="card-content">
                    <h3 class='cat-title-editable' data-cat-id='${category.id}' style='cursor:${category.id.startsWith('custom_') ? 'pointer' : 'auto'};'>${category.title}</h3>
                    ${descriptionHtml}
                </div>
            `;
        } else {
            // Comportamento padrão com ícone
            const iconHtml = category.icon ? `<i class="${category.icon}" aria-hidden="true"></i>` : '';
            card.innerHTML = `
                ${checkboxHtml}
                <div class="card-icon" style="background: linear-gradient(to bottom right, ${category.color}, ${this.darkenColor(category.color, 20)})">
                    ${iconHtml}
                </div>
                <div class="card-content">
                    <h3 class='cat-title-editable' data-cat-id='${category.id}' style='cursor:${category.id.startsWith('custom_') ? 'pointer' : 'auto'};'>${category.title}</h3>
                    ${descriptionHtml}
                </div>
            `;
        }
        
        // Se modo exclusão ativo, não abre categoria ao clicar
        if (!this.deleteMode) {
            card.addEventListener('click', () => this.showSubCategories(category.id));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.showSubCategories(category.id);
                }
            });
        } else if (isCustom) {
            // No modo exclusão, checkboxes apenas marcam/desmarcam sem ação imediata
            const checkbox = card.querySelector('.delete-checkbox');
            if (checkbox) {
                checkbox.addEventListener('change', () => {
                    this.updateDeleteSelectedButton();
                });
            }
        }
        
        // Evento duplo clique para editar apenas customizadas (desabilitado no modo exclusão)
        if (isCustom && !this.deleteMode) {
            setTimeout(()=>{
              const h3 = card.querySelector('.cat-title-editable');
              if(h3) {
                h3.ondblclick = (ev)=>{
                  ev.stopPropagation();
                  this.openEditCategoryModal(category.id);
                };
                h3.title = 'Clique duplo para editar';
              }
            },0);
        }
        return card;
    }

    async exportCardAsImage(text, categoryColor, icon) {
        return new Promise((resolve, reject) => {
            if (typeof html2canvas === 'undefined') {
                reject(new Error('html2canvas não está disponível'));
                return;
            }

            // Cria card temporário para captura
            const tempCard = document.createElement('div');
            tempCard.style.position = 'absolute';
            tempCard.style.left = '-9999px';
            tempCard.style.top = '0';
            tempCard.style.width = '220px';
            tempCard.style.height = '180px';
            tempCard.style.display = 'flex';
            tempCard.style.flexDirection = 'column';
            tempCard.style.background = 'white';
            tempCard.style.borderRadius = '16px';
            tempCard.style.overflow = 'hidden';
            tempCard.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            tempCard.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
            
            const iconColor = categoryColor || '#95a5a6';
            const darkColor = this.darkenColor(iconColor, 20);
            
            tempCard.innerHTML = `
                <div style="flex: 1; display: flex; align-items: center; justify-content: center; background: linear-gradient(to bottom right, ${iconColor}, ${darkColor}); padding: 20px; min-height: 120px;">
                    <i class="${icon || 'fas fa-comment'}" style="font-size: 3rem; color: white; display: inline-block;" aria-hidden="true"></i>
                </div>
                <div style="padding: 16px; text-align: center; background: white; min-height: 60px; display: flex; align-items: center; justify-content: center;">
                    <h3 style="margin: 0; font-size: 1.25rem; font-weight: 600; color: #333; word-wrap: break-word; overflow-wrap: break-word; line-height: 1.4;">${text}</h3>
                </div>
            `;
            
            document.body.appendChild(tempCard);
            
            // Aguarda mais tempo para garantir que Font Awesome e estilos sejam renderizados
            setTimeout(() => {
                html2canvas(tempCard, {
                    backgroundColor: '#ffffff',
                    scale: 2,
                    logging: false,
                    useCORS: true,
                    allowTaint: true,
                    width: 220,
                    height: 180
                }).then(canvas => {
                    const imageData = canvas.toDataURL('image/png');
                    document.body.removeChild(tempCard);
                    resolve(imageData);
                }).catch(error => {
                    if (document.body.contains(tempCard)) {
                        document.body.removeChild(tempCard);
                    }
                    reject(error);
                });
            }, 300);
        });
    }

    createSubCategoryCard(item, itemIndex = null) {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.setAttribute('role', 'gridcell');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Selecionar: ${item.text}`);
        
        // Só mostra checkbox se modo exclusão estiver ativo E o item não for padrão (itemIndex !== null)
        // Itens padrão não podem ser excluídos
        const canDelete = this.deleteSubcategoryMode && itemIndex !== null;
        const checkboxHtml = canDelete ? `
            <div class="delete-checkbox-wrapper">
                <input type="checkbox" class="delete-subcategory-checkbox" data-item-text="${item.text}" data-item-index="${itemIndex}" id="delete-sub-${itemIndex}-${item.text.replace(/[^a-zA-Z0-9]/g, '')}" />
                <label for="delete-sub-${itemIndex}-${item.text.replace(/[^a-zA-Z0-9]/g, '')}" class="delete-checkbox-label">Excluir</label>
            </div>
        ` : '';
        
        // Se tiver imagem exportada, usar ela ao invés de ícone
        if (item.image) {
            card.innerHTML = `
                ${checkboxHtml}
                <div class="card-icon-with-image">
                    <img src="${item.image}" alt="${item.text}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px 16px 0 0;" />
                </div>
                <div class="card-content">
                    <h3>${item.text}</h3>
                </div>
            `;
        } else {
            // Comportamento padrão com ícone
            card.innerHTML = `
                ${checkboxHtml}
                <div class="card-icon" style="background: linear-gradient(to bottom right, #95a5a6, #7f8c8d)">
                    <i class="${item.icon}" aria-hidden="true"></i>
                </div>
                <div class="card-content">
                    <h3>${item.text}</h3>
                </div>
            `;
        }
        
        // Se modo exclusão ativo E item pode ser excluído, não seleciona item ao clicar
        if (!canDelete) {
            card.addEventListener('click', () => this.selectItem(item.text, card));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.selectItem(item.text, card);
                }
            });
        } else {
            // No modo exclusão, checkboxes apenas marcam/desmarcam sem ação imediata
            const checkbox = card.querySelector('.delete-subcategory-checkbox');
            if (checkbox) {
                checkbox.addEventListener('change', () => {
                    this.updateDeleteSelectedButton();
                });
            }
        }
        
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
            if (this.categoriesContainer) {
                this.categoriesContainer.innerHTML = '';
            }
            if (this.backButton) {
                this.backButton.style.display = 'block';
            }
            // Ocultar controles de voz ao entrar em subcategoria
            if (this.voiceControls) {
                this.voiceControls.classList.add('controls-hidden');
            }
            if (this.toggleControlsBtn) {
                this.toggleControlsBtn.style.display = 'none';
            }
            this.selectedCard = null;
            let subItems = subCategories[categoryId] ? [...subCategories[categoryId]] : [];
            
            // Carrega falas customizadas do localStorage
            const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
            if (customSpeeches[categoryId] && Array.isArray(customSpeeches[categoryId])) {
                // Combina items padrão com falas customizadas
                subItems = [...subItems, ...customSpeeches[categoryId]];
            }
            
            // Verifica custom
            const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
            const custom = customCategories.find(cat=>cat.id===categoryId);
            if(custom) {
                if(Array.isArray(custom.items) && custom.items.length > 0) {
                    const customItems = custom.items.map(txt=> ({text: txt, icon: custom.icon, photo: custom.photo }));
                    subItems = [...subItems, ...customItems];
                }
            }
            
            if (subItems.length === 0) {
                // Categoria sem items - mostra mensagem mas permite criar falas
                if (this.categoriesContainer) {
                    this.categoriesContainer.innerHTML = '<p style="text-align: center; padding: 40px; color: #666;">Esta categoria ainda não tem itens. Clique em "Criar Fala" para adicionar.</p>';
                }
                const customObj = mainCategories.find(c=>c.id===categoryId) || custom;
                this.updateStatus(`Categoria: ${customObj?.title || categoryId}`);
                this.updateCreateButton();
                // Atualiza botão de excluir selecionados
                if (this.deleteSubcategoryMode) {
                    this.updateDeleteSelectedButton();
                }
                return;
            }
            
            // Calcula índices corretos para exclusão
            // Itens padrão têm itemIndex = null (não podem ser excluídos)
            // Itens de customSpeeches começam do índice 0
            const defaultSubCount = subCategories[categoryId] ? subCategories[categoryId].length : 0;
            
            subItems.forEach((item, index) => {
                let itemIndex = null;
                
                // Se o item está além dos padrões, é customizado
                if (index >= defaultSubCount) {
                    // Ajusta o índice: remove o offset dos itens padrão
                    const adjustedIndex = index - defaultSubCount;
                    
                    // Verifica se está em customSpeeches (vem primeiro) ou custom.items
                    const customSpeechesList = customSpeeches[categoryId] || [];
                    if (adjustedIndex < customSpeechesList.length) {
                        itemIndex = adjustedIndex;
                    } else {
                        // Está em custom.items, não pode excluir diretamente (seria necessário mais lógica)
                        // Por enquanto, marca como null para indicar que não é de customSpeeches
                        itemIndex = null;
                    }
                }
                
                const card = this.createSubCategoryCard(item, itemIndex);
                if (this.categoriesContainer) {
                    this.categoriesContainer.appendChild(card);
                }
            });
            const customObj = mainCategories.find(c=>c.id===categoryId) || custom;
            this.updateStatus(`Categoria: ${customObj?.title || categoryId}`);
            this.updateCreateButton();
        } catch (error) {
            this.showError('Erro ao carregar subcategorias: ' + error.message);
        }
    }

    goBack() {
        this.currentCategory = null;
        this.currentText = '';
        this.selectedCard = null;
        if (this.backButton) {
            this.backButton.style.display = 'none';
        }
        
        // Desativa modo de exclusão de subcategorias ao voltar
        if (this.deleteSubcategoryMode) {
            this.deleteSubcategoryMode = false;
            if (this.toggleDeleteSubcategoryBtn) {
                this.toggleDeleteSubcategoryBtn.style.background = 'rgba(231, 76, 60, 0.1)';
                this.toggleDeleteSubcategoryBtn.style.borderColor = 'rgba(231, 76, 60, 0.3)';
                this.toggleDeleteSubcategoryBtn.style.color = '#e74c3c';
            }
        }
        
        // Mostrar botão toggle de controles de voz ao voltar para principal
        if (this.toggleControlsBtn) {
            this.toggleControlsBtn.style.display = 'flex';
        }
        // Restaurar visibilidade dos controles de voz conforme preferência do usuário
        const controlsVisible = localStorage.getItem('voiceControlsVisible');
        if (controlsVisible === 'true' && this.voiceControls) {
            this.voiceControls.classList.remove('controls-hidden');
        }
        
        this.renderMainCategories();
        this.updateCreateButton();
        this.updateStatus('Pronto para uso');
    }

    renderMainCategories() {
        if (!this.categoriesContainer) return;
        
        this.categoriesContainer.innerHTML = '';
        // Carrega categorias customizadas
        const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
        const allCategories = [...mainCategories, ...customCategories];
        allCategories.forEach(category => {
            const card = this.createCategoryCard(category);
            this.categoriesContainer.appendChild(card);
        });
        this.updateCreateButton();
        // Atualiza botão de excluir selecionados após renderizar
        if (this.deleteMode) {
            setTimeout(() => this.updateDeleteSelectedButton(), 100);
        }
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
            
            // Configurar voz (com verificação de existência do elemento)
            if (this.voiceSelect && this.availableVoices.length > 0) {
                const selectedVoice = this.voiceSelect.value;
                if (selectedVoice) {
                    const voice = this.availableVoices.find(v => v.name === selectedVoice);
                    if (voice) {
                        utterance.voice = voice;
                        utterance.lang = voice.lang || 'pt-BR';
                    } else {
                        utterance.lang = 'pt-BR';
                    }
                } else {
                    utterance.lang = 'pt-BR';
                }
            } else {
                utterance.lang = 'pt-BR';
            }
            
            // Configurar velocidade (rate) com validação e verificação de elemento
            let speed = 1.0;
            if (this.speedControl) {
                speed = parseFloat(this.speedControl.value) || 1.0;
            }
            utterance.rate = Math.max(0.1, Math.min(10, speed));
            
            // Configurar tom (pitch) com validação e verificação de elemento
            let pitch = 1.0;
            if (this.toneControl) {
                pitch = parseFloat(this.toneControl.value) || 1.0;
            }
            utterance.pitch = Math.max(0, Math.min(2, pitch));
            
            // Configurar volume
            utterance.volume = this.volume || 1.0;
            
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

    openSettingsModal() {
        let modal = document.getElementById('settingsModal');
        if (modal) modal.remove();
        modal = document.createElement('div');
        modal.id = 'settingsModal';
        modal.className = 'modal-bg';
        const currentVolume = this.volume || 1.0;
        modal.innerHTML = `
            <div class="modal-content settings-modal" role="dialog" aria-modal="true" aria-labelledby="settingsTitle">
                <h2 id="settingsTitle"><i class="fas fa-cog"></i> Configurações Avançadas</h2>
                <div class="settings-content">
                    <div class="setting-item">
                        <label>Volume:</label>
                        <input type="range" id="volumeSlider" min="0" max="1" step="0.1" value="${currentVolume}" />
                        <span id="volumeValue">${Math.round(currentVolume * 100)}%</span>
                    </div>
                    <button type="button" id="closeSettingsModal" class="close-settings-btn">Fechar</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeValue = document.getElementById('volumeValue');
        volumeSlider.addEventListener('input', (e) => {
            const value = parseFloat(e.target.value);
            volumeValue.textContent = Math.round(value * 100) + '%';
            this.volume = value;
            this.saveUserPreferences();
        });
        document.getElementById('closeSettingsModal').onclick = () => modal.remove();
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
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
            const savedTone = localStorage.getItem('communicationApp_tone');
            const savedVoice = localStorage.getItem('communicationApp_voice');
            const savedVolume = localStorage.getItem('communicationApp_volume');
            
            if (savedSpeed) this.speedControl.value = savedSpeed;
            if (savedTone) this.toneControl.value = savedTone;
            if (savedVoice) this.voiceSelect.value = savedVoice;
            if (savedVolume) this.volume = parseFloat(savedVolume);
            
            // Carregar preferência de visibilidade dos controles
            const controlsVisible = localStorage.getItem('voiceControlsVisible');
            if (controlsVisible === 'true') {
                this.showVoiceControls();
            } else {
                // Por padrão, controles começam ocultos
                this.hideVoiceControls();
            }
            
            // Carregar preferência de visibilidade do botão criar categoria
            const createCategoryVisible = localStorage.getItem('createCategoryBtnVisible');
            if (createCategoryVisible === 'true') {
                this.showCreateCategoryBtn();
            } else {
                // Por padrão, botão começa oculto
                this.hideCreateCategoryButton();
            }
        } catch (error) {
            console.warn('Erro ao carregar preferências:', error);
        }
    }

    saveUserPreferences() {
        try {
            localStorage.setItem('communicationApp_speed', this.speedControl.value);
            localStorage.setItem('communicationApp_tone', this.toneControl.value);
            localStorage.setItem('communicationApp_voice', this.voiceSelect.value);
            localStorage.setItem('communicationApp_volume', this.volume.toString());
        } catch (error) {
            console.warn('Erro ao salvar preferências:', error);
        }
    }

    openCreateCategoryModal() {
        let modal = document.getElementById('createCategoryModal');
        if (modal) modal.remove();
        modal = document.createElement('div');
        modal.id = 'createCategoryModal';
        modal.className = 'modal-bg';
        modal.innerHTML = `
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                <h2 id="modalTitle"><i class="fas fa-plus-circle"></i> Criar Nova Categoria</h2>
                <form id="createCategoryForm">
                    <label style="display: block; font-size: 18px; font-weight: 600; color: #333; margin-bottom: 12px;">Nome da Categoria:</label>
                    <input type="text" id="catName" required maxlength="30" placeholder="Ex: pessoas, brincar, comida..." autofocus style="width: 100%; padding: 14px; font-size: 16px; border: 2px solid #ddd; border-radius: 8px; margin-bottom: 20px; box-sizing: border-box;" />
                    
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; font-size: 16px; font-weight: 600; color: #333; margin-bottom: 8px;">
                            <i class="fas fa-image" style="margin-right: 6px;"></i> Ou escolha uma imagem local:
                        </label>
                        <input type="file" id="categoryImage" accept="image/*" style="display: none;" />
                        <button type="button" id="selectCategoryImageBtn" style="width: 100%; padding: 12px; background: #2196F3; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <i class="fas fa-folder-open"></i> Escolher Imagem da Galeria
                        </button>
                        <div id="selectedCategoryImagePreview" style="margin-top: 12px; display: none;">
                            <img id="previewCategoryImage" src="" alt="Preview" style="max-width: 100%; max-height: 150px; border-radius: 8px; border: 2px solid #ddd;" />
                            <p style="margin-top: 8px; font-size: 14px; color: #666;">Imagem selecionada</p>
                        </div>
                        <p style="margin-top: 8px; font-size: 13px; color: #999; font-style: italic;">
                            <i class="fas fa-info-circle"></i> Se não escolher imagem, será usado um ícone automático baseado no nome
                        </p>
                    </div>
                    
                    <div style="display: flex; gap: 10px; justify-content: flex-end;">
                        <button type="button" id="cancelModal" style="padding: 10px 20px; background: #ccc; color: #333; border: none; border-radius: 6px; cursor: pointer; font-size: 16px;">Cancelar</button>
                        <button type="submit" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">Salvar</button>
                    </div>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Configurar botão de seleção de imagem
        const imageInput = document.getElementById('categoryImage');
        const selectImageBtn = document.getElementById('selectCategoryImageBtn');
        const previewDiv = document.getElementById('selectedCategoryImagePreview');
        const previewImg = document.getElementById('previewCategoryImage');
        
        selectImageBtn.addEventListener('click', () => {
            imageInput.click();
        });
        
        imageInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    previewImg.src = event.target.result;
                    previewDiv.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
        
        document.getElementById('cancelModal').onclick = () => modal.remove();
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
        document.getElementById('createCategoryForm').onsubmit = async (e) => {
            e.preventDefault();
            await this.handleCreateCategorySubmit(e);
            modal.remove();
        };
    }
    async handleCreateCategorySubmit(e) {
        e.preventDefault();
        const name = document.getElementById('catName').value.trim();
        
        if (!name) {
            this.showError('Por favor, digite um nome para a categoria');
            return;
        }
        
        // Verifica se o usuário escolheu uma imagem local
        const imageInput = document.getElementById('categoryImage');
        let categoryPhoto = null;
        let icon = null;
        
        if (imageInput && imageInput.files && imageInput.files[0]) {
            // Usuário escolheu imagem local
            this.showLoading('Salvando imagem...');
            try {
                const file = imageInput.files[0];
                const reader = new FileReader();
                
                categoryPhoto = await new Promise((resolve, reject) => {
                    reader.onload = (event) => resolve(event.target.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            } catch (error) {
                this.hideLoading();
                this.showError('Erro ao carregar imagem: ' + error.message);
                return;
            }
            this.hideLoading();
        } else {
            // Se não escolheu imagem, detecta ícone automaticamente baseado no título
            icon = detectIconByTitle(name);
        }
        
        // Gera cor aleatória automaticamente
        const color = generateRandomColor();
        
        const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
        const newCategory = {
            id: 'custom_' + Date.now(),
            title: name,
            color: color
        };
        
        // Adiciona photo ou icon dependendo do que foi escolhido
        if (categoryPhoto) {
            newCategory.photo = categoryPhoto;
        } else {
            newCategory.icon = icon;
        }
        
        customCategories.push(newCategory);
        localStorage.setItem('customCategories', JSON.stringify(customCategories));
        
        // Garante que o modo de exclusão está desativado após criar categoria
        if (this.deleteMode) {
            this.deleteMode = false;
            this.toggleDeleteModeBtn.style.background = 'rgba(231, 76, 60, 0.1)';
            this.toggleDeleteModeBtn.style.borderColor = 'rgba(231, 76, 60, 0.3)';
            this.toggleDeleteModeBtn.style.color = '#e74c3c';
        }
        
        this.renderMainCategories();
        this.updateStatus('Nova categoria criada!');
    }

    openCreateSpeechModal() {
        if (!this.currentCategory) {
            this.showError('Erro: nenhuma categoria selecionada');
            return;
        }

        let modal = document.getElementById('createSpeechModal');
        if (modal) modal.remove();
        modal = document.createElement('div');
        modal.id = 'createSpeechModal';
        modal.className = 'modal-bg';
        modal.innerHTML = `
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="speechModalTitle">
                <h2 id="speechModalTitle"><i class="fas fa-microphone"></i> Criar Fala</h2>
                <form id="createSpeechForm">
                    <label style="display: block; font-size: 18px; font-weight: 600; color: #333; margin-bottom: 12px;">Escreva uma frase:</label>
                    <input type="text" id="speechText" required maxlength="100" placeholder="Ex: Eu quero água" autofocus style="width: 100%; padding: 14px; font-size: 16px; border: 2px solid #ddd; border-radius: 8px; margin-bottom: 20px; box-sizing: border-box;" />
                    
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; font-size: 16px; font-weight: 600; color: #333; margin-bottom: 8px;">
                            <i class="fas fa-image" style="margin-right: 6px;"></i> Ou escolha uma imagem local:
                        </label>
                        <input type="file" id="speechImage" accept="image/*" style="display: none;" />
                        <button type="button" id="selectImageBtn" style="width: 100%; padding: 12px; background: #2196F3; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <i class="fas fa-folder-open"></i> Escolher Imagem da Galeria
                        </button>
                        <div id="selectedImagePreview" style="margin-top: 12px; display: none;">
                            <img id="previewImage" src="" alt="Preview" style="max-width: 100%; max-height: 150px; border-radius: 8px; border: 2px solid #ddd;" />
                            <p style="margin-top: 8px; font-size: 14px; color: #666;">Imagem selecionada</p>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 10px; justify-content: flex-end;">
                        <button type="button" id="cancelSpeechModal" style="padding: 10px 20px; background: #ccc; color: #333; border: none; border-radius: 6px; cursor: pointer; font-size: 16px;">Cancelar</button>
                        <button type="submit" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">Salvar</button>
                    </div>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Configurar botão de seleção de imagem
        const imageInput = document.getElementById('speechImage');
        const selectImageBtn = document.getElementById('selectImageBtn');
        const previewDiv = document.getElementById('selectedImagePreview');
        const previewImg = document.getElementById('previewImage');
        
        selectImageBtn.addEventListener('click', () => {
            imageInput.click();
        });
        
        imageInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    previewImg.src = event.target.result;
                    previewDiv.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
        
        document.getElementById('cancelSpeechModal').onclick = () => modal.remove();
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
        document.getElementById('createSpeechForm').onsubmit = (e) => {
            e.preventDefault();
            this.handleCreateSpeechSubmit(e);
            modal.remove();
        };
    }

    async handleCreateSpeechSubmit(e) {
        e.preventDefault();
        const speechText = document.getElementById('speechText').value.trim();
        
        if (!speechText) {
            this.showError('Por favor, digite uma frase');
            return;
        }

        if (!this.currentCategory) {
            this.showError('Erro: nenhuma categoria selecionada');
            return;
        }

        // Verifica se o usuário escolheu uma imagem local
        const imageInput = document.getElementById('speechImage');
        let cardImage = null;
        let icon = 'fas fa-comment';
        
        if (imageInput && imageInput.files && imageInput.files[0]) {
            // Usuário escolheu imagem local
            this.showLoading('Salvando imagem...');
            
            const file = imageInput.files[0];
            const reader = new FileReader();
            
            cardImage = await new Promise((resolve, reject) => {
                reader.onload = (event) => {
                    resolve(event.target.result);
                };
                reader.onerror = (error) => {
                    reject(error);
                };
                reader.readAsDataURL(file);
            });
            
            this.hideLoading();
        } else {
            // Gera imagem exportada automaticamente
            this.showLoading('Gerando imagem do card...');

            try {
                // Obtém ícone e cor da categoria atual
                let categoryColor = '#95a5a6';
                const mainCat = mainCategories.find(c => c.id === this.currentCategory);
                if (mainCat) {
                    icon = mainCat.icon;
                    categoryColor = mainCat.color;
                } else {
                    const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
                    const custom = customCategories.find(cat => cat.id === this.currentCategory);
                    if (custom) {
                        icon = custom.icon;
                        categoryColor = custom.color;
                    }
                }

                // Exporta imagem do card
                cardImage = await this.exportCardAsImage(speechText, categoryColor, icon);
                this.hideLoading();
            } catch (error) {
                this.hideLoading();
                this.showError('Erro ao gerar imagem: ' + error.message);
                console.error('Erro ao exportar card:', error);
                return;
            }
        }

        try {
            // Obtém ícone da categoria atual (para manter compatibilidade)
            const mainCat = mainCategories.find(c => c.id === this.currentCategory);
            if (mainCat) {
                icon = mainCat.icon;
            } else {
                const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
                const custom = customCategories.find(cat => cat.id === this.currentCategory);
                if (custom) {
                    icon = custom.icon;
                }
            }

            // Carrega falas customizadas do localStorage
            const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
            
            // Inicializa array da categoria se não existir
            if (!customSpeeches[this.currentCategory]) {
                customSpeeches[this.currentCategory] = [];
            }

            // Adiciona nova fala com imagem (local ou exportada)
            customSpeeches[this.currentCategory].push({
                text: speechText,
                icon: icon,
                image: cardImage
            });

            // Salva no localStorage
            localStorage.setItem('customSpeeches', JSON.stringify(customSpeeches));
            
            // Recarrega subcategorias para mostrar a nova fala
            this.showSubCategories(this.currentCategory);
            this.updateStatus('Nova fala criada!');
        } catch (error) {
            this.showError('Erro ao salvar fala: ' + error.message);
            console.error('Erro ao salvar fala:', error);
        }
    }

    openEditCategoryModal(categoryId) {
        // Busca info da categoria
        const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
        const cat = customCategories.find(c=>c.id===categoryId);
        if(!cat) return;
        let modal = document.getElementById('editCategoryModal');
        if(modal) modal.remove();
        modal = document.createElement('div');
        modal.id = 'editCategoryModal';
        modal.className = 'modal-bg';
        let itemsList = Array.isArray(cat.items)? [...cat.items] : [];
        modal.innerHTML = `
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="editModalTitle">
                <h2 id="editModalTitle"><i class="fas fa-edit"></i> Editar Categoria</h2>
                <form id="editCategoryForm">
                    <label>Nome:<input type="text" id="editCatName" required maxlength="30" value="${cat.title}" /></label><br/>
                    <label>Descrição:<input type="text" id="editCatDesc" maxlength="50" value="${cat.description||''}"/></label><br/>
                    <div id="editItemsSection" style="margin:13px 0 6px 0;">
                        <label>Seleção Específica:</label>
                        <div id="editItemsList"></div>
                        <input type="text" id="editNewItem" placeholder="Digite o item e ENTER" maxlength="40" style="width:75%" />
                        <button type="button" id="editAddItem">Adicionar</button>
                    </div>
                    <button type="submit">Salvar alterações</button>
                    <button type="button" id="cancelEditModal">Cancelar</button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
        function renderItems() {
          const el = document.getElementById('editItemsList');
          el.innerHTML = itemsList.map((t,i)=> `<span style='display:inline-flex;align-items: center; margin-right:5px; margin-bottom:4px; background:#f1f1f1; border:1px solid #bde; border-radius:5px; padding:3px 8px;'>${t} <button type='button' data-del='${i}' aria-label='Remover' style='margin-left:6px; background:transparent; color:#e53935; border:none; font-size:1.1em; cursor:pointer;'>&times;</button></span>`).join(" ");
          [...el.querySelectorAll('[data-del]')].forEach(btn=>btn.onclick=()=>{itemsList.splice(+btn.dataset.del,1); renderItems();});
        }
        renderItems();
        document.getElementById('editNewItem').addEventListener('keydown', e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            const val = e.target.value.trim();
            if(val){ itemsList.push(val); e.target.value=''; renderItems();}
          }
        });
        document.getElementById('editAddItem').onclick = ()=> {
          const inp = document.getElementById('editNewItem');
          const val = inp.value.trim();
          if(val){itemsList.push(val); inp.value=''; renderItems();}
        };
        document.getElementById('cancelEditModal').onclick = () => modal.remove();
        document.getElementById('editCategoryForm').onsubmit = (e) => {
            e.preventDefault();
            cat.title = document.getElementById('editCatName').value.trim();
            cat.description = document.getElementById('editCatDesc').value.trim();
            cat.items = itemsList.slice();
            localStorage.setItem('customCategories', JSON.stringify(customCategories));
            modal.remove();
            this.renderMainCategories();
            this.updateStatus('Categoria atualizada!');
        };
    }

    showDeleteConfirmation(categoryId, categoryTitle) {
        // Mantido para compatibilidade, mas agora usa a versão múltipla
        this.showDeleteConfirmationMultiple([{ id: categoryId, title: categoryTitle }]);
    }

    showDeleteConfirmationMultiple(categoriesToDelete) {
        // Remove modal anterior se existir
        let confirmModal = document.getElementById('deleteConfirmModal');
        if (confirmModal) confirmModal.remove();
        
        confirmModal = document.createElement('div');
        confirmModal.id = 'deleteConfirmModal';
        confirmModal.className = 'modal-bg';
        
        const count = categoriesToDelete.length;
        const categoriesList = categoriesToDelete.map(cat => `<li style="margin: 8px 0; padding: 8px; background: #f8f9fa; border-radius: 4px;">${cat.title}</li>`).join('');
        
        confirmModal.innerHTML = `
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="deleteModalTitle" style="max-width: 500px;">
                <h2 id="deleteModalTitle" style="color: #e74c3c; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-exclamation-triangle"></i> Confirmar Exclusão
                </h2>
                <div style="padding: 20px 0;">
                    <p style="font-size: 18px; margin-bottom: 15px;">Tem certeza que deseja excluir ${count === 1 ? 'esta categoria' : `estas ${count} categorias`}:</p>
                    <ul style="list-style: none; padding: 0; margin: 15px 0; max-height: 300px; overflow-y: auto;">
                        ${categoriesList}
                    </ul>
                    <p style="color: #e74c3c; margin-top: 15px; font-size: 14px;">
                        <i class="fas fa-exclamation-circle"></i> Esta ação não pode ser desfeita!
                    </p>
                </div>
                <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                    <button type="button" id="cancelDeleteBtn" style="padding: 12px 24px; background: #95a5a6; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">
                        Não
                    </button>
                    <button type="button" id="confirmDeleteBtn" style="padding: 12px 24px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-trash"></i> Sim, Excluir
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(confirmModal);
        
        const deleteCategories = () => {
            const categoryIds = categoriesToDelete.map(cat => cat.id);
            this.deleteCategoriesMultiple(categoryIds);
            confirmModal.remove();
        };
        
        document.getElementById('cancelDeleteBtn').onclick = () => confirmModal.remove();
        document.getElementById('confirmDeleteBtn').onclick = deleteCategories;
        
        confirmModal.addEventListener('click', (e) => {
            if (e.target === confirmModal) {
                confirmModal.remove();
            }
        });
    }

    deleteCategory(categoryId) {
        // Mantido para compatibilidade, mas agora usa a versão múltipla
        this.deleteCategoriesMultiple([categoryId]);
    }

    deleteCategoriesMultiple(categoryIds) {
        try {
            // Remove categorias do localStorage
            const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
            const filteredCategories = customCategories.filter(cat => !categoryIds.includes(cat.id));
            localStorage.setItem('customCategories', JSON.stringify(filteredCategories));
            
            // Remove também as falas customizadas associadas a estas categorias
            const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
            categoryIds.forEach(categoryId => {
                if (customSpeeches[categoryId]) {
                    delete customSpeeches[categoryId];
                }
            });
            localStorage.setItem('customSpeeches', JSON.stringify(customSpeeches));
            
            // Atualiza visualização
            this.renderMainCategories();
            this.updateStatus(`${categoryIds.length === 1 ? 'Categoria excluída' : `${categoryIds.length} categorias excluídas`}!`);
            
            // Se estava dentro de alguma dessas categorias, volta para tela principal
            if (categoryIds.includes(this.currentCategory)) {
                this.goBack();
            }
            
            // Atualiza botão de excluir selecionados
            this.updateDeleteSelectedButton();
        } catch (error) {
            this.showError('Erro ao excluir categorias: ' + error.message);
            console.error('Erro ao excluir categorias:', error);
        }
    }

    showDeleteSubcategoryConfirmation(itemText, itemIndex) {
        // Mantido para compatibilidade, mas agora usa a versão múltipla
        this.showDeleteSubcategoryConfirmationMultiple([{ text: itemText, index: itemIndex }]);
    }

    showDeleteSubcategoryConfirmationMultiple(itemsToDelete) {
        // Remove modal anterior se existir para evitar duplicatas
        const existingModal = document.getElementById('deleteSubcategoryConfirmModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Cria modal de confirmação
        const confirmModal = document.createElement('div');
        confirmModal.id = 'deleteSubcategoryConfirmModal';
        confirmModal.className = 'modal-bg';
        
        const count = itemsToDelete.length;
        const itemsList = itemsToDelete.map(item => `<li style="margin: 8px 0; padding: 8px; background: #f8f9fa; border-radius: 4px;">${item.text}</li>`).join('');
        
        confirmModal.innerHTML = `
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="deleteSubcategoryModalTitle" style="max-width: 500px;">
                <h2 id="deleteSubcategoryModalTitle" style="color: #e74c3c; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-exclamation-triangle"></i> Confirmar Exclusão
                </h2>
                <div style="padding: 20px 0;">
                    <p style="font-size: 18px; margin-bottom: 15px;">Tem certeza que deseja excluir ${count === 1 ? 'esta fala' : `estas ${count} falas`}:</p>
                    <ul style="list-style: none; padding: 0; margin: 15px 0; max-height: 300px; overflow-y: auto;">
                        ${itemsList}
                    </ul>
                    <p style="color: #e74c3c; margin-top: 15px; font-size: 14px;">
                        <i class="fas fa-exclamation-circle"></i> Esta ação não pode ser desfeita!
                    </p>
                </div>
                <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                    <button type="button" id="cancelDeleteSubcategoryBtn" style="padding: 12px 24px; background: #95a5a6; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">
                        Não
                    </button>
                    <button type="button" id="confirmDeleteSubcategoryBtn" style="padding: 12px 24px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-trash"></i> Sim, Excluir
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(confirmModal);
        
        const deleteSubcategories = () => {
            this.deleteSubcategoriesMultiple(itemsToDelete);
            confirmModal.remove();
        };
        
        document.getElementById('cancelDeleteSubcategoryBtn').onclick = () => confirmModal.remove();
        document.getElementById('confirmDeleteSubcategoryBtn').onclick = deleteSubcategories;
        
        confirmModal.addEventListener('click', (e) => {
            if (e.target === confirmModal) {
                confirmModal.remove();
            }
        });
    }

    deleteSubcategory(itemText, itemIndex) {
        // Mantido para compatibilidade, mas agora usa a versão múltipla
        this.deleteSubcategoriesMultiple([{ text: itemText, index: itemIndex }]);
    }

    deleteSubcategoriesMultiple(itemsToDelete) {
        try {
            if (!this.currentCategory) {
                this.showError('Erro: nenhuma categoria selecionada');
                return;
            }

            let deletedCount = 0;

            // Carrega falas customizadas
            const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
            
            if (customSpeeches[this.currentCategory] && Array.isArray(customSpeeches[this.currentCategory])) {
                // Prepara conjunto de textos para remoção
                const textsToRemove = new Set(itemsToDelete.map(item => item.text));
                const beforeLength = customSpeeches[this.currentCategory].length;
                
                // Remove itens por índice (em ordem reversa para não alterar índices durante remoção)
                const indicesToRemove = itemsToDelete
                    .map(item => item.index !== null && item.index !== undefined ? parseInt(item.index) : null)
                    .filter(idx => idx !== null && !isNaN(idx))
                    .sort((a, b) => b - a); // Ordem reversa
                
                indicesToRemove.forEach(idx => {
                    if (idx < customSpeeches[this.currentCategory].length && 
                        customSpeeches[this.currentCategory][idx] &&
                        textsToRemove.has(customSpeeches[this.currentCategory][idx].text)) {
                        customSpeeches[this.currentCategory].splice(idx, 1);
                        deletedCount++;
                    }
                });
                
                // Remove itens restantes pelo texto (que não foram removidos por índice)
                customSpeeches[this.currentCategory] = customSpeeches[this.currentCategory].filter(
                    speech => !textsToRemove.has(speech.text)
                );
                deletedCount += beforeLength - customSpeeches[this.currentCategory].length;
                
                // Se array ficar vazio, remove a categoria
                if (customSpeeches[this.currentCategory].length === 0) {
                    delete customSpeeches[this.currentCategory];
                }
                
                localStorage.setItem('customSpeeches', JSON.stringify(customSpeeches));
            }
            
            // Verifica também itens em categorias customizadas (customCategories)
            const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
            const customCategory = customCategories.find(cat => cat.id === this.currentCategory);
            
            if (customCategory && Array.isArray(customCategory.items)) {
                const textsToRemove = itemsToDelete.map(item => item.text);
                const beforeLength = customCategory.items.length;
                customCategory.items = customCategory.items.filter(
                    item => !textsToRemove.includes(item !== null && typeof item === 'object' ? item.text : item)
                );
                
                deletedCount += beforeLength - customCategory.items.length;
                if (beforeLength !== customCategory.items.length) {
                    localStorage.setItem('customCategories', JSON.stringify(customCategories));
                }
            }
            
            if (deletedCount === 0) {
                this.showError('Nenhuma fala pode ser excluída (podem ser falas padrão)');
                return;
            }
            
            // Recarrega subcategorias
            this.showSubCategories(this.currentCategory);
            this.updateStatus(`${deletedCount === 1 ? 'Fala excluída' : `${deletedCount} falas excluídas`}!`);
            
            // Atualiza botão de excluir selecionados
            this.updateDeleteSelectedButton();
        } catch (error) {
            this.showError('Erro ao excluir falas: ' + error.message);
            console.error('Erro ao excluir falas:', error);
        }
    }
}

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
    try {
        const app = new CommunicationApp();
        
        // Salvar preferências quando mudarem e resetar timer
        const speedControl = document.getElementById('speedControl');
        const toneControl = document.getElementById('toneControl');
        const voiceSelect = document.getElementById('voiceSelect');
        
        if (speedControl) {
            speedControl.addEventListener('change', () => {
                app.saveUserPreferences();
                app.resetControlsHideTimer();
            });
        }
        if (toneControl) {
            toneControl.addEventListener('change', () => {
                app.saveUserPreferences();
                app.resetControlsHideTimer();
            });
        }
        if (voiceSelect) {
            voiceSelect.addEventListener('change', () => {
                app.saveUserPreferences();
                app.resetControlsHideTimer();
            });
        }
        
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
