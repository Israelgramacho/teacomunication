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

// ============================================
// DICIONÁRIO DE TRADUÇÕES DA INTERFACE
// ============================================
const translations = {
    'pt-BR': {
        // Header
        'appTitle': 'Comunicação Alternativa',
        'appDescription': 'Sistema de Comunicação Aumentativa e Alternativa (CAA) para pessoas com autismo e dificuldades de fala',
        'techForInclusion': 'Tecnologia Assistiva para Inclusão',
        
        // Botões
        'backButton': 'Voltar para Categorias Principais',
        'createCategory': 'Criar Categoria',
        'createSpeech': 'Criar Fala',
        'delete': 'Excluir',
        'deleteSelected': 'Excluir Selecionados',
        'close': 'Fechar',
        'save': 'Salvar',
        'saveChanges': 'Salvar Alterações',
        'cancel': 'Cancelar',
        'test': 'Testar',
        'export': 'Exportar Dados',
        'import': 'Importar Dados',
        'showStats': 'Ver Estatísticas de Uso',
        
        // Labels e Controles
        'voice': 'Voz',
        'speed': 'Velocidade',
        'tone': 'Tom',
        'volume': 'Volume',
        'language': 'Idioma',
        'theme': 'Tema',
        'settings': 'Configurações',
        'presentationMode': 'Modo Apresentação',
        'exitPresentation': 'Sair do Modo Apresentação',
        
        // Opções de Velocidade
        'slow': 'Lenta',
        'normal': 'Normal',
        'fast': 'Rápida',
        
        // Opções de Tom
        'veryLow': 'Muito Baixo',
        'low': 'Baixo',
        'high': 'Alto',
        'veryHigh': 'Muito Alto',
        
        // Opções de Tema
        'light': 'Claro',
        'dark': 'Escuro',
        'highContrast': 'Alto Contraste',
        
        // Mensagens de Status
        'ready': 'Pronto para uso',
        'loadingVoices': 'Carregando vozes...',
        'initializing': 'Inicializando aplicativo...',
        'categoryDeleted': 'Categoria excluída!',
        'speechDeleted': 'Fala excluída!',
        'categoryCreated': 'Nova categoria criada!',
        'speechCreated': 'Nova fala criada!',
        'emptyCategoryMessage': 'Esta categoria ainda não tem itens. Clique em "Criar Fala" para adicionar.',
        'dataExported': 'Dados exportados com sucesso!',
        'dataImported': 'Dados importados com sucesso!',
        'deleteModeCategories': 'Modo exclusão ativado - Marque as categorias para excluir',
        'deleteModeSpeeches': 'Modo exclusão ativado - Marque as falas para excluir',
        
        // Modais
        'createCategoryTitle': 'Criar Nova Categoria',
        'createSpeechTitle': 'Criar Nova Fala',
        'editSpeechTitle': 'Editar Fala',
        'settingsTitle': 'Configurações Avançadas',
        'statsTitle': 'Estatísticas de Uso',
        'exportTitle': 'Exportar Dados',
        'importTitle': 'Importar Dados',
        
        // Formulários
        'categoryName': 'Nome da Categoria',
        'speechText': 'Texto da Fala',
        'selectImage': 'Selecionar Imagem',
        'searchPictogram': 'Buscar Pictograma ARASAAC',
        'generateImage': 'Gerar Imagem Automaticamente',
        'chooseImage': 'Escolha uma imagem:',
        'localGallery': 'Galeria Local',
        'imageSelected': 'Imagem selecionada',
        'removeImage': 'Remover Imagem',
        'autoIconInfo': 'Se não escolher imagem, será usado um ícone automático baseado no nome',
        'categoryNamePlaceholder': 'Ex: pessoas, brincar, comida...',
        'speechTextPlaceholder': 'Ex: Olá, Tchau, Obrigado...',
        
        // ARASAAC
        'arasaacModalTitle': 'Buscar Pictograma - ARASAAC',
        'arasaacInstruction': 'Digite uma palavra para buscar pictogramas (ex: comer, dormir, escola, casa)',
        'arasaacPlaceholder': 'Digite uma palavra (ex: comer, escola, brincar)',
        'arasaacSearchBtn': 'Buscar',
        'arasaacEmptyMessage': 'Digite uma palavra e clique em "Buscar" para ver os pictogramas disponíveis.',
        'arasaacConfirmSelection': 'Confirmar Seleção',
        'arasaacNoResults': 'Nenhum pictograma encontrado',
        'arasaacEnterWord': 'Por favor, digite uma palavra para buscar.',
        'arasaacOfflineError': 'Você está offline. A busca ARASAAC requer conexão com a internet.',
        'arasaacOfflineWarning': 'Você está offline. A busca ARASAAC não está disponível.',
        
        // Estatísticas
        'totalCategories': 'Total de Categorias',
        'totalSpeeches': 'Total de Falas',
        'totalUses': 'Total de Usos',
        'topUsed': 'Top 10 Falas Mais Usadas',
        'noData': 'Nenhuma fala usada ainda',
        'filterPeriod': 'Filtrar por Período',
        'today': 'Hoje',
        'thisWeek': 'Esta Semana',
        'thisMonth': 'Este Mês',
        'last7Days': 'Últimos 7 Dias',
        'last30Days': 'Últimos 30 Dias',
        'allTime': 'Todo o Período',
        'mostUsedCategory': 'Categoria Mais Usada',
        'mostUsedSpeech': 'Fala Mais Usada',
        'usageByTime': 'Uso por Horário',
        'morning': 'Manhã',
        'afternoon': 'Tarde',
        'night': 'Noite',
        'suggestions': 'Sugestões',
        'alerts': 'Alertas',
        'clearStats': 'Limpar Estatísticas',
        'exportStats': 'Exportar Estatísticas',
        'exportCSV': 'Exportar CSV',
        'exportJSON': 'Exportar JSON',
        'confirmClearStats': 'Tem certeza que deseja limpar todas as estatísticas? Esta ação não pode ser desfeita!',
        'statsCleared': 'Estatísticas limpas com sucesso!',
        'goToCategory': 'Ir para Categoria',
        'createSpeechInCategory': 'Criar Fala nesta Categoria',
        'unusedForDays': 'não foi usada há {days} dias',
        'suggestionCreateMore': 'Você usa muito "{category}", que tal criar mais falas nessa categoria?',
        'noSuggestions': 'Nenhuma sugestão no momento',
        'noAlerts': 'Nenhum alerta no momento',
        'categoryNotUsed': 'A categoria "{category}" não foi usada há 30 dias',
        'usagePatterns': 'Padrões de Uso',
        'mostActiveDay': 'Dia Mais Ativo',
        'mostActiveTime': 'Horário Mais Ativo',
        'use': 'uso',
        'uses': 'usos',
        
        // Erros
        'error': 'Erro',
        'closeError': 'Fechar mensagem de erro',
        'noVoices': 'Nenhuma voz disponível',
        'apiNotSupported': 'API não suportada',
        'errorLoadingVoices': 'Erro ao carregar vozes',
        
        // Confirmação de Exclusão
        'confirmDelete': 'Confirmar Exclusão',
        'confirmDeleteCategory': 'Tem certeza que deseja excluir esta categoria',
        'confirmDeleteCategories': 'Tem certeza que deseja excluir estas {count} categorias',
        'confirmDeleteSpeech': 'Tem certeza que deseja excluir esta fala',
        'confirmDeleteSpeeches': 'Tem certeza que deseja excluir estas {count} falas',
        'deleteWarning': 'Esta ação não pode ser desfeita!',
        'yesDelete': 'Sim, Excluir',
        'no': 'Não'
    },
    'en-US': {
        'appTitle': 'Alternative Communication',
        'appDescription': 'Augmentative and Alternative Communication (AAC) system for people with autism and speech difficulties',
        'techForInclusion': 'Assistive Technology for Inclusion',
        'backButton': 'Back to Main Categories',
        'createCategory': 'Create Category',
        'createSpeech': 'Create Speech',
        'delete': 'Delete',
        'deleteSelected': 'Delete Selected',
        'close': 'Close',
        'save': 'Save',
        'saveChanges': 'Save Changes',
        'cancel': 'Cancel',
        'test': 'Test',
        'export': 'Export Data',
        'import': 'Import Data',
        'showStats': 'View Usage Statistics',
        'voice': 'Voice',
        'speed': 'Speed',
        'tone': 'Tone',
        'volume': 'Volume',
        'language': 'Language',
        'theme': 'Theme',
        'settings': 'Settings',
        'presentationMode': 'Presentation Mode',
        'exitPresentation': 'Exit Presentation Mode',
        'slow': 'Slow',
        'normal': 'Normal',
        'fast': 'Fast',
        'veryLow': 'Very Low',
        'low': 'Low',
        'high': 'High',
        'veryHigh': 'Very High',
        'light': 'Light',
        'dark': 'Dark',
        'highContrast': 'High Contrast',
        'ready': 'Ready to use',
        'loadingVoices': 'Loading voices...',
        'initializing': 'Initializing application...',
        'categoryDeleted': 'Category deleted!',
        'speechDeleted': 'Speech deleted!',
        'categoryCreated': 'New category created!',
        'speechCreated': 'New speech created!',
        'emptyCategoryMessage': 'This category has no items yet. Click "Create Speech" to add.',
        'dataExported': 'Data exported successfully!',
        'dataImported': 'Data imported successfully!',
        'deleteModeCategories': 'Delete mode activated - Mark categories to delete',
        'deleteModeSpeeches': 'Delete mode activated - Mark speeches to delete',
        'createCategoryTitle': 'Create New Category',
        'createSpeechTitle': 'Create New Speech',
        'editSpeechTitle': 'Edit Speech',
        'settingsTitle': 'Advanced Settings',
        'statsTitle': 'Usage Statistics',
        'exportTitle': 'Export Data',
        'importTitle': 'Import Data',
        'categoryName': 'Category Name',
        'speechText': 'Speech Text',
        'selectImage': 'Select Image',
        'searchPictogram': 'Search ARASAAC Pictogram',
        'generateImage': 'Generate Image Automatically',
        'chooseImage': 'Choose an image:',
        'localGallery': 'Local Gallery',
        'imageSelected': 'Image selected',
        'removeImage': 'Remove Image',
        'autoIconInfo': 'If no image is chosen, an automatic icon based on the name will be used',
        'categoryNamePlaceholder': 'Ex: people, play, food...',
        'speechTextPlaceholder': 'Ex: Hello, Goodbye, Thank you...',
        
        // ARASAAC
        'arasaacModalTitle': 'Search Pictogram - ARASAAC',
        'arasaacInstruction': 'Type a word to search for pictograms (ex: eat, sleep, school, house)',
        'arasaacPlaceholder': 'Type a word (ex: eat, school, play)',
        'arasaacSearchBtn': 'Search',
        'arasaacEmptyMessage': 'Type a word and click "Search" to see available pictograms.',
        'arasaacConfirmSelection': 'Confirm Selection',
        'arasaacNoResults': 'No pictograms found',
        'arasaacEnterWord': 'Please enter a word to search.',
        'arasaacOfflineError': 'You are offline. ARASAAC search requires internet connection.',
        'arasaacOfflineWarning': 'You are offline. ARASAAC search is not available.',
        
        'totalCategories': 'Total Categories',
        'totalSpeeches': 'Total Speeches',
        'totalUses': 'Total Uses',
        'topUsed': 'Top 10 Most Used Speeches',
        'noData': 'No speeches used yet',
        'filterPeriod': 'Filter by Period',
        'today': 'Today',
        'thisWeek': 'This Week',
        'thisMonth': 'This Month',
        'last7Days': 'Last 7 Days',
        'last30Days': 'Last 30 Days',
        'allTime': 'All Time',
        'mostUsedCategory': 'Most Used Category',
        'mostUsedSpeech': 'Most Used Speech',
        'usageByTime': 'Usage by Time of Day',
        'morning': 'Morning',
        'afternoon': 'Afternoon',
        'night': 'Night',
        'suggestions': 'Suggestions',
        'alerts': 'Alerts',
        'clearStats': 'Clear Statistics',
        'exportStats': 'Export Statistics',
        'exportCSV': 'Export CSV',
        'exportJSON': 'Export JSON',
        'confirmClearStats': 'Are you sure you want to clear all statistics? This action cannot be undone!',
        'statsCleared': 'Statistics cleared successfully!',
        'goToCategory': 'Go to Category',
        'createSpeechInCategory': 'Create Speech in this Category',
        'unusedForDays': 'has not been used for {days} days',
        'suggestionCreateMore': 'You use "{category}" a lot, how about creating more speeches in this category?',
        'noSuggestions': 'No suggestions at the moment',
        'noAlerts': 'No alerts at the moment',
        'categoryNotUsed': 'The category "{category}" has not been used for 30 days',
        'usagePatterns': 'Usage Patterns',
        'mostActiveDay': 'Most Active Day',
        'mostActiveTime': 'Most Active Time',
        'use': 'use',
        'uses': 'uses',
        'error': 'Error',
        'closeError': 'Close error message',
        'noVoices': 'No voices available',
        'apiNotSupported': 'API not supported',
        'errorLoadingVoices': 'Error loading voices',
        
        // Confirmation of Deletion
        'confirmDelete': 'Confirm Deletion',
        'confirmDeleteCategory': 'Are you sure you want to delete this category',
        'confirmDeleteCategories': 'Are you sure you want to delete these {count} categories',
        'confirmDeleteSpeech': 'Are you sure you want to delete this speech',
        'confirmDeleteSpeeches': 'Are you sure you want to delete these {count} speeches',
        'deleteWarning': 'This action cannot be undone!',
        'yesDelete': 'Yes, Delete',
        'no': 'No'
    },
    'es-ES': {
        'appTitle': 'Comunicación Alternativa',
        'appDescription': 'Sistema de Comunicación Aumentativa y Alternativa (CAA) para personas con autismo y dificultades del habla',
        'techForInclusion': 'Tecnología Asistiva para la Inclusión',
        'backButton': 'Volver a Categorías Principales',
        'createCategory': 'Crear Categoría',
        'createSpeech': 'Crear Habla',
        'delete': 'Eliminar',
        'deleteSelected': 'Eliminar Seleccionados',
        'close': 'Cerrar',
        'save': 'Guardar',
        'saveChanges': 'Guardar Cambios',
        'cancel': 'Cancelar',
        'test': 'Probar',
        'export': 'Exportar Datos',
        'import': 'Importar Datos',
        'showStats': 'Ver Estadísticas de Uso',
        'voice': 'Voz',
        'speed': 'Velocidad',
        'tone': 'Tono',
        'volume': 'Volumen',
        'language': 'Idioma',
        'theme': 'Tema',
        'settings': 'Configuración',
        'presentationMode': 'Modo Presentación',
        'exitPresentation': 'Salir del Modo Presentación',
        'slow': 'Lenta',
        'normal': 'Normal',
        'fast': 'Rápida',
        'veryLow': 'Muy Bajo',
        'low': 'Bajo',
        'high': 'Alto',
        'veryHigh': 'Muy Alto',
        'light': 'Claro',
        'dark': 'Oscuro',
        'highContrast': 'Alto Contraste',
        'ready': 'Listo para usar',
        'loadingVoices': 'Cargando voces...',
        'initializing': 'Inicializando aplicación...',
        'categoryDeleted': '¡Categoría eliminada!',
        'speechDeleted': '¡Habla eliminada!',
        'categoryCreated': '¡Nueva categoría creada!',
        'speechCreated': '¡Nueva habla creada!',
        'emptyCategoryMessage': 'Esta categoría aún no tiene elementos. Haz clic en "Crear Habla" para agregar.',
        'dataExported': '¡Datos exportados con éxito!',
        'dataImported': '¡Datos importados con éxito!',
        'deleteModeCategories': 'Modo eliminación activado - Marque las categorías para eliminar',
        'deleteModeSpeeches': 'Modo eliminación activado - Marque las hablas para eliminar',
        'createCategoryTitle': 'Crear Nueva Categoría',
        'createSpeechTitle': 'Crear Nueva Habla',
        'editSpeechTitle': 'Editar Habla',
        'settingsTitle': 'Configuración Avanzada',
        'statsTitle': 'Estadísticas de Uso',
        'exportTitle': 'Exportar Datos',
        'importTitle': 'Importar Datos',
        'categoryName': 'Nombre de la Categoría',
        'speechText': 'Texto de la Habla',
        'selectImage': 'Seleccionar Imagen',
        'searchPictogram': 'Buscar Pictograma ARASAAC',
        'generateImage': 'Generar Imagen Automáticamente',
        'chooseImage': 'Elige una imagen:',
        'localGallery': 'Galería Local',
        'imageSelected': 'Imagen seleccionada',
        'removeImage': 'Eliminar Imagen',
        'autoIconInfo': 'Si no eliges imagen, se usará un ícono automático basado en el nombre',
        'categoryNamePlaceholder': 'Ej: personas, jugar, comida...',
        'speechTextPlaceholder': 'Ej: Hola, Adiós, Gracias...',
        
        // ARASAAC
        'arasaacModalTitle': 'Buscar Pictograma - ARASAAC',
        'arasaacInstruction': 'Escribe una palabra para buscar pictogramas (ej: comer, dormir, escuela, casa)',
        'arasaacPlaceholder': 'Escribe una palabra (ej: comer, escuela, jugar)',
        'arasaacSearchBtn': 'Buscar',
        'arasaacEmptyMessage': 'Escribe una palabra y haz clic en "Buscar" para ver los pictogramas disponibles.',
        'arasaacConfirmSelection': 'Confirmar Selección',
        'arasaacNoResults': 'No se encontraron pictogramas',
        'arasaacEnterWord': 'Por favor, escribe una palabra para buscar.',
        'arasaacOfflineError': 'Estás offline. La búsqueda ARASAAC requiere conexión a internet.',
        'arasaacOfflineWarning': 'Estás offline. La búsqueda ARASAAC no está disponible.',
        
        'totalCategories': 'Total de Categorías',
        'totalSpeeches': 'Total de Hablas',
        'totalUses': 'Total de Usos',
        'topUsed': 'Top 10 Hablas Más Usadas',
        'noData': 'Ninguna habla usada aún',
        'filterPeriod': 'Filtrar por Período',
        'today': 'Hoy',
        'thisWeek': 'Esta Semana',
        'thisMonth': 'Este Mes',
        'last7Days': 'Últimos 7 Días',
        'last30Days': 'Últimos 30 Días',
        'allTime': 'Todo el Período',
        'mostUsedCategory': 'Categoría Más Usada',
        'mostUsedSpeech': 'Habla Más Usada',
        'usageByTime': 'Uso por Horario',
        'morning': 'Mañana',
        'afternoon': 'Tarde',
        'night': 'Noche',
        'suggestions': 'Sugerencias',
        'alerts': 'Alertas',
        'clearStats': 'Limpiar Estadísticas',
        'exportStats': 'Exportar Estadísticas',
        'exportCSV': 'Exportar CSV',
        'exportJSON': 'Exportar JSON',
        'confirmClearStats': '¿Estás seguro de que deseas limpiar todas las estadísticas? ¡Esta acción no se puede deshacer!',
        'statsCleared': '¡Estadísticas limpiadas con éxito!',
        'goToCategory': 'Ir a Categoría',
        'createSpeechInCategory': 'Crear Habla en esta Categoría',
        'unusedForDays': 'no se ha usado durante {days} días',
        'suggestionCreateMore': 'Usas mucho "{category}", ¿qué tal crear más hablas en esta categoría?',
        'noSuggestions': 'No hay sugerencias en este momento',
        'noAlerts': 'No hay alertas en este momento',
        'categoryNotUsed': 'La categoría "{category}" no se ha usado durante 30 días',
        'usagePatterns': 'Patrones de Uso',
        'mostActiveDay': 'Día Más Activo',
        'mostActiveTime': 'Horario Más Activo',
        'use': 'uso',
        'uses': 'usos',
        'error': 'Error',
        'closeError': 'Cerrar mensaje de error',
        'noVoices': 'No hay voces disponibles',
        'apiNotSupported': 'API no soportada',
        'errorLoadingVoices': 'Error al cargar voces',
        
        // Confirmación de Eliminación
        'confirmDelete': 'Confirmar Eliminación',
        'confirmDeleteCategory': '¿Estás seguro de que deseas eliminar esta categoría',
        'confirmDeleteCategories': '¿Estás seguro de que deseas eliminar estas {count} categorías',
        'confirmDeleteSpeech': '¿Estás seguro de que deseas eliminar esta habla',
        'confirmDeleteSpeeches': '¿Estás seguro de que deseas eliminar estas {count} hablas',
        'deleteWarning': '¡Esta acción no se puede deshacer!',
        'yesDelete': 'Sí, Eliminar',
        'no': 'No'
    }
};

// Função auxiliar para obter tradução
function getTranslation(key, lang = 'pt-BR') {
    const langCode = lang.split('-')[0];
    const langMap = {
        'pt': 'pt-BR',
        'en': 'en-US',
        'es': 'es-ES',
        'fr': 'fr-FR',
        'de': 'de-DE',
        'it': 'it-IT',
        'ja': 'ja-JP',
        'zh': 'zh-CN',
        'ko': 'ko-KR',
        'ru': 'ru-RU',
        'ar': 'ar-SA',
        'nl': 'nl-NL',
        'pl': 'pl-PL',
        'tr': 'tr-TR',
        'hi': 'hi-IN',
        'th': 'th-TH',
        'vi': 'vi-VN',
        'cs': 'cs-CZ'
    };
    
    const targetLang = langMap[langCode] || lang;
    const translation = translations[targetLang] || translations['en-US'];
    return translation[key] || translations['pt-BR'][key] || key;
}

// ============================================
// DICIONÁRIO DE TRADUÇÕES DE PALAVRAS COMUNS
// ============================================
const wordTranslations = {
    'pt-BR': {
        'food': 'comida',
        'play': 'brincar',
        'criando': 'criando',
        'creating': 'criando',
        'water': 'água',
        'hello': 'olá',
        'goodbye': 'tchau',
        'thank you': 'obrigado',
        'please': 'por favor',
        'yes': 'sim',
        'no': 'não',
        'help': 'ajuda',
        'bathroom': 'banheiro',
        'hungry': 'fome',
        'thirsty': 'sede',
        'tired': 'cansado',
        'happy': 'feliz',
        'sad': 'triste',
        'angry': 'bravo',
        'scared': 'medo',
        'pain': 'dor',
        'home': 'casa',
        'school': 'escola',
        'doctor': 'médico',
        'hospital': 'hospital',
        'car': 'carro',
        'bus': 'ônibus',
        'train': 'trem',
        'airplane': 'avião',
        'dog': 'cachorro',
        'cat': 'gato',
        'bird': 'pássaro',
        'fish': 'peixe',
        'apple': 'maçã',
        'banana': 'banana',
        'bread': 'pão',
        'milk': 'leite',
        'juice': 'suco',
        'cookie': 'biscoito',
        'cake': 'bolo',
        'pizza': 'pizza',
        'hamburger': 'hambúrguer',
        'sleep': 'dormir',
        'wake up': 'acordar',
        'eat': 'comer',
        'drink': 'beber',
        'run': 'correr',
        'walk': 'andar',
        'jump': 'pular',
        'sit': 'sentar',
        'stand': 'ficar em pé',
        'stop': 'parar',
        'go': 'ir',
        'come': 'vir',
        'open': 'abrir',
        'close': 'fechar',
        'big': 'grande',
        'small': 'pequeno',
        'hot': 'quente',
        'cold': 'frio',
        'good': 'bom',
        'bad': 'ruim',
        'more': 'mais',
        'less': 'menos',
        'again': 'de novo',
        'finished': 'acabou',
        'want': 'querer',
        'like': 'gostar',
        'don\'t like': 'não gostar',
        'mom': 'mãe',
        'dad': 'pai',
        'brother': 'irmão',
        'sister': 'irmã',
        'friend': 'amigo',
        'teacher': 'professor',
        'book': 'livro',
        'toy': 'brinquedo',
        'ball': 'bola',
        'music': 'música',
        'tv': 'televisão',
        'phone': 'telefone',
        'computer': 'computador',
        'tablet': 'tablet',
        'shirt': 'camisa',
        'pants': 'calça',
        'shoes': 'sapatos',
        'hat': 'chapéu',
        'red': 'vermelho',
        'blue': 'azul',
        'green': 'verde',
        'yellow': 'amarelo',
        'orange': 'laranja',
        'purple': 'roxo',
        'black': 'preto',
        'white': 'branco',
        'brown': 'marrom',
        'pink': 'rosa',
        'one': 'um',
        'two': 'dois',
        'three': 'três',
        'four': 'quatro',
        'five': 'cinco',
        'six': 'seis',
        'seven': 'sete',
        'eight': 'oito',
        'nine': 'nove',
        'ten': 'dez'
    },
    'en-US': {
        'comida': 'food',
        'brincar': 'play',
        'criando': 'creating',
        'creating': 'creating',
        'água': 'water',
        'agua': 'water',
        'olá': 'hello',
        'ola': 'hello',
        'tchau': 'goodbye',
        'obrigado': 'thank you',
        'por favor': 'please',
        'sim': 'yes',
        'não': 'no',
        'nao': 'no',
        'ajuda': 'help',
        'banheiro': 'bathroom',
        'fome': 'hungry',
        'sede': 'thirsty',
        'cansado': 'tired',
        'feliz': 'happy',
        'triste': 'sad',
        'bravo': 'angry',
        'medo': 'scared',
        'dor': 'pain',
        'casa': 'home',
        'escola': 'school',
        'médico': 'doctor',
        'medico': 'doctor',
        'hospital': 'hospital',
        'carro': 'car',
        'ônibus': 'bus',
        'onibus': 'bus',
        'trem': 'train',
        'avião': 'airplane',
        'aviao': 'airplane',
        'cachorro': 'dog',
        'gato': 'cat',
        'pássaro': 'bird',
        'passaro': 'bird',
        'peixe': 'fish',
        'maçã': 'apple',
        'maca': 'apple',
        'banana': 'banana',
        'pão': 'bread',
        'pao': 'bread',
        'leite': 'milk',
        'suco': 'juice',
        'biscoito': 'cookie',
        'bolo': 'cake',
        'pizza': 'pizza',
        'hambúrguer': 'hamburger',
        'hamburguer': 'hamburger',
        'dormir': 'sleep',
        'acordar': 'wake up',
        'comer': 'eat',
        'beber': 'drink',
        'correr': 'run',
        'andar': 'walk',
        'pular': 'jump',
        'sentar': 'sit',
        'ficar em pé': 'stand',
        'parar': 'stop',
        'ir': 'go',
        'vir': 'come',
        'abrir': 'open',
        'fechar': 'close',
        'grande': 'big',
        'pequeno': 'small',
        'quente': 'hot',
        'frio': 'cold',
        'bom': 'good',
        'ruim': 'bad',
        'mais': 'more',
        'menos': 'less',
        'de novo': 'again',
        'acabou': 'finished',
        'querer': 'want',
        'gostar': 'like',
        'não gostar': 'don\'t like',
        'nao gostar': 'don\'t like',
        'mãe': 'mom',
        'mae': 'mom',
        'pai': 'dad',
        'irmão': 'brother',
        'irmao': 'brother',
        'irmã': 'sister',
        'irma': 'sister',
        'amigo': 'friend',
        'professor': 'teacher',
        'livro': 'book',
        'brinquedo': 'toy',
        'bola': 'ball',
        'música': 'music',
        'musica': 'music',
        'televisão': 'tv',
        'televisao': 'tv',
        'telefone': 'phone',
        'computador': 'computer',
        'tablet': 'tablet',
        'camisa': 'shirt',
        'calça': 'pants',
        'calca': 'pants',
        'sapatos': 'shoes',
        'chapéu': 'hat',
        'chapeu': 'hat',
        'vermelho': 'red',
        'azul': 'blue',
        'verde': 'green',
        'amarelo': 'yellow',
        'laranja': 'orange',
        'roxo': 'purple',
        'preto': 'black',
        'branco': 'white',
        'marrom': 'brown',
        'rosa': 'pink',
        'um': 'one',
        'dois': 'two',
        'três': 'three',
        'tres': 'three',
        'quatro': 'four',
        'cinco': 'five',
        'seis': 'six',
        'sete': 'seven',
        'oito': 'eight',
        'nove': 'nine',
        'dez': 'ten'
    },
    'es-ES': {
        'food': 'comida',
        'play': 'jugar',
        'criando': 'creando',
        'creating': 'creando',
        'water': 'agua',
        'hello': 'hola',
        'goodbye': 'adiós',
        'thank you': 'gracias',
        'please': 'por favor',
        'yes': 'sí',
        'no': 'no',
        'help': 'ayuda',
        'bathroom': 'baño',
        'hungry': 'hambre',
        'thirsty': 'sed',
        'tired': 'cansado',
        'happy': 'feliz',
        'sad': 'triste',
        'angry': 'enojado',
        'scared': 'miedo',
        'pain': 'dolor',
        'home': 'casa',
        'school': 'escuela',
        'doctor': 'médico',
        'hospital': 'hospital',
        'car': 'coche',
        'bus': 'autobús',
        'train': 'tren',
        'airplane': 'avión',
        'dog': 'perro',
        'cat': 'gato',
        'bird': 'pájaro',
        'fish': 'pez',
        'apple': 'manzana',
        'banana': 'plátano',
        'bread': 'pan',
        'milk': 'leche',
        'juice': 'zumo',
        'cookie': 'galleta',
        'cake': 'pastel',
        'pizza': 'pizza',
        'hamburger': 'hamburguesa',
        'sleep': 'dormir',
        'wake up': 'despertar',
        'eat': 'comer',
        'drink': 'beber',
        'run': 'correr',
        'walk': 'caminar',
        'jump': 'saltar',
        'sit': 'sentarse',
        'stand': 'pararse',
        'stop': 'parar',
        'go': 'ir',
        'come': 'venir',
        'open': 'abrir',
        'close': 'cerrar',
        'big': 'grande',
        'small': 'pequeño',
        'hot': 'caliente',
        'cold': 'frío',
        'good': 'bueno',
        'bad': 'malo',
        'more': 'más',
        'less': 'menos',
        'again': 'otra vez',
        'finished': 'terminado',
        'want': 'querer',
        'like': 'gustar',
        'don\'t like': 'no gustar',
        'mom': 'mamá',
        'dad': 'papá',
        'brother': 'hermano',
        'sister': 'hermana',
        'friend': 'amigo',
        'teacher': 'maestro',
        'book': 'libro',
        'toy': 'juguete',
        'ball': 'pelota',
        'music': 'música',
        'tv': 'televisión',
        'phone': 'teléfono',
        'computer': 'computadora',
        'tablet': 'tableta',
        'shirt': 'camisa',
        'pants': 'pantalones',
        'shoes': 'zapatos',
        'hat': 'sombrero',
        'red': 'rojo',
        'blue': 'azul',
        'green': 'verde',
        'yellow': 'amarillo',
        'orange': 'naranja',
        'purple': 'morado',
        'black': 'negro',
        'white': 'blanco',
        'brown': 'marrón',
        'pink': 'rosa',
        'one': 'uno',
        'two': 'dos',
        'three': 'tres',
        'four': 'cuatro',
        'five': 'cinco',
        'six': 'seis',
        'seven': 'siete',
        'eight': 'ocho',
        'nine': 'nueve',
        'ten': 'diez'
    }
};

// Função para traduzir texto baseado no idioma atual
function translateText(text, targetLang = null) {
    if (!text) return text;
    
    const lang = targetLang || localStorage.getItem('appLanguage') || 'pt-BR';
    
    // Normalizar texto (lowercase, trim)
    const normalizedText = text.toLowerCase().trim();
    
    // Buscar tradução no dicionário
    const translations = wordTranslations[lang] || wordTranslations['pt-BR'];
    
    // Tentar encontrar tradução exata
    if (translations[normalizedText]) {
        return translations[normalizedText];
    }
    
    // Tentar encontrar tradução case-insensitive
    for (const [key, value] of Object.entries(translations)) {
        if (key.toLowerCase() === normalizedText) {
            return value;
        }
    }
    
    // Se não encontrar tradução, retorna o texto original
    return text;
}

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

// ============================================
// CLASSE PRINCIPAL DA APLICAÇÃO
// ============================================
// Organização:
// - Métodos de inicialização (constructor, initializeElements, bindEvents)
// - Métodos de UI (renderMainCategories, showSubCategories, createCategoryCard, etc.)
// - Métodos de modais (openCreateCategoryModal, openCreateSpeechModal, etc.)
// - Métodos de dados (exportData, importData, recordUsage, etc.)
// - Métodos de ARASAAC (buscarPictogramasARASAAC, converterUrlParaBase64, etc.)
// - Métodos de utilidades (sanitizeInput, validateCategoryName, compressImage, etc.)
// - Métodos de configurações (loadUserPreferences, applyTheme, setLanguage, etc.)
// ============================================
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
        this.setupOfflineDetection();
    }

    setupOfflineDetection() {
        // Detecta quando fica offline
        window.addEventListener('online', () => {
            this.updateStatus('Conexão restaurada');
            this.hideOfflineWarning();
        });
        
        window.addEventListener('offline', () => {
            this.updateStatus('Modo offline - Alguns recursos podem estar indisponíveis');
            this.showOfflineWarning();
        });
        
        // Verifica status inicial
        if (!navigator.onLine) {
            this.showOfflineWarning();
        }
    }

    showOfflineWarning() {
        let warning = document.getElementById('offlineWarning');
        if (!warning) {
            warning = document.createElement('div');
            warning.id = 'offlineWarning';
            warning.style.cssText = 'position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: #ff9800; color: white; padding: 15px 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); z-index: 10000; display: flex; align-items: center; gap: 10px; font-size: 14px;';
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            warning.innerHTML = `<i class="fas fa-wifi" style="font-size: 18px;"></i> <span>${t('arasaacOfflineWarning')}</span>`;
            document.body.appendChild(warning);
        } else {
            warning.style.display = 'flex';
        }
    }

    hideOfflineWarning() {
        const warning = document.getElementById('offlineWarning');
        if (warning) {
            warning.style.display = 'none';
        }
    }

    initializeElements() {
        this.categoriesContainer = document.getElementById('categoriesContainer');
        this.backButton = document.getElementById('backButton');
        this.settingsButton = document.getElementById('settingsButton');
        this.statusText = document.getElementById('statusText');
        this.loadingIndicator = document.getElementById('loadingIndicator');
        this.errorMessage = document.getElementById('errorMessage');
        this.errorText = document.getElementById('errorText');
        this.closeError = document.getElementById('closeError');
        this.createCategoryBtn = document.getElementById('createCategoryBtn');
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
        this.togglePresentationModeBtn = document.getElementById('togglePresentationModeBtn');
        this.presentationMode = false;
    }
    
    // Métodos auxiliares para obter elementos do modal
    getVoiceSelectFromModal() {
        return document.getElementById('voiceSelectModal');
    }
    
    getSpeedControlFromModal() {
        return document.getElementById('speedControlModal');
    }
    
    getToneControlFromModal() {
        return document.getElementById('toneControlModal');
    }
    
    getVoiceSelect() {
        return this.getVoiceSelectFromModal();
    }
    
    getSpeedControl() {
        return this.getSpeedControlFromModal();
    }
    
    getToneControl() {
        return this.getToneControlFromModal();
    }
    
    loadVoiceControlsInModal() {
        const voiceSelectModal = this.getVoiceSelectFromModal();
        const speedControlModal = this.getSpeedControlFromModal();
        const toneControlModal = this.getToneControlFromModal();
        
        // Carregar valores salvos
        const savedSpeed = localStorage.getItem('communicationApp_speed') || '1.0';
        const savedTone = localStorage.getItem('communicationApp_tone') || '1.0';
        const savedVoice = localStorage.getItem('communicationApp_voice');
        
        if (speedControlModal) {
            speedControlModal.value = savedSpeed;
        }
        
        if (toneControlModal) {
            toneControlModal.value = savedTone;
        }
        
        // Carregar vozes no select do modal
        if (voiceSelectModal && this.availableVoices && this.availableVoices.length > 0) {
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            this.updateVoicesForLanguage(lang, savedVoice);
        } else if (voiceSelectModal) {
            // Se vozes ainda não foram carregadas, carregar agora
            this.loadVoices().then(() => {
                const lang = localStorage.getItem('appLanguage') || 'pt-BR';
                const savedVoice = localStorage.getItem('communicationApp_voice');
                this.updateVoicesForLanguage(lang, savedVoice);
            }).catch(() => {
                const lang = localStorage.getItem('appLanguage') || 'pt-BR';
                const t = (key) => getTranslation(key, lang);
                voiceSelectModal.innerHTML = `<option value="">${t('noVoices')}</option>`;
            });
        }
    }
    
    // Método para atualizar vozes disponíveis baseado no idioma selecionado
    updateVoicesForLanguage(lang, savedVoice = null) {
        const voiceSelectModal = this.getVoiceSelectFromModal();
        if (!voiceSelectModal) return;
        
        // Se vozes ainda não foram carregadas, tentar carregar
        if (!this.availableVoices || this.availableVoices.length === 0) {
            this.loadVoices().then(() => {
                this.updateVoicesForLanguage(lang, savedVoice);
            }).catch(() => {
                const t = (key) => getTranslation(key, lang);
                voiceSelectModal.innerHTML = `<option value="">${t('noVoices')}</option>`;
            });
            return;
        }
        
        const langCode = lang.split('-')[0];
        
        // Filtrar vozes do idioma selecionado
        const filteredVoices = this.availableVoices.filter(voice => {
            return voice.lang && voice.lang.toLowerCase().startsWith(langCode.toLowerCase());
        });
        
        voiceSelectModal.innerHTML = '';
        
        if (filteredVoices.length > 0) {
            filteredVoices.forEach(voice => {
                const option = document.createElement('option');
                option.value = voice.name;
                option.textContent = `${voice.name} (${voice.lang})`;
                voiceSelectModal.appendChild(option);
            });
            
            // Selecionar voz salva se disponível no novo idioma, senão selecionar a primeira
            const voiceToSelect = savedVoice || localStorage.getItem('communicationApp_voice');
            if (voiceToSelect) {
                const voiceExists = filteredVoices.some(v => v.name === voiceToSelect);
                if (voiceExists) {
                    voiceSelectModal.value = voiceToSelect;
                } else if (filteredVoices.length > 0) {
                    // Se a voz salva não está disponível no novo idioma, selecionar a primeira do novo idioma
                    voiceSelectModal.value = filteredVoices[0].name;
                }
            } else if (filteredVoices.length > 0) {
                voiceSelectModal.value = filteredVoices[0].name;
            }
        } else {
            // Se não houver vozes no idioma, mostrar todas com aviso
            const t = (key) => getTranslation(key, lang);
            voiceSelectModal.innerHTML = `<option value="">${t('noVoices')} - ${langCode.toUpperCase()}</option>`;
            
            // Mostrar todas as vozes disponíveis como fallback
            this.availableVoices.forEach(voice => {
                const option = document.createElement('option');
                option.value = voice.name;
                option.textContent = `${voice.name} (${voice.lang})`;
                voiceSelectModal.appendChild(option);
            });
            
            const voiceToSelectFallback = savedVoice || localStorage.getItem('communicationApp_voice');
            if (voiceToSelectFallback) {
                const voiceExists = this.availableVoices.some(v => v.name === voiceToSelectFallback);
                if (voiceExists) {
                    voiceSelectModal.value = voiceToSelectFallback;
                } else if (this.availableVoices.length > 0) {
                    voiceSelectModal.value = this.availableVoices[0].name;
                }
            } else if (this.availableVoices.length > 0) {
                voiceSelectModal.value = this.availableVoices[0].name;
            }
        }
    }
    
    testVoiceFromModal() {
        const voiceSelectModal = this.getVoiceSelectFromModal();
        if (!voiceSelectModal || !this.availableVoices || this.availableVoices.length === 0) {
            return;
        }
        
        const selectedVoice = voiceSelectModal.value;
        if (selectedVoice) {
            const voice = this.availableVoices.find(v => v.name === selectedVoice);
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            
            // Mensagem de teste adaptada ao idioma da voz
            let testMessage = 'Olá, esta é uma voz de teste.';
            if (voice && voice.lang) {
                if (voice.lang.startsWith('en')) {
                    testMessage = 'Hello, this is a test voice.';
                } else if (voice.lang.startsWith('es')) {
                    testMessage = 'Hola, esta es una voz de prueba.';
                } else if (voice.lang.startsWith('fr')) {
                    testMessage = 'Bonjour, ceci est une voix de test.';
                } else if (voice.lang.startsWith('de')) {
                    testMessage = 'Hallo, dies ist eine Teststimme.';
                }
            }
            
            this.speakText(testMessage);
        }
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
        if (this.toggleCreateCategoryBtn) {
            this.toggleCreateCategoryBtn.addEventListener('click', () => {
                if (this.currentCategory === null) {
                    this.openCreateCategoryModal();
                } else {
                    this.openCreateSpeechModal();
                }
            });
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
        if (this.togglePresentationModeBtn) {
            this.togglePresentationModeBtn.addEventListener('click', () => this.togglePresentationMode());
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
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            this.updateStatus(getTranslation('ready', lang));
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
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            this.updateStatus(getTranslation('deleteModeCategories', lang));
        } else {
            this.toggleDeleteModeBtn.style.background = 'rgba(231, 76, 60, 0.1)';
            this.toggleDeleteModeBtn.style.borderColor = 'rgba(231, 76, 60, 0.3)';
            this.toggleDeleteModeBtn.style.color = '#e74c3c';
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            this.updateStatus(getTranslation('ready', lang));
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
        } else {
            // Dentro de categoria: mostrar "Criar Fala"
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            this.createCategoryBtn.innerHTML = `<i class="fas fa-microphone" style="font-size: 1.2em; margin-right: 6px;"></i> ${t('createSpeech')}`;
            this.createCategoryBtn.setAttribute('aria-label', t('createSpeech'));
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
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            this.updateStatus(getTranslation('ready', lang));
        } catch (error) {
            this.hideLoading();
            this.showError('Erro ao inicializar aplicativo: ' + error.message);
        }
    }

    initializeExampleData() {
        // Remove todas as categorias customizadas do localStorage
        // O app iniciará sem nenhum card de apresentação
        localStorage.removeItem('customCategories');
        localStorage.removeItem('customSpeeches');
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
        
        // Traduzir título da categoria para exibição no card
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const originalTitle = category.title; // Guardar título original para uso interno
        const translatedTitle = translateText(originalTitle, lang);
        
        const ariaLabel = category.description ? `${translatedTitle}: ${category.description}` : translatedTitle;
        card.setAttribute('aria-label', ariaLabel);
        card.setAttribute('data-original-title', originalTitle); // Armazenar título original
        
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
        
        card.style.position = 'relative';
        
        // Se tiver foto, usa a mesma estrutura do card de subcategoria
        if (category.photo) {
            card.innerHTML = `
                ${checkboxHtml}
                <div class="card-icon-with-image">
                    <img src="${category.photo}" alt="${translatedTitle}" />
                </div>
                <div class="card-content">
                    <h3 class='cat-title-editable' data-cat-id='${category.id}' style='cursor:${category.id.startsWith('custom_') ? 'pointer' : 'auto'};'>${translatedTitle}</h3>
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
                    <h3 class='cat-title-editable' data-cat-id='${category.id}' style='cursor:${category.id.startsWith('custom_') ? 'pointer' : 'auto'};'>${translatedTitle}</h3>
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
        
        // Traduzir texto do item para exibição no card
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const originalText = item.text; // Guardar texto original para uso interno
        const translatedText = translateText(originalText, lang);
        
        card.setAttribute('aria-label', `Selecionar: ${translatedText}`);
        card.setAttribute('data-original-text', originalText); // Armazenar texto original
        
        // Só mostra checkbox se modo exclusão estiver ativo E o item não for padrão (itemIndex !== null)
        // Itens padrão não podem ser excluídos
        const canDelete = this.deleteSubcategoryMode && itemIndex !== null;
        const checkboxHtml = canDelete ? `
            <div class="delete-checkbox-wrapper">
                <input type="checkbox" class="delete-subcategory-checkbox" data-item-text="${originalText}" data-item-index="${itemIndex}" id="delete-sub-${itemIndex}-${originalText.replace(/[^a-zA-Z0-9]/g, '')}" />
                <label for="delete-sub-${itemIndex}-${originalText.replace(/[^a-zA-Z0-9]/g, '')}" class="delete-checkbox-label">Excluir</label>
            </div>
        ` : '';
        
        card.style.position = 'relative';
        
        // Se tiver imagem exportada, usar ela ao invés de ícone
        if (item.image) {
            card.innerHTML = `
                ${checkboxHtml}
                <div class="card-icon-with-image">
                    <img src="${item.image}" alt="${translatedText}" />
                </div>
                <div class="card-content">
                    <h3>${translatedText}</h3>
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
                    <h3>${translatedText}</h3>
                </div>
            `;
        }
        
        
        // Se modo exclusão ativo E item pode ser excluído, não seleciona item ao clicar
        if (!canDelete) {
            // Passar tanto o texto original quanto o traduzido
            card.addEventListener('click', () => this.selectItem(originalText, card, translatedText));
            // Duplo clique para editar
            card.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                this.openEditSpeechModal(item, itemIndex);
            });
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.selectItem(originalText, card, translatedText);
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

    selectItem(text, card, translatedText = null) {
        // Remove seleção anterior
        if (this.selectedCard) {
            this.selectedCard.classList.remove('selected');
        }
        
        // Seleciona novo item
        this.selectedCard = card;
        card.classList.add('selected');
        this.currentText = text;
        
        // Registra uso da fala (sempre usa o texto original para manter consistência)
        this.recordUsage(text);
        
        // Fala automaticamente usando o texto traduzido se disponível
        const textToSpeak = translatedText || translateText(text, localStorage.getItem('appLanguage') || 'pt-BR');
        this.speakText(textToSpeak);
    }

    recordUsage(text) {
        try {
            const usageStats = JSON.parse(localStorage.getItem('usageStats') || '{}');
            
            // Manter compatibilidade com estrutura antiga
            if (!usageStats.speeches) {
                usageStats.speeches = {};
            }
            if (!usageStats.speeches[text]) {
                usageStats.speeches[text] = 0;
            }
            usageStats.speeches[text]++;
            
            // Registrar histórico completo
            if (!usageStats.history) {
                usageStats.history = [];
            }
            
            const now = new Date();
            const timestamp = now.toISOString();
            const hour = now.getHours();
            const dayOfWeek = now.getDay(); // 0 = Domingo, 6 = Sábado
            const category = this.currentCategory || 'main'; // Categoria atual ou 'main' se estiver na tela principal
            
            // Adicionar entrada no histórico
            usageStats.history.push({
                text: text,
                category: category,
                timestamp: timestamp,
                hour: hour,
                dayOfWeek: dayOfWeek
            });
            
            // Limitar histórico a últimos 1000 registros para não sobrecarregar localStorage
            if (usageStats.history.length > 1000) {
                usageStats.history = usageStats.history.slice(-1000);
            }
            
            // Atualizar timestamps
            usageStats.lastUsed = timestamp;
            if (!usageStats.firstUsed) {
                usageStats.firstUsed = timestamp;
            }
            
            localStorage.setItem('usageStats', JSON.stringify(usageStats));
        } catch (error) {
            console.warn('Erro ao registrar uso:', error);
        }
    }

    getUsageCount(text) {
        try {
            const usageStats = JSON.parse(localStorage.getItem('usageStats') || '{}');
            return usageStats.speeches && usageStats.speeches[text] ? usageStats.speeches[text] : 0;
        } catch (error) {
            return 0;
        }
    }
    
    // Métodos de Filtro por Período
    filterStatsByPeriod(period) {
        const usageStats = JSON.parse(localStorage.getItem('usageStats') || '{}');
        const history = usageStats.history || [];
        
        if (!history.length) {
            // Se não houver histórico, retornar dados baseados em contadores
            return this.getStatsFromCounters(period);
        }
        
        const now = new Date();
        let filteredHistory = [];
        
        switch(period) {
            case 'today':
                const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                filteredHistory = history.filter(h => new Date(h.timestamp) >= todayStart);
                break;
            case 'thisWeek':
                const weekStart = new Date(now);
                weekStart.setDate(now.getDate() - now.getDay());
                weekStart.setHours(0, 0, 0, 0);
                filteredHistory = history.filter(h => new Date(h.timestamp) >= weekStart);
                break;
            case 'thisMonth':
                const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
                filteredHistory = history.filter(h => new Date(h.timestamp) >= monthStart);
                break;
            case 'last7Days':
                const last7Days = new Date(now);
                last7Days.setDate(now.getDate() - 7);
                filteredHistory = history.filter(h => new Date(h.timestamp) >= last7Days);
                break;
            case 'last30Days':
                const last30Days = new Date(now);
                last30Days.setDate(now.getDate() - 30);
                filteredHistory = history.filter(h => new Date(h.timestamp) >= last30Days);
                break;
            case 'allTime':
            default:
                filteredHistory = history;
                break;
        }
        
        return this.calculatePeriodStats(filteredHistory);
    }
    
    getStatsFromCounters(period) {
        // Fallback para dados antigos sem histórico
        const usageStats = JSON.parse(localStorage.getItem('usageStats') || '{}');
        const speeches = usageStats.speeches || {};
        
        return {
            speeches: speeches,
            totalUses: Object.values(speeches).reduce((a, b) => a + b, 0),
            history: []
        };
    }
    
    calculatePeriodStats(history) {
        const speeches = {};
        let totalUses = 0;
        
        history.forEach(entry => {
            if (!speeches[entry.text]) {
                speeches[entry.text] = 0;
            }
            speeches[entry.text]++;
            totalUses++;
        });
        
        return {
            speeches: speeches,
            totalUses: totalUses,
            history: history
        };
    }
    
    // Métodos de Análise
    getMostUsedCategory(period = 'allTime') {
        const stats = this.filterStatsByPeriod(period);
        const history = stats.history || [];
        
        if (!history.length) {
            return null;
        }
        
        const categoryCounts = {};
        history.forEach(entry => {
            if (entry.category && entry.category !== 'main') {
                categoryCounts[entry.category] = (categoryCounts[entry.category] || 0) + 1;
            }
        });
        
        if (Object.keys(categoryCounts).length === 0) {
            return null;
        }
        
        const mostUsed = Object.entries(categoryCounts)
            .sort((a, b) => b[1] - a[1])[0];
        
        return {
            categoryId: mostUsed[0],
            count: mostUsed[1],
            title: this.getCategoryTitle(mostUsed[0])
        };
    }
    
    getMostUsedSpeech(period = 'allTime') {
        const stats = this.filterStatsByPeriod(period);
        const speeches = stats.speeches || {};
        
        if (Object.keys(speeches).length === 0) {
            return null;
        }
        
        const sorted = Object.entries(speeches)
            .sort((a, b) => b[1] - a[1]);
        
        if (sorted.length === 0) {
            return null;
        }
        
        return {
            text: sorted[0][0],
            count: sorted[0][1]
        };
    }
    
    getUsageByTimeOfDay(period = 'allTime') {
        const stats = this.filterStatsByPeriod(period);
        const history = stats.history || [];
        
        const timeCounts = {
            morning: 0,    // 6-12h
            afternoon: 0, // 12-18h
            night: 0       // 18-6h
        };
        
        history.forEach(entry => {
            const hour = entry.hour;
            if (hour >= 6 && hour < 12) {
                timeCounts.morning++;
            } else if (hour >= 12 && hour < 18) {
                timeCounts.afternoon++;
            } else {
                timeCounts.night++;
            }
        });
        
        const total = timeCounts.morning + timeCounts.afternoon + timeCounts.night;
        const mostActive = Object.entries(timeCounts)
            .sort((a, b) => b[1] - a[1])[0];
        
        return {
            morning: timeCounts.morning,
            afternoon: timeCounts.afternoon,
            night: timeCounts.night,
            total: total,
            mostActive: mostActive[0],
            mostActiveCount: mostActive[1]
        };
    }
    
    getUsagePatterns(period = 'allTime') {
        const stats = this.filterStatsByPeriod(period);
        const history = stats.history || [];
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        
        const dayCounts = {
            0: 0, // Domingo
            1: 0, // Segunda
            2: 0, // Terça
            3: 0, // Quarta
            4: 0, // Quinta
            5: 0, // Sexta
            6: 0  // Sábado
        };
        
        history.forEach(entry => {
            if (entry.dayOfWeek !== undefined) {
                dayCounts[entry.dayOfWeek] = (dayCounts[entry.dayOfWeek] || 0) + 1;
            }
        });
        
        const sorted = Object.entries(dayCounts).sort((a, b) => b[1] - a[1]);
        const mostActiveDay = sorted[0];
        
        // Traduzir nomes dos dias
        const dayNames = {
            'pt-BR': ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            'en-US': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            'es-ES': ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
        };
        
        const dayNamesList = dayNames[lang] || dayNames['pt-BR'];
        
        return {
            dayCounts: dayCounts,
            mostActiveDay: parseInt(mostActiveDay[0]),
            mostActiveDayName: dayNamesList[parseInt(mostActiveDay[0])],
            mostActiveDayCount: mostActiveDay[1]
        };
    }
    
    getUnusedSpeeches(days = 30) {
        const usageStats = JSON.parse(localStorage.getItem('usageStats') || '{}');
        const history = usageStats.history || [];
        const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
        
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - days);
        
        // Obter todas as falas usadas recentemente
        const recentlyUsed = new Set();
        history.forEach(entry => {
            if (new Date(entry.timestamp) >= cutoffDate) {
                recentlyUsed.add(entry.text);
            }
        });
        
        // Obter todas as falas disponíveis
        const allSpeeches = new Set();
        Object.values(customSpeeches).forEach(arr => {
            if (Array.isArray(arr)) {
                arr.forEach(speech => {
                    if (typeof speech === 'string') {
                        allSpeeches.add(speech);
                    } else if (speech.text) {
                        allSpeeches.add(speech.text);
                    }
                });
            }
        });
        
        // Falas não usadas
        const unused = Array.from(allSpeeches).filter(text => !recentlyUsed.has(text));
        
        return unused.map(text => {
            const lastUsed = history
                .filter(h => h.text === text)
                .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
            
            const daysSince = lastUsed 
                ? Math.floor((new Date() - new Date(lastUsed.timestamp)) / (1000 * 60 * 60 * 24))
                : days;
            
            return {
                text: text,
                daysSince: daysSince
            };
        }).filter(item => item.daysSince >= days);
    }
    
    getCategoryUsageStats(period = 'allTime') {
        const stats = this.filterStatsByPeriod(period);
        const history = stats.history || [];
        
        const categoryStats = {};
        
        history.forEach(entry => {
            const catId = entry.category || 'main';
            if (!categoryStats[catId]) {
                categoryStats[catId] = {
                    categoryId: catId,
                    title: this.getCategoryTitle(catId),
                    count: 0,
                    speeches: {}
                };
            }
            categoryStats[catId].count++;
            if (!categoryStats[catId].speeches[entry.text]) {
                categoryStats[catId].speeches[entry.text] = 0;
            }
            categoryStats[catId].speeches[entry.text]++;
        });
        
        return Object.values(categoryStats).sort((a, b) => b.count - a.count);
    }
    
    getCategoryTitle(categoryId) {
        if (categoryId === 'main') {
            return 'Principal';
        }
        
        const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
        const category = customCategories.find(cat => cat.id === categoryId);
        
        if (category) {
            return category.title;
        }
        
        return categoryId;
    }
    
    getCategoryColor(categoryId) {
        // Gerar cor consistente baseada no ID da categoria
        let hash = 0;
        for (let i = 0; i < categoryId.length; i++) {
            hash = categoryId.charCodeAt(i) + ((hash << 5) - hash);
        }
        
        const hue = Math.abs(hash) % 360;
        return `hsl(${hue}, 70%, 50%)`;
    }
    
    generateSuggestions(period = 'allTime') {
        const suggestions = [];
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        
        // Sugestão 1: Categoria mais usada
        const mostUsedCategory = this.getMostUsedCategory(period);
        if (mostUsedCategory && mostUsedCategory.count >= 5) {
            suggestions.push({
                type: 'createMore',
                category: mostUsedCategory.title,
                categoryId: mostUsedCategory.categoryId,
                message: t('suggestionCreateMore').replace('{category}', mostUsedCategory.title)
            });
        }
        
        // Sugestão 2: Categorias não usadas há 30 dias
        const categoryStats = this.getCategoryUsageStats(period);
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        categoryStats.forEach(cat => {
            const lastUsed = this.getCategoryLastUsed(cat.categoryId);
            if (lastUsed && new Date(lastUsed) < thirtyDaysAgo) {
                suggestions.push({
                    type: 'unusedCategory',
                    category: cat.title,
                    categoryId: cat.categoryId,
                    message: t('categoryNotUsed').replace('{category}', cat.title)
                });
            }
        });
        
        return suggestions;
    }
    
    getCategoryLastUsed(categoryId) {
        const usageStats = JSON.parse(localStorage.getItem('usageStats') || '{}');
        const history = usageStats.history || [];
        
        const categoryHistory = history
            .filter(h => h.category === categoryId)
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        return categoryHistory.length > 0 ? categoryHistory[0].timestamp : null;
    }
    
    // Métodos de Exportação e Limpeza
    exportStats(format = 'json') {
        try {
            const usageStats = JSON.parse(localStorage.getItem('usageStats') || '{}');
            const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
            const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
            
            if (format === 'csv') {
                // Exportar como CSV
                let csv = 'Data,Hora,Texto,Categoria\n';
                
                if (usageStats.history && usageStats.history.length > 0) {
                    usageStats.history.forEach(entry => {
                        const date = new Date(entry.timestamp);
                        const dateStr = date.toLocaleDateString('pt-BR');
                        const timeStr = date.toLocaleTimeString('pt-BR');
                        csv += `"${dateStr}","${timeStr}","${entry.text}","${entry.category || 'main'}"\n`;
                    });
                } else {
                    // Fallback para contadores
                    Object.entries(usageStats.speeches || {}).forEach(([text, count]) => {
                        csv += `"N/A","N/A","${text}","N/A",${count}\n`;
                    });
                }
                
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `estatisticas-${new Date().toISOString().split('T')[0]}.csv`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            } else {
                // Exportar como JSON
                const exportData = {
                    version: '2.0',
                    exportDate: new Date().toISOString(),
                    statistics: usageStats,
                    categories: customCategories,
                    speeches: customSpeeches
                };
                
                const dataStr = JSON.stringify(exportData, null, 2);
                const blob = new Blob([dataStr], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `estatisticas-${new Date().toISOString().split('T')[0]}.json`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            }
            
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            this.updateStatus(t('dataExported'));
        } catch (error) {
            this.showError('Erro ao exportar estatísticas: ' + error.message);
        }
    }
    
    clearStats() {
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        
        const confirmed = confirm(t('confirmClearStats'));
        if (!confirmed) {
            return;
        }
        
        try {
            localStorage.removeItem('usageStats');
            this.updateStatus(t('statsCleared'));
            
            // Fechar modal de estatísticas se estiver aberto
            const statsModal = document.getElementById('statsModal');
            if (statsModal) {
                statsModal.remove();
            }
        } catch (error) {
            this.showError('Erro ao limpar estatísticas: ' + error.message);
        }
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
            // Ocultar botão de configurações nas subcategorias (configuração de voz apenas na página principal)
            if (this.settingsButton) {
                this.settingsButton.style.display = 'none';
            }
            // Ocultar controles de voz ao entrar em subcategoria
            this.selectedCard = null;
            let subItems = subCategories[categoryId] ? [...subCategories[categoryId]] : [];
            
            // Carrega falas customizadas do localStorage
            const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
            if (customSpeeches[categoryId] && Array.isArray(customSpeeches[categoryId])) {
                // Ordena falas customizadas por uso (mais usadas primeiro)
                const sortedCustomSpeeches = [...customSpeeches[categoryId]].sort((a, b) => {
                    const usageA = this.getUsageCount(a.text);
                    const usageB = this.getUsageCount(b.text);
                    return usageB - usageA; // Ordem decrescente
                });
                // Combina items padrão com falas customizadas ordenadas
                subItems = [...subItems, ...sortedCustomSpeeches];
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
                    const lang = localStorage.getItem('appLanguage') || 'pt-BR';
                    const t = (key) => getTranslation(key, lang);
                    this.categoriesContainer.innerHTML = `<p style="text-align: center; padding: 40px; color: #666;">${t('emptyCategoryMessage')}</p>`;
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
        // Mostrar botão de configurações novamente na página principal
        if (this.settingsButton) {
            this.settingsButton.style.display = 'block';
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
        
        this.renderMainCategories();
        this.updateCreateButton();
        this.updateStatus('Pronto para uso');
        // Limpar busca ao voltar
    }

    togglePresentationMode() {
        this.presentationMode = !this.presentationMode;
        document.body.classList.toggle('presentation-mode', this.presentationMode);
        
        if (this.presentationMode) {
            // Esconde controles desnecessários
            if (this.createCategoryWrapper) this.createCategoryWrapper.style.display = 'none';
            if (this.toggleCreateCategoryBtn) this.toggleCreateCategoryBtn.style.display = 'none';
            if (this.toggleDeleteModeBtn) this.toggleDeleteModeBtn.style.display = 'none';
            if (this.togglePresentationModeBtn) {
                this.togglePresentationModeBtn.innerHTML = '<i class="fas fa-compress" aria-hidden="true"></i>';
                this.togglePresentationModeBtn.title = 'Sair do Modo Apresentação';
            }
            
            // Aumenta tamanho dos cards
            if (this.categoriesContainer) {
                this.categoriesContainer.classList.add('presentation-cards');
            }
        } else {
            // Restaura controles
            if (this.createCategoryWrapper) this.createCategoryWrapper.style.display = '';
            if (this.toggleCreateCategoryBtn) this.toggleCreateCategoryBtn.style.display = '';
            if (this.toggleDeleteModeBtn) this.toggleDeleteModeBtn.style.display = '';
            if (this.togglePresentationModeBtn) {
                this.togglePresentationModeBtn.innerHTML = '<i class="fas fa-expand" aria-hidden="true"></i>';
                this.togglePresentationModeBtn.title = 'Modo Apresentação';
            }
            
            if (this.categoriesContainer) {
                this.categoriesContainer.classList.remove('presentation-cards');
            }
        }
        
        this.updateStatus(this.presentationMode ? 'Modo Apresentação ativado' : 'Modo Apresentação desativado');
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
        // Garantir que o botão de configurações está visível na página principal
        if (this.settingsButton) {
            this.settingsButton.style.display = 'block';
        }
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
            
            // Configurar voz - obter do modal ou localStorage
            const voiceSelect = this.getVoiceSelect();
            if (voiceSelect && this.availableVoices && this.availableVoices.length > 0) {
                const selectedVoice = voiceSelect.value;
                if (selectedVoice) {
                    const voice = this.availableVoices.find(v => v.name === selectedVoice);
                    if (voice) {
                        utterance.voice = voice;
                        utterance.lang = voice.lang || 'pt-BR';
                    } else {
                        utterance.lang = 'pt-BR';
                    }
                } else {
                    // Se não houver seleção no modal, usar voz salva
                    const savedVoice = localStorage.getItem('communicationApp_voice');
                    if (savedVoice) {
                        const voice = this.availableVoices.find(v => v.name === savedVoice);
                        if (voice) {
                            utterance.voice = voice;
                            utterance.lang = voice.lang || 'pt-BR';
                } else {
                    utterance.lang = 'pt-BR';
                }
            } else {
                utterance.lang = 'pt-BR';
                    }
                }
            } else {
                // Se modal não estiver aberto, usar voz salva
                const savedVoice = localStorage.getItem('communicationApp_voice');
                if (savedVoice && this.availableVoices && this.availableVoices.length > 0) {
                    const voice = this.availableVoices.find(v => v.name === savedVoice);
                    if (voice) {
                        utterance.voice = voice;
                        utterance.lang = voice.lang || 'pt-BR';
                    } else {
                        utterance.lang = 'pt-BR';
                    }
                } else {
                    utterance.lang = 'pt-BR';
                }
            }
            
            // Configurar velocidade (rate) - obter do modal ou localStorage
            let speed = 1.0;
            const speedControl = this.getSpeedControl();
            if (speedControl) {
                speed = parseFloat(speedControl.value) || 1.0;
            } else {
                // Se modal não estiver aberto, usar valor salvo
                const savedSpeed = localStorage.getItem('communicationApp_speed');
                if (savedSpeed) {
                    speed = parseFloat(savedSpeed) || 1.0;
                }
            }
            utterance.rate = Math.max(0.1, Math.min(10, speed));
            
            // Configurar tom (pitch) - obter do modal ou localStorage
            let pitch = 1.0;
            const toneControl = this.getToneControl();
            if (toneControl) {
                pitch = parseFloat(toneControl.value) || 1.0;
            } else {
                // Se modal não estiver aberto, usar valor salvo
                const savedTone = localStorage.getItem('communicationApp_tone');
                if (savedTone) {
                    pitch = parseFloat(savedTone) || 1.0;
                }
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
                const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            this.updateStatus(getTranslation('ready', lang));
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
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        modal.innerHTML = `
            <div class="modal-content settings-modal" role="dialog" aria-modal="true" aria-labelledby="settingsTitle" style="display: flex; flex-direction: column; max-height: 90vh;">
                <h2 id="settingsTitle"><i class="fas fa-cog"></i> ${t('settingsTitle')}</h2>
                <div class="settings-content" style="flex: 1; overflow-y: auto;">
                    <div class="setting-item">
                        <label>Volume:</label>
                        <input type="range" id="volumeSlider" min="0" max="1" step="0.1" value="${currentVolume}" />
                        <span id="volumeValue">${Math.round(currentVolume * 100)}%</span>
                    </div>
                    <div style="margin-top: 25px; padding-top: 25px; border-top: 2px solid #e9ecef;">
                        <h3 id="languageLabel" style="font-size: 16px; margin-bottom: 15px; color: #333;"><i class="fas fa-language"></i> ${t('language')}</h3>
                        <select id="languageSelect" style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 14px; margin-bottom: 15px;">
                            <option value="pt-BR">🇧🇷 Português (Brasil)</option>
                            <option value="pt-PT">🇵🇹 Português (Portugal)</option>
                            <option value="en-US">🇺🇸 English (United States)</option>
                            <option value="en-GB">🇬🇧 English (United Kingdom)</option>
                            <option value="en-AU">🇦🇺 English (Australia)</option>
                            <option value="es-ES">🇪🇸 Español (España)</option>
                            <option value="es-MX">🇲🇽 Español (México)</option>
                            <option value="es-AR">🇦🇷 Español (Argentina)</option>
                            <option value="fr-FR">🇫🇷 Français (France)</option>
                            <option value="fr-CA">🇨🇦 Français (Canada)</option>
                            <option value="de-DE">🇩🇪 Deutsch (Deutschland)</option>
                            <option value="it-IT">🇮🇹 Italiano (Italia)</option>
                            <option value="ja-JP">🇯🇵 日本語 (Japan)</option>
                            <option value="zh-CN">🇨🇳 中文 (简体)</option>
                            <option value="zh-TW">🇹🇼 中文 (繁體)</option>
                            <option value="ko-KR">🇰🇷 한국어 (Korea)</option>
                            <option value="ru-RU">🇷🇺 Русский (Russia)</option>
                            <option value="ar-SA">🇸🇦 العربية (Saudi Arabia)</option>
                            <option value="nl-NL">🇳🇱 Nederlands (Nederland)</option>
                            <option value="pl-PL">🇵🇱 Polski (Poland)</option>
                            <option value="sv-SE">🇸🇪 Svenska (Sweden)</option>
                            <option value="no-NO">🇳🇴 Norsk (Norway)</option>
                            <option value="da-DK">🇩🇰 Dansk (Denmark)</option>
                            <option value="fi-FI">🇫🇮 Suomi (Finland)</option>
                            <option value="tr-TR">🇹🇷 Türkçe (Turkey)</option>
                            <option value="hi-IN">🇮🇳 हिन्दी (India)</option>
                            <option value="th-TH">🇹🇭 ไทย (Thailand)</option>
                            <option value="vi-VN">🇻🇳 Tiếng Việt (Vietnam)</option>
                            <option value="cs-CZ">🇨🇿 Čeština (Czech Republic)</option>
                            <option value="hu-HU">🇭🇺 Magyar (Hungary)</option>
                            <option value="ro-RO">🇷🇴 Română (Romania)</option>
                            <option value="el-GR">🇬🇷 Ελληνικά (Greece)</option>
                        </select>
                    </div>
                    <div style="margin-top: 25px; padding-top: 25px; border-top: 2px solid #e9ecef;">
                        <h3 style="font-size: 16px; margin-bottom: 15px; color: #333;"><i class="fas fa-microphone"></i> ${t('voice')}</h3>
                        <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 15px;">
                            <select id="voiceSelectModal" style="flex: 1; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 14px;">
                                <option value="">${t('loadingVoices')}</option>
                            </select>
                            <button type="button" id="testVoiceBtnModal" style="padding: 10px 15px; background: #17a2b8; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; white-space: nowrap;">
                                <i class="fas fa-volume-up"></i> ${t('test')}
                            </button>
                        </div>
                    </div>
                    <div style="margin-top: 25px; padding-top: 25px; border-top: 2px solid #e9ecef;">
                        <h3 style="font-size: 16px; margin-bottom: 15px; color: #333;"><i class="fas fa-tachometer-alt"></i> ${t('speed')}</h3>
                        <select id="speedControlModal" style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 14px; margin-bottom: 15px;">
                            <option value="0.8">${t('slow')}</option>
                            <option value="1.0" selected>${t('normal')}</option>
                            <option value="1.2">${t('fast')}</option>
                        </select>
                    </div>
                    <div style="margin-top: 25px; padding-top: 25px; border-top: 2px solid #e9ecef;">
                        <h3 style="font-size: 16px; margin-bottom: 15px; color: #333;"><i class="fas fa-music"></i> ${t('tone')}</h3>
                        <select id="toneControlModal" style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 14px; margin-bottom: 15px;">
                            <option value="0.5">${t('veryLow')}</option>
                            <option value="0.75">${t('low')}</option>
                            <option value="1.0" selected>${t('normal')}</option>
                            <option value="1.25">${t('high')}</option>
                            <option value="1.5">${t('veryHigh')}</option>
                        </select>
                    </div>
                    <div style="margin-top: 25px; padding-top: 25px; border-top: 2px solid #e9ecef;">
                        <h3 id="themeLabel" style="font-size: 16px; margin-bottom: 15px; color: #333;"><i class="fas fa-palette"></i> ${t('theme')}</h3>
                        <select id="themeSelect" style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 14px; margin-bottom: 15px;">
                            <option value="light">${t('light')}</option>
                            <option value="dark">${t('dark')}</option>
                            <option value="high-contrast">${t('highContrast')}</option>
                        </select>
                    </div>
                    <div style="margin-top: 25px; padding-top: 25px; border-top: 2px solid #e9ecef;">
                        <h3 id="statsLabel" style="font-size: 16px; margin-bottom: 15px; color: #333;"><i class="fas fa-chart-bar"></i> ${t('statsTitle')}</h3>
                        <button type="button" id="showStatsBtn" style="width: 100%; padding: 12px; background: #17a2b8; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 15px;">
                            <i class="fas fa-chart-line"></i> ${t('showStats')}
                        </button>
                    </div>
                    <div style="margin-top: 25px; padding-top: 25px; border-top: 2px solid #e9ecef;">
                        <h3 id="backupLabel" style="font-size: 16px; margin-bottom: 15px; color: #333;"><i class="fas fa-database"></i> ${t('exportTitle')}</h3>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <button type="button" id="exportDataBtn" style="padding: 12px; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                <i class="fas fa-download"></i> ${t('export')}
                            </button>
                            <label style="display: block;">
                                <input type="file" id="importDataInput" accept=".json" style="display: none;" />
                                <button type="button" id="importDataBtn" style="width: 100%; padding: 12px; background: #007bff; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                    <i class="fas fa-upload"></i> ${t('import')}
                                </button>
                            </label>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e9ecef;">
                        <button type="button" id="applySettingsBtn" style="flex: 1; padding: 12px; background: linear-gradient(to right, #28a745, #20c997); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 2px 4px rgba(40, 167, 69, 0.3);">
                            <i class="fas fa-check-circle"></i> ${t('saveChanges')}
                        </button>
                        <button type="button" id="closeSettingsModal" class="close-settings-btn" style="flex: 1;">${t('close')}</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Variáveis para rastrear mudanças
        let languageChanged = false;
        let themeChanged = false;
        let originalLanguage = localStorage.getItem('appLanguage') || 'pt-BR';
        let originalTheme = localStorage.getItem('appTheme') || 'light';
        
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeValue = document.getElementById('volumeValue');
        volumeSlider.addEventListener('input', (e) => {
            const value = parseFloat(e.target.value);
            volumeValue.textContent = Math.round(value * 100) + '%';
            this.volume = value;
            // Não salvar ainda, apenas atualizar em memória
        });
        
        // Botão Aplicar - aplica todas as mudanças
        document.getElementById('applySettingsBtn').onclick = () => {
            // Salvar preferências de voz, velocidade e tom
            const voiceSelectModal = document.getElementById('voiceSelectModal');
            const speedControlModal = document.getElementById('speedControlModal');
            const toneControlModal = document.getElementById('toneControlModal');
            
            if (voiceSelectModal && voiceSelectModal.value) {
                localStorage.setItem('communicationApp_voice', voiceSelectModal.value);
            }
            if (speedControlModal) {
                localStorage.setItem('communicationApp_speed', speedControlModal.value);
            }
            if (toneControlModal) {
                localStorage.setItem('communicationApp_tone', toneControlModal.value);
            }
            
            // Salvar volume
            if (volumeSlider) {
                this.volume = parseFloat(volumeSlider.value);
                localStorage.setItem('communicationApp_volume', this.volume.toString());
            }
            
            // Aplicar idioma se mudou
            const languageSelect = document.getElementById('languageSelect');
            if (languageSelect && languageSelect.value !== originalLanguage) {
                this.setLanguage(languageSelect.value);
                languageChanged = true;
            }
            
            // Aplicar tema se mudou
            const themeSelect = document.getElementById('themeSelect');
            if (themeSelect && themeSelect.value !== originalTheme) {
                this.applyTheme(themeSelect.value);
                themeChanged = true;
            }
            
            // Salvar todas as preferências
            this.saveUserPreferences();
            
            // Fechar modal após aplicar
            modal.remove();
            
            // Mostrar mensagem de sucesso
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            this.updateStatus(t('saveChanges') + ' - ' + t('ready'));
        };
        
        // Botão Fechar - apenas fecha sem aplicar
        document.getElementById('closeSettingsModal').onclick = () => {
            // Reverter mudanças se não foram aplicadas
            const languageSelect = document.getElementById('languageSelect');
            const themeSelect = document.getElementById('themeSelect');
            
            if (languageSelect && languageSelect.value !== originalLanguage) {
                languageSelect.value = originalLanguage;
            }
            if (themeSelect && themeSelect.value !== originalTheme) {
                themeSelect.value = originalTheme;
            }
            
            modal.remove();
        };
        document.getElementById('showStatsBtn').onclick = () => {
            modal.remove();
            this.showStatsModal();
        };
        
        // Carregar idioma salvo (não aplicar ainda, apenas mostrar)
        const savedLanguage = localStorage.getItem('appLanguage') || 'pt-BR';
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.value = savedLanguage;
            // Não aplicar automaticamente - só quando clicar em "Salvar Alterações"
            
            // Atualizar vozes disponíveis quando o idioma mudar no select
            languageSelect.addEventListener('change', (e) => {
                const selectedLang = e.target.value;
                this.updateVoicesForLanguage(selectedLang);
            });
            
            // Carregar vozes para o idioma inicial
            this.updateVoicesForLanguage(savedLanguage);
        }
        
        // Carregar tema salvo (não aplicar ainda, apenas mostrar)
        const savedTheme = localStorage.getItem('appTheme') || 'light';
        const themeSelect = document.getElementById('themeSelect');
        if (themeSelect) {
            themeSelect.value = savedTheme;
            // Não aplicar automaticamente - só quando clicar em "Salvar Alterações"
        }
        
        // Carregar e configurar controles de voz, velocidade e tom
        // Nota: loadVoiceControlsInModal já será chamado pelo updateVoicesForLanguage
        // quando o idioma for carregado, então não precisamos chamar aqui
        const voiceSelectModal = this.getVoiceSelectFromModal();
        const speedControlModal = this.getSpeedControlFromModal();
        const toneControlModal = this.getToneControlFromModal();
        
        // Carregar valores salvos de velocidade e tom
        const savedSpeed = localStorage.getItem('communicationApp_speed') || '1.0';
        const savedTone = localStorage.getItem('communicationApp_tone') || '1.0';
        
        if (speedControlModal) {
            speedControlModal.value = savedSpeed;
        }
        
        if (toneControlModal) {
            toneControlModal.value = savedTone;
        }
        
        // Event listeners para os controles do modal
        const testVoiceBtnModal = document.getElementById('testVoiceBtnModal');
        
        // Não salvar automaticamente - será salvo apenas quando clicar em "Salvar Alterações"
        // Os controles podem ser alterados, mas só serão aplicados ao clicar no botão
        
        if (testVoiceBtnModal) {
            testVoiceBtnModal.addEventListener('click', () => {
                this.testVoiceFromModal();
            });
        }
        
        document.getElementById('exportDataBtn').onclick = () => this.exportData();
        document.getElementById('importDataBtn').onclick = () => {
            document.getElementById('importDataInput').click();
        };
        document.getElementById('importDataInput').addEventListener('change', (e) => {
            this.importData(e);
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    exportData() {
        try {
            const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
            const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
            const preferences = {
                speed: localStorage.getItem('communicationApp_speed'),
                tone: localStorage.getItem('communicationApp_tone'),
                voice: localStorage.getItem('communicationApp_voice'),
                volume: localStorage.getItem('communicationApp_volume'),
                createCategoryBtnVisible: localStorage.getItem('createCategoryBtnVisible')
            };

            const exportData = {
                version: '1.0',
                exportDate: new Date().toISOString(),
                categories: customCategories,
                speeches: customSpeeches,
                preferences: preferences
            };

            const dataStr = JSON.stringify(exportData, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `comunicacao-alternativa-backup-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            this.updateStatus('Dados exportados com sucesso!');
        } catch (error) {
            this.showError('Erro ao exportar dados: ' + error.message);
        }
    }

    async importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        try {
            this.showLoading('Importando dados...');
            const text = await file.text();
            const importData = JSON.parse(text);

            if (!importData.categories || !importData.speeches) {
                throw new Error('Formato de arquivo inválido');
            }

            // Confirmar importação
            const confirmImport = confirm(
                `Deseja importar os dados?\n\n` +
                `- ${importData.categories.length} categorias\n` +
                `- ${Object.keys(importData.speeches).length} categorias com falas\n\n` +
                `ATENÇÃO: Isso substituirá seus dados atuais!`
            );

            if (!confirmImport) {
                this.hideLoading();
                return;
            }

            // Importar dados
            localStorage.setItem('customCategories', JSON.stringify(importData.categories));
            localStorage.setItem('customSpeeches', JSON.stringify(importData.speeches));

            // Importar preferências se existirem
            if (importData.preferences) {
                if (importData.preferences.speed) localStorage.setItem('communicationApp_speed', importData.preferences.speed);
                if (importData.preferences.tone) localStorage.setItem('communicationApp_tone', importData.preferences.tone);
                if (importData.preferences.voice) localStorage.setItem('communicationApp_voice', importData.preferences.voice);
                if (importData.preferences.volume) localStorage.setItem('communicationApp_volume', importData.preferences.volume);
                if (importData.preferences.createCategoryBtnVisible) localStorage.setItem('createCategoryBtnVisible', importData.preferences.createCategoryBtnVisible);
            }

            this.hideLoading();
            this.updateStatus('Dados importados com sucesso!');
            
            // Recarregar preferências e recriar interface
            this.loadUserPreferences();
            this.renderMainCategories();
            
            // Se estava dentro de uma categoria, volta para principal
            if (this.currentCategory) {
                this.goBack();
            }
        } catch (error) {
            this.hideLoading();
            this.showError('Erro ao importar dados: ' + error.message);
        }
        
        // Limpar input
        event.target.value = '';
    }

    showStatsModal(selectedPeriod = 'allTime') {
        let modal = document.getElementById('statsModal');
        if (modal) modal.remove();
        modal = document.createElement('div');
        modal.id = 'statsModal';
        modal.className = 'modal-bg';
        
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        
        // Obter estatísticas filtradas
        const stats = this.filterStatsByPeriod(selectedPeriod);
        const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
        const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
        
        let totalSpeeches = 0;
        Object.values(customSpeeches).forEach(arr => {
            if (Array.isArray(arr)) totalSpeeches += arr.length;
        });
        
        // Análises avançadas
        const mostUsedCategory = this.getMostUsedCategory(selectedPeriod);
        const mostUsedSpeech = this.getMostUsedSpeech(selectedPeriod);
        const usageByTime = this.getUsageByTimeOfDay(selectedPeriod);
        const usagePatterns = this.getUsagePatterns(selectedPeriod);
        const suggestions = this.generateSuggestions(selectedPeriod);
        const unusedSpeeches = this.getUnusedSpeeches(30);
        
        // Top 10 para gráfico
        const top10 = stats.speeches ? Object.entries(stats.speeches)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10) : [];
        
        const maxCount = top10.length > 0 ? top10[0][1] : 1;
        
        // Obter categoria de cada fala para cores
        const getSpeechCategory = (text) => {
            const stats = this.filterStatsByPeriod(selectedPeriod);
            const history = stats.history || [];
            const entry = history.find(h => h.text === text);
            return entry ? entry.category : 'main';
        };
        
        // Gerar gráfico de barras
        const chartBars = top10.map(([text, count]) => {
            const percentage = (count / maxCount) * 100;
            const categoryId = getSpeechCategory(text);
            const categoryColor = this.getCategoryColor(categoryId);
            return `
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; align-items: center; margin-bottom: 4px;">
                        <span style="flex: 1; font-size: 13px; color: #333; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-right: 10px;" title="${text}">${text}</span>
                        <span style="font-weight: 600; color: #495057; min-width: 40px; text-align: right;">${count}</span>
                    </div>
                    <div style="background: #e9ecef; border-radius: 4px; height: 24px; overflow: hidden;">
                        <div style="background: ${categoryColor}; height: 100%; width: ${percentage}%; transition: width 0.3s ease; border-radius: 4px;"></div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Gerar HTML de sugestões
        const suggestionsHTML = suggestions.length > 0 
            ? suggestions.map(s => `
                <div style="background: #e7f3ff; border-left: 4px solid #2196F3; padding: 12px; margin-bottom: 10px; border-radius: 4px;">
                    <div style="font-size: 14px; color: #333;">${s.message}</div>
                </div>
            `).join('')
            : `<div style="padding: 12px; color: #999; font-style: italic; text-align: center;">${t('noSuggestions')}</div>`;
        
        // Gerar HTML de alertas
        const alertsHTML = unusedSpeeches.length > 0
            ? unusedSpeeches.slice(0, 5).map(item => `
                <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 12px; margin-bottom: 10px; border-radius: 4px;">
                    <div style="font-size: 14px; color: #333;">
                        <strong>"${item.text}"</strong> ${t('unusedForDays').replace('{days}', item.daysSince)}
                    </div>
                </div>
            `).join('')
            : `<div style="padding: 12px; color: #999; font-style: italic; text-align: center;">${t('noAlerts')}</div>`;
        
        // Horário mais ativo
        const timeLabels = {
            morning: t('morning'),
            afternoon: t('afternoon'),
            night: t('night')
        };
        
        const timeChartData = usageByTime.total > 0 ? [
            { label: timeLabels.morning, count: usageByTime.morning, color: '#FFD700' },
            { label: timeLabels.afternoon, count: usageByTime.afternoon, color: '#FF8C00' },
            { label: timeLabels.night, count: usageByTime.night, color: '#4169E1' }
        ] : [];
        
        const timeChartMax = timeChartData.length > 0 ? Math.max(...timeChartData.map(d => d.count)) : 1;
        const timeChartBars = timeChartData.map(item => {
            const percentage = timeChartMax > 0 ? (item.count / timeChartMax) * 100 : 0;
            return `
                <div style="margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; margin-bottom: 4px;">
                        <span style="flex: 1; font-size: 12px; color: #666;">${item.label}</span>
                        <span style="font-weight: 600; color: #495057; min-width: 30px; text-align: right;">${item.count}</span>
                    </div>
                    <div style="background: #e9ecef; border-radius: 3px; height: 16px; overflow: hidden;">
                        <div style="background: ${item.color}; height: 100%; width: ${percentage}%; transition: width 0.3s ease; border-radius: 3px;"></div>
                    </div>
                </div>
            `;
        }).join('');
        
        modal.innerHTML = `
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="statsTitle" style="display: flex; flex-direction: column; max-width: 800px; max-height: 90vh;">
                <h2 id="statsTitle"><i class="fas fa-chart-bar"></i> ${t('statsTitle')}</h2>
                <div style="flex: 1; overflow-y: auto; padding: 20px;">
                    <!-- Filtro de Período -->
                    <div style="margin-bottom: 20px;">
                        <label for="periodFilter" style="display: block; font-size: 14px; font-weight: 600; color: #333; margin-bottom: 8px;">
                            <i class="fas fa-filter"></i> ${t('filterPeriod')}:
                        </label>
                        <select id="periodFilter" style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 14px;">
                            <option value="today" ${selectedPeriod === 'today' ? 'selected' : ''}>${t('today')}</option>
                            <option value="thisWeek" ${selectedPeriod === 'thisWeek' ? 'selected' : ''}>${t('thisWeek')}</option>
                            <option value="thisMonth" ${selectedPeriod === 'thisMonth' ? 'selected' : ''}>${t('thisMonth')}</option>
                            <option value="last7Days" ${selectedPeriod === 'last7Days' ? 'selected' : ''}>${t('last7Days')}</option>
                            <option value="last30Days" ${selectedPeriod === 'last30Days' ? 'selected' : ''}>${t('last30Days')}</option>
                            <option value="allTime" ${selectedPeriod === 'allTime' ? 'selected' : ''}>${t('allTime')}</option>
                        </select>
                    </div>
                    
                    <!-- Cards de Resumo -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 25px;">
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                            <div style="font-size: 2em; font-weight: bold; color: #007bff;">${customCategories.length}</div>
                            <div style="color: #666; font-size: 14px;">${t('totalCategories')}</div>
                        </div>
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                            <div style="font-size: 2em; font-weight: bold; color: #28a745;">${totalSpeeches}</div>
                            <div style="color: #666; font-size: 14px;">${t('totalSpeeches')}</div>
                        </div>
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                            <div style="font-size: 2em; font-weight: bold; color: #ffc107;">${stats.totalUses || 0}</div>
                            <div style="color: #666; font-size: 14px;">${t('totalUses')}</div>
                        </div>
                    </div>
                    
                    <!-- Categoria Mais Usada -->
                    ${mostUsedCategory ? `
                        <div style="margin-bottom: 20px; padding: 15px; background: linear-gradient(135deg, ${this.getCategoryColor(mostUsedCategory.categoryId)} 0%, ${this.getCategoryColor(mostUsedCategory.categoryId)}dd 100%); border-radius: 8px; color: white;">
                            <div style="font-size: 14px; margin-bottom: 8px; opacity: 0.9;">${t('mostUsedCategory')}</div>
                            <div style="font-size: 20px; font-weight: bold; margin-bottom: 8px;">${mostUsedCategory.title}</div>
                            <div style="font-size: 14px; opacity: 0.9;">${mostUsedCategory.count} ${mostUsedCategory.count === 1 ? t('use') : t('uses')}</div>
                            <div style="margin-top: 12px; display: flex; gap: 8px;">
                                <button type="button" class="goToCategoryBtn" data-category="${mostUsedCategory.categoryId}" style="flex: 1; padding: 8px; background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.3); border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 600;">
                                    <i class="fas fa-arrow-right"></i> ${t('goToCategory')}
                                </button>
                                <button type="button" class="createSpeechInCategoryBtn" data-category="${mostUsedCategory.categoryId}" style="flex: 1; padding: 8px; background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.3); border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 600;">
                                    <i class="fas fa-plus"></i> ${t('createSpeech')}
                                </button>
                            </div>
                        </div>
                    ` : ''}
                    
                    <!-- Fala Mais Usada -->
                    ${mostUsedSpeech ? `
                        <div style="margin-bottom: 20px; padding: 15px; background: linear-gradient(135deg, #28a745 0%, #20c997 100%); border-radius: 8px; color: white; box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);">
                            <div style="font-size: 14px; margin-bottom: 8px; opacity: 0.9;">${t('mostUsedSpeech')}</div>
                            <div style="font-size: 22px; font-weight: bold; margin-bottom: 8px;">"${mostUsedSpeech.text}"</div>
                            <div style="font-size: 16px; opacity: 0.9;">${mostUsedSpeech.count} ${mostUsedSpeech.count === 1 ? t('use') : t('uses')}</div>
                        </div>
                    ` : ''}
                    
                    <!-- Horário de Maior Uso -->
                    ${usageByTime.total > 0 ? `
                        <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border: 2px solid #e9ecef;">
                            <h3 style="font-size: 16px; margin-bottom: 15px; color: #333;">
                                <i class="fas fa-clock"></i> ${t('usageByTime')}
                            </h3>
                            ${timeChartBars}
                            ${usageByTime.mostActive ? `
                                <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #dee2e6; font-size: 13px; color: #666; text-align: center;">
                                    ${t('mostActiveTime')}: <strong>${timeLabels[usageByTime.mostActive]}</strong> (${usageByTime.mostActiveCount} ${usageByTime.mostActiveCount === 1 ? t('use') : t('uses')})
                                </div>
                            ` : ''}
                        </div>
                    ` : ''}
                    
                    <!-- Gráfico Top 10 -->
                    ${top10.length > 0 ? `
                        <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border: 2px solid #e9ecef;">
                            <h3 style="font-size: 16px; margin-bottom: 15px; color: #333;">
                                <i class="fas fa-chart-line"></i> ${t('topUsed')}
                            </h3>
                            <div style="max-height: 400px; overflow-y: auto;">
                                ${chartBars}
                            </div>
                        </div>
                    ` : ''}
                    
                    <!-- Sugestões -->
                    <div style="margin-bottom: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px; border: 2px solid #b3d9ff;">
                        <h3 style="font-size: 16px; margin-bottom: 15px; color: #333;">
                            <i class="fas fa-lightbulb"></i> ${t('suggestions')}
                        </h3>
                        ${suggestionsHTML}
                    </div>
                    
                    <!-- Alertas -->
                    ${unusedSpeeches.length > 0 ? `
                        <div style="margin-bottom: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border: 2px solid #ffc107;">
                            <h3 style="font-size: 16px; margin-bottom: 15px; color: #333;">
                                <i class="fas fa-exclamation-triangle"></i> ${t('alerts')}
                            </h3>
                            ${alertsHTML}
                        </div>
                    ` : ''}
                    
                    <!-- Padrões de Uso -->
                    ${usagePatterns.mostActiveDayCount > 0 ? `
                        <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border: 2px solid #e9ecef;">
                            <h3 style="font-size: 16px; margin-bottom: 15px; color: #333;">
                                <i class="fas fa-calendar-alt"></i> ${t('usagePatterns')}
                            </h3>
                            <div style="font-size: 14px; color: #666;">
                                ${t('mostActiveDay')}: <strong>${usagePatterns.mostActiveDayName}</strong> (${usagePatterns.mostActiveDayCount} ${usagePatterns.mostActiveDayCount === 1 ? t('use') : t('uses')})
                            </div>
                        </div>
                    ` : ''}
                </div>
                <div style="padding: 15px 20px; border-top: 2px solid #e9ecef; background: #f8f9fa; border-radius: 0 0 24px 24px; display: flex; gap: 10px; justify-content: space-between; flex-shrink: 0; flex-wrap: wrap;">
                    <div style="display: flex; gap: 10px;">
                        <button type="button" id="exportStatsCSVBtn" style="padding: 10px 15px; background: #17a2b8; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600;">
                            <i class="fas fa-file-csv"></i> ${t('exportCSV')}
                        </button>
                        <button type="button" id="exportStatsJSONBtn" style="padding: 10px 15px; background: #6c757d; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600;">
                            <i class="fas fa-file-code"></i> ${t('exportJSON')}
                        </button>
                        <button type="button" id="clearStatsBtn" style="padding: 10px 15px; background: #dc3545; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600;">
                            <i class="fas fa-trash"></i> ${t('clearStats')}
                        </button>
                    </div>
                    <button type="button" id="closeStatsModal" style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px;">${t('close')}</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Event listeners
        document.getElementById('closeStatsModal').onclick = () => modal.remove();
        
        const periodFilter = document.getElementById('periodFilter');
        if (periodFilter) {
            periodFilter.addEventListener('change', (e) => {
                this.showStatsModal(e.target.value);
            });
        }
        
        const exportCSVBtn = document.getElementById('exportStatsCSVBtn');
        if (exportCSVBtn) {
            exportCSVBtn.addEventListener('click', () => {
                this.exportStats('csv');
            });
        }
        
        const exportJSONBtn = document.getElementById('exportStatsJSONBtn');
        if (exportJSONBtn) {
            exportJSONBtn.addEventListener('click', () => {
                this.exportStats('json');
            });
        }
        
        const clearStatsBtn = document.getElementById('clearStatsBtn');
        if (clearStatsBtn) {
            clearStatsBtn.addEventListener('click', () => {
                this.clearStats();
            });
        }
        
        // Botões de ação rápida
        const goToCategoryBtns = modal.querySelectorAll('.goToCategoryBtn');
        goToCategoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const categoryId = btn.getAttribute('data-category');
                modal.remove();
                if (categoryId && categoryId !== 'main') {
                    this.showSubCategories(categoryId);
                }
            });
        });
        
        const createSpeechBtns = modal.querySelectorAll('.createSpeechInCategoryBtn');
        createSpeechBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const categoryId = btn.getAttribute('data-category');
                modal.remove();
                if (categoryId && categoryId !== 'main') {
                    this.currentCategory = categoryId;
                    this.showSubCategories(categoryId);
                    setTimeout(() => {
                        this.openCreateSpeechModal();
                    }, 100);
                }
            });
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    async loadVoices() {
        return new Promise((resolve, reject) => {
            if (!('speechSynthesis' in window)) {
                const voiceSelectModal = this.getVoiceSelectFromModal();
                if (voiceSelectModal) {
                    const lang = localStorage.getItem('appLanguage') || 'pt-BR';
                    const t = (key) => getTranslation(key, lang);
                    voiceSelectModal.innerHTML = `<option value="">${t('apiNotSupported')}</option>`;
                }
                reject(new Error('Speech synthesis not supported'));
                return;
            }
            
            const loadVoicesInternal = () => {
                const allVoices = speechSynthesis.getVoices();
                
                if (allVoices.length === 0) {
                    setTimeout(loadVoicesInternal, 100);
                    return;
                }
                
                try {
                    // Filtra apenas vozes realmente disponíveis e válidas
                    const validVoices = allVoices.filter(voice => {
                        // Verifica se a voz tem propriedades essenciais
                        return voice && 
                               voice.name && 
                               voice.name.trim() !== '' &&
                               voice.lang &&
                               voice.lang.trim() !== '';
                    });
                    
                    // Remove duplicatas (mesmo nome e idioma)
                    const uniqueVoices = [];
                    const seen = new Set();
                    validVoices.forEach(voice => {
                        const key = `${voice.name}|${voice.lang}`;
                        if (!seen.has(key)) {
                            seen.add(key);
                            uniqueVoices.push(voice);
                        }
                    });
                    
                    // Armazena todas as vozes válidas
                    this.availableVoices = uniqueVoices;
                    
                    // Se o modal estiver aberto, atualizar o select do modal
                    const voiceSelectModal = this.getVoiceSelectFromModal();
                    if (voiceSelectModal) {
                        this.loadVoiceControlsInModal();
                    }
                    
                    resolve();
                } catch (error) {
                    console.error('Erro ao carregar vozes:', error);
                    const voiceSelectModal = this.getVoiceSelectFromModal();
                    if (voiceSelectModal) {
                        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
                        const t = (key) => getTranslation(key, lang);
                        voiceSelectModal.innerHTML = `<option value="">${t('errorLoadingVoices')}</option>`;
                    }
                    reject(error);
                }
            };
            
            loadVoicesInternal();
            
            // Timeout de segurança
            setTimeout(() => {
                if (this.availableVoices.length === 0) {
                    const voiceSelectModal = this.getVoiceSelectFromModal();
                    if (voiceSelectModal && voiceSelectModal.innerHTML.includes('Carregando')) {
                        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
                        const t = (key) => getTranslation(key, lang);
                        voiceSelectModal.innerHTML = `<option value="">${t('noVoices')}</option>`;
                    }
                    reject(new Error('Timeout ao carregar vozes'));
                }
            }, 5000);
        });
    }

    addVoiceTestButtons() {
        // Este método não é mais necessário, pois o botão de teste está no modal
        // Mantido para compatibilidade, mas não faz nada
        return;
    }

    setLanguage(lang) {
        localStorage.setItem('appLanguage', lang);
        document.documentElement.lang = lang;
        
        // Traduz toda a interface para o novo idioma
        this.translateUI(lang);
        
        // Recarrega os cards principais se estiver na página principal
        if (this.currentCategory === null) {
            this.renderMainCategories();
        } else {
            // Se estiver em uma subcategoria, recarrega as subcategorias também
            this.showSubCategories(this.currentCategory);
        }
        
        // Atualiza vozes disponíveis para o idioma selecionado no modal se estiver aberto
        const voiceSelectModal = this.getVoiceSelectFromModal();
        if (voiceSelectModal && this.availableVoices && this.availableVoices.length > 0) {
            this.loadVoiceControlsInModal();
        } else if (!this.availableVoices || this.availableVoices.length === 0) {
            // Se vozes ainda não foram carregadas, recarrega
            this.loadVoices();
        }
    }

    translateUI(lang) {
        const t = (key) => getTranslation(key, lang);
        
        // Traduz header
        const headerTitle = document.querySelector('header h1');
        if (headerTitle) {
            const icon = headerTitle.querySelector('i');
            headerTitle.innerHTML = icon ? `${icon.outerHTML} ${t('appTitle')}` : t('appTitle');
        }
        
        const headerDesc = document.querySelector('header p');
        if (headerDesc) headerDesc.textContent = t('appDescription');
        
        // Traduz status bar
        const techForInclusion = document.querySelector('.status-bar span');
        if (techForInclusion && techForInclusion.textContent.includes('Tecnologia Assistiva')) {
            const icon = techForInclusion.querySelector('i');
            techForInclusion.innerHTML = icon ? `${icon.outerHTML} ${t('techForInclusion')}` : t('techForInclusion');
        }
        
        // Traduz botão voltar
        const backBtn = document.getElementById('backButton');
        if (backBtn) {
            const icon = backBtn.querySelector('i');
            backBtn.innerHTML = icon ? `${icon.outerHTML} ${t('backButton')}` : t('backButton');
            backBtn.setAttribute('aria-label', t('backButton'));
        }
        
        // Traduz labels dos controles de voz
        const voiceLabel = document.querySelector('label[for="voiceSelect"]');
        if (voiceLabel) voiceLabel.setAttribute('title', t('voice'));
        
        const speedLabel = document.querySelector('label[for="speedControl"]');
        if (speedLabel) speedLabel.setAttribute('title', t('speed'));
        
        const toneLabel = document.querySelector('label[for="toneControl"]');
        if (toneLabel) toneLabel.setAttribute('title', t('tone'));
        
        // Traduz opções de velocidade
        const speedControl = document.getElementById('speedControl');
        if (speedControl) {
            speedControl.querySelectorAll('option').forEach(opt => {
                const value = opt.value;
                if (value === '0.8') opt.textContent = t('slow');
                else if (value === '1.0') opt.textContent = t('normal');
                else if (value === '1.2') opt.textContent = t('fast');
            });
            speedControl.setAttribute('aria-label', t('speed'));
        }
        
        // Traduz opções de tom
        const toneControl = document.getElementById('toneControl');
        if (toneControl) {
            toneControl.querySelectorAll('option').forEach(opt => {
                const value = opt.value;
                if (value === '0.5') opt.textContent = t('veryLow');
                else if (value === '0.75') opt.textContent = t('low');
                else if (value === '1.0') opt.textContent = t('normal');
                else if (value === '1.25') opt.textContent = t('high');
                else if (value === '1.5') opt.textContent = t('veryHigh');
            });
            toneControl.setAttribute('aria-label', t('tone'));
        }
        
        // Traduz botão de configurações
        const settingsBtn = document.getElementById('settingsButton');
        if (settingsBtn) {
            settingsBtn.setAttribute('aria-label', t('settings'));
            settingsBtn.setAttribute('title', t('settings'));
        }
        
        // Traduz botão de modo apresentação
        const presentationBtn = document.getElementById('togglePresentationModeBtn');
        if (presentationBtn) {
            presentationBtn.setAttribute('aria-label', t('presentationMode'));
            presentationBtn.setAttribute('title', t('presentationMode'));
        }
        
        // Traduz botão criar categoria
        const createCategoryBtn = document.getElementById('createCategoryBtn');
        if (createCategoryBtn) {
            const icon = createCategoryBtn.querySelector('i');
            // Verifica se está na tela principal ou dentro de uma categoria
            if (this.currentCategory === null) {
                createCategoryBtn.innerHTML = icon ? `${icon.outerHTML} ${t('createCategory')}` : t('createCategory');
                createCategoryBtn.setAttribute('aria-label', t('createCategory'));
            } else {
                createCategoryBtn.innerHTML = icon ? `${icon.outerHTML} ${t('createSpeech')}` : t('createSpeech');
                createCategoryBtn.setAttribute('aria-label', t('createSpeech'));
            }
        }
        
        // Traduz botões de exclusão
        const deleteSelectedCategories = document.getElementById('deleteSelectedCategoriesBtn');
        if (deleteSelectedCategories) {
            const count = deleteSelectedCategories.querySelector('span')?.textContent || '0';
            const icon = deleteSelectedCategories.querySelector('i');
            deleteSelectedCategories.innerHTML = icon ? `${icon.outerHTML} ${t('deleteSelected')} (${count})` : `${t('deleteSelected')} (${count})`;
        }
        
        const deleteSelectedSubcategories = document.getElementById('deleteSelectedSubcategoriesBtn');
        if (deleteSelectedSubcategories) {
            const count = deleteSelectedSubcategories.querySelector('span')?.textContent || '0';
            const icon = deleteSelectedSubcategories.querySelector('i');
            deleteSelectedSubcategories.innerHTML = icon ? `${icon.outerHTML} ${t('deleteSelected')} (${count})` : `${t('deleteSelected')} (${count})`;
        }
        
        // Atualiza status se estiver visível
        const statusText = document.getElementById('statusText');
        if (statusText && statusText.textContent === 'Pronto para uso') {
            statusText.textContent = t('ready');
        }
        
        // Traduz modais abertos
        const categoryModal = document.getElementById('createCategoryModal');
        if (categoryModal) {
            const modalTitle = categoryModal.querySelector('#modalTitle');
            if (modalTitle) {
                const icon = modalTitle.querySelector('i');
                modalTitle.innerHTML = icon ? `${icon.outerHTML} ${t('createCategoryTitle')}` : t('createCategoryTitle');
            }
            const categoryNameLabel = categoryModal.querySelector('label[style*="font-size: 18px"]');
            if (categoryNameLabel) {
                categoryNameLabel.textContent = `${t('categoryName')}:`;
            }
            const catNameInput = categoryModal.querySelector('#catName');
            if (catNameInput) {
                catNameInput.placeholder = t('categoryNamePlaceholder');
            }
            const chooseImageLabel = categoryModal.querySelector('label[style*="font-size: 16px"]');
            if (chooseImageLabel) {
                const icon = chooseImageLabel.querySelector('i');
                chooseImageLabel.innerHTML = icon ? `${icon.outerHTML} ${t('chooseImage')}` : t('chooseImage');
            }
            const searchBtn = categoryModal.querySelector('#btnBuscarARASAAC');
            if (searchBtn) {
                const icon = searchBtn.querySelector('i');
                searchBtn.innerHTML = icon ? `${icon.outerHTML} ${t('searchPictogram')}` : t('searchPictogram');
            }
            const galleryBtn = categoryModal.querySelector('#selectCategoryImageBtn');
            if (galleryBtn) {
                const icon = galleryBtn.querySelector('i');
                galleryBtn.innerHTML = icon ? `${icon.outerHTML} ${t('localGallery')}` : t('localGallery');
            }
            const imageSelectedText = categoryModal.querySelector('#selectedCategoryImagePreview p');
            if (imageSelectedText) {
                imageSelectedText.textContent = t('imageSelected');
            }
            const removeBtn = categoryModal.querySelector('#removeSelectedImage');
            if (removeBtn) {
                const icon = removeBtn.querySelector('i');
                removeBtn.innerHTML = icon ? `${icon.outerHTML} ${t('removeImage')}` : t('removeImage');
            }
            const autoIconInfo = categoryModal.querySelector('p[style*="font-style: italic"]');
            if (autoIconInfo) {
                const icon = autoIconInfo.querySelector('i');
                autoIconInfo.innerHTML = icon ? `${icon.outerHTML} ${t('autoIconInfo')}` : t('autoIconInfo');
            }
            const cancelBtn = categoryModal.querySelector('#cancelModal');
            if (cancelBtn) cancelBtn.textContent = t('cancel');
            const saveBtn = categoryModal.querySelector('button[type="submit"]');
            if (saveBtn) saveBtn.textContent = t('save');
        }
        
        const speechModal = document.getElementById('createSpeechModal');
        if (speechModal) {
            const modalTitle = speechModal.querySelector('#speechModalTitle');
            if (modalTitle) {
                const icon = modalTitle.querySelector('i');
                modalTitle.innerHTML = icon ? `${icon.outerHTML} ${t('createSpeechTitle')}` : t('createSpeechTitle');
            }
            const speechTextLabel = speechModal.querySelector('label[style*="font-size: 18px"]');
            if (speechTextLabel) {
                speechTextLabel.textContent = `${t('speechText')}:`;
            }
            const speechTextInput = speechModal.querySelector('#speechText');
            if (speechTextInput) {
                speechTextInput.placeholder = t('speechTextPlaceholder');
            }
            const chooseImageLabel = speechModal.querySelector('label[style*="font-size: 16px"]');
            if (chooseImageLabel) {
                const icon = chooseImageLabel.querySelector('i');
                chooseImageLabel.innerHTML = icon ? `${icon.outerHTML} ${t('chooseImage')}` : t('chooseImage');
            }
            const searchBtn = speechModal.querySelector('#btnBuscarARASAACSpeech');
            if (searchBtn) {
                const icon = searchBtn.querySelector('i');
                searchBtn.innerHTML = icon ? `${icon.outerHTML} ${t('searchPictogram')}` : t('searchPictogram');
            }
            const galleryBtn = speechModal.querySelector('#selectImageBtn');
            if (galleryBtn) {
                const icon = galleryBtn.querySelector('i');
                galleryBtn.innerHTML = icon ? `${icon.outerHTML} ${t('localGallery')}` : t('localGallery');
            }
            const imageSelectedText = speechModal.querySelector('#selectedImagePreview p');
            if (imageSelectedText) {
                imageSelectedText.textContent = t('imageSelected');
            }
            const removeBtn = speechModal.querySelector('#removeSelectedSpeechImage');
            if (removeBtn) {
                const icon = removeBtn.querySelector('i');
                removeBtn.innerHTML = icon ? `${icon.outerHTML} ${t('removeImage')}` : t('removeImage');
            }
            const autoIconInfo = speechModal.querySelector('p[style*="font-style: italic"]');
            if (autoIconInfo) {
                const icon = autoIconInfo.querySelector('i');
                autoIconInfo.innerHTML = icon ? `${icon.outerHTML} ${t('autoIconInfo')}` : t('autoIconInfo');
            }
            const cancelBtn = speechModal.querySelector('#cancelSpeechModal');
            if (cancelBtn) cancelBtn.textContent = t('cancel');
            const saveBtn = speechModal.querySelector('button[type="submit"]');
            if (saveBtn) saveBtn.textContent = t('save');
        }
        
        const editSpeechModal = document.getElementById('editSpeechModal');
        if (editSpeechModal) {
            const modalTitle = editSpeechModal.querySelector('#editSpeechModalTitle');
            if (modalTitle) {
                const icon = modalTitle.querySelector('i');
                modalTitle.innerHTML = icon ? `${icon.outerHTML} ${t('editSpeechTitle')}` : t('editSpeechTitle');
            }
            const speechTextLabel = editSpeechModal.querySelector('label[style*="font-size: 18px"]');
            if (speechTextLabel) {
                speechTextLabel.textContent = `${t('speechText')}:`;
            }
            const speechTextInput = editSpeechModal.querySelector('#editSpeechText');
            if (speechTextInput) {
                speechTextInput.placeholder = t('speechTextPlaceholder');
            }
            const chooseImageLabel = editSpeechModal.querySelector('label[style*="font-size: 16px"]');
            if (chooseImageLabel) {
                const icon = chooseImageLabel.querySelector('i');
                chooseImageLabel.innerHTML = icon ? `${icon.outerHTML} ${t('chooseImage')}` : t('chooseImage');
            }
            const searchBtn = editSpeechModal.querySelector('#btnBuscarARASAACEditSpeech');
            if (searchBtn) {
                const icon = searchBtn.querySelector('i');
                searchBtn.innerHTML = icon ? `${icon.outerHTML} ${t('searchPictogram')}` : t('searchPictogram');
            }
            const galleryBtn = editSpeechModal.querySelector('#selectEditImageBtn');
            if (galleryBtn) {
                const icon = galleryBtn.querySelector('i');
                galleryBtn.innerHTML = icon ? `${icon.outerHTML} ${t('localGallery')}` : t('localGallery');
            }
            const imageSelectedText = editSpeechModal.querySelector('#selectedEditImagePreview p');
            if (imageSelectedText) {
                imageSelectedText.textContent = t('imageSelected');
            }
            const removeBtn = editSpeechModal.querySelector('#removeSelectedEditSpeechImage');
            if (removeBtn) {
                const icon = removeBtn.querySelector('i');
                removeBtn.innerHTML = icon ? `${icon.outerHTML} ${t('removeImage')}` : t('removeImage');
            }
            const autoIconInfo = editSpeechModal.querySelector('p[style*="font-style: italic"]');
            if (autoIconInfo) {
                const icon = autoIconInfo.querySelector('i');
                autoIconInfo.innerHTML = icon ? `${icon.outerHTML} ${t('autoIconInfo')}` : t('autoIconInfo');
            }
            const cancelBtn = editSpeechModal.querySelector('#cancelEditSpeechModal');
            if (cancelBtn) cancelBtn.textContent = t('cancel');
            const saveBtn = editSpeechModal.querySelector('button[type="submit"]');
            if (saveBtn) saveBtn.textContent = t('saveChanges');
        }
        
        // Traduz modal ARASAAC se estiver aberto
        const arasaacModal = document.getElementById('arasaacSearchModal');
        if (arasaacModal) {
            const modalTitle = arasaacModal.querySelector('#arasaacModalTitle');
            if (modalTitle) {
                const icon = modalTitle.querySelector('i');
                modalTitle.innerHTML = icon ? `${icon.outerHTML} ${t('arasaacModalTitle')}` : t('arasaacModalTitle');
            }
            const instruction = arasaacModal.querySelector('#arasaacInstruction');
            if (instruction) {
                const icon = instruction.querySelector('i');
                instruction.innerHTML = icon ? `${icon.outerHTML} ${t('arasaacInstruction')}` : t('arasaacInstruction');
            }
            const searchInput = arasaacModal.querySelector('#inputBuscaPictograma');
            if (searchInput) {
                searchInput.placeholder = t('arasaacPlaceholder');
            }
            const searchBtn = arasaacModal.querySelector('#btnBuscarPictograma');
            if (searchBtn) {
                const icon = searchBtn.querySelector('i');
                searchBtn.innerHTML = icon ? `${icon.outerHTML} ${t('arasaacSearchBtn')}` : t('arasaacSearchBtn');
            }
            const emptyMessage = arasaacModal.querySelector('#arasaacEmptyMessage');
            if (emptyMessage && emptyMessage.querySelector('p')) {
                emptyMessage.querySelector('p').textContent = t('arasaacEmptyMessage');
            }
            const confirmBtn = arasaacModal.querySelector('#btnConfirmarSelecaoARASAAC');
            if (confirmBtn) {
                const icon = confirmBtn.querySelector('i');
                confirmBtn.innerHTML = icon ? `${icon.outerHTML} ${t('arasaacConfirmSelection')}` : t('arasaacConfirmSelection');
            }
            const cancelBtn = arasaacModal.querySelector('#btnCancelarBuscaARASAAC');
            if (cancelBtn) cancelBtn.textContent = t('cancel');
        }
        
        // Traduz modal de configurações se estiver aberto
        const settingsModal = document.getElementById('settingsModal');
        if (settingsModal) {
            const settingsTitle = settingsModal.querySelector('#settingsTitle');
            if (settingsTitle) {
                const icon = settingsTitle.querySelector('i');
                settingsTitle.innerHTML = icon ? `${icon.outerHTML} ${t('settingsTitle')}` : t('settingsTitle');
            }
            const themeLabel = settingsModal.querySelector('#themeLabel');
            if (themeLabel) {
                const icon = themeLabel.querySelector('i');
                themeLabel.innerHTML = icon ? `${icon.outerHTML} ${t('theme')}` : t('theme');
            }
            const themeSelect = settingsModal.querySelector('#themeSelect');
            if (themeSelect) {
                const savedTheme = themeSelect.value || 'light';
                themeSelect.innerHTML = `
                    <option value="light">${t('light')}</option>
                    <option value="dark">${t('dark')}</option>
                    <option value="high-contrast">${t('highContrast')}</option>
                `;
                themeSelect.value = savedTheme;
            }
            const languageLabel = settingsModal.querySelector('#languageLabel');
            if (languageLabel) {
                const icon = languageLabel.querySelector('i');
                languageLabel.innerHTML = icon ? `${icon.outerHTML} ${t('language')}` : t('language');
            }
            
            // Traduz controles de voz, velocidade e tom
            const voiceSelectModal = settingsModal.querySelector('#voiceSelectModal');
            if (voiceSelectModal && voiceSelectModal.previousElementSibling) {
                const voiceHeading = voiceSelectModal.previousElementSibling.previousElementSibling;
                if (voiceHeading && voiceHeading.tagName === 'H3') {
                    const icon = voiceHeading.querySelector('i');
                    voiceHeading.innerHTML = icon ? `${icon.outerHTML} ${t('voice')}` : t('voice');
                }
            }
            
            const testVoiceBtnModal = settingsModal.querySelector('#testVoiceBtnModal');
            if (testVoiceBtnModal) {
                const icon = testVoiceBtnModal.querySelector('i');
                testVoiceBtnModal.innerHTML = icon ? `${icon.outerHTML} ${t('test')}` : t('test');
            }
            
            const speedControlModal = settingsModal.querySelector('#speedControlModal');
            if (speedControlModal && speedControlModal.previousElementSibling) {
                const speedHeading = speedControlModal.previousElementSibling;
                if (speedHeading && speedHeading.tagName === 'H3') {
                    const icon = speedHeading.querySelector('i');
                    speedHeading.innerHTML = icon ? `${icon.outerHTML} ${t('speed')}` : t('speed');
                }
                const savedSpeed = speedControlModal.value || '1.0';
                speedControlModal.innerHTML = `
                    <option value="0.8">${t('slow')}</option>
                    <option value="1.0">${t('normal')}</option>
                    <option value="1.2">${t('fast')}</option>
                `;
                speedControlModal.value = savedSpeed;
            }
            
            const toneControlModal = settingsModal.querySelector('#toneControlModal');
            if (toneControlModal && toneControlModal.previousElementSibling) {
                const toneHeading = toneControlModal.previousElementSibling;
                if (toneHeading && toneHeading.tagName === 'H3') {
                    const icon = toneHeading.querySelector('i');
                    toneHeading.innerHTML = icon ? `${icon.outerHTML} ${t('tone')}` : t('tone');
                }
                const savedTone = toneControlModal.value || '1.0';
                toneControlModal.innerHTML = `
                    <option value="0.5">${t('veryLow')}</option>
                    <option value="0.75">${t('low')}</option>
                    <option value="1.0">${t('normal')}</option>
                    <option value="1.25">${t('high')}</option>
                    <option value="1.5">${t('veryHigh')}</option>
                `;
                toneControlModal.value = savedTone;
            }
            
            const statsLabel = settingsModal.querySelector('#statsLabel');
            if (statsLabel) {
                const icon = statsLabel.querySelector('i');
                statsLabel.innerHTML = icon ? `${icon.outerHTML} ${t('statsTitle')}` : t('statsTitle');
            }
            const backupLabel = settingsModal.querySelector('#backupLabel');
            if (backupLabel) {
                const icon = backupLabel.querySelector('i');
                backupLabel.innerHTML = icon ? `${icon.outerHTML} ${t('exportTitle')}` : t('exportTitle');
            }
            const showStatsBtn = settingsModal.querySelector('#showStatsBtn');
            if (showStatsBtn) {
                const icon = showStatsBtn.querySelector('i');
                showStatsBtn.innerHTML = icon ? `${icon.outerHTML} ${t('showStats')}` : t('showStats');
            }
            const exportBtn = settingsModal.querySelector('#exportDataBtn');
            if (exportBtn) {
                const icon = exportBtn.querySelector('i');
                exportBtn.innerHTML = icon ? `${icon.outerHTML} ${t('export')}` : t('export');
            }
            const importBtn = settingsModal.querySelector('#importDataBtn');
            if (importBtn) {
                const icon = importBtn.querySelector('i');
                importBtn.innerHTML = icon ? `${icon.outerHTML} ${t('import')}` : t('import');
            }
            const closeBtn = settingsModal.querySelector('#closeSettingsModal');
            if (closeBtn) closeBtn.textContent = t('close');
        }
    }

    applyTheme(theme) {
        document.body.className = document.body.className.replace(/theme-\w+/g, '');
        document.body.classList.add(`theme-${theme}`);
        localStorage.setItem('appTheme', theme);
        
        // Aplica estilos específicos do tema
        const root = document.documentElement;
        if (theme === 'dark') {
            root.style.setProperty('--bg-primary', '#1a1a1a');
            root.style.setProperty('--bg-secondary', '#2d2d2d');
            root.style.setProperty('--text-primary', '#ffffff');
            root.style.setProperty('--text-secondary', '#cccccc');
        } else if (theme === 'high-contrast') {
            root.style.setProperty('--bg-primary', '#000000');
            root.style.setProperty('--bg-secondary', '#ffffff');
            root.style.setProperty('--text-primary', '#ffffff');
            root.style.setProperty('--text-secondary', '#000000');
        } else {
            root.style.setProperty('--bg-primary', '#ffffff');
            root.style.setProperty('--bg-secondary', '#f5f5f5');
            root.style.setProperty('--text-primary', '#333333');
            root.style.setProperty('--text-secondary', '#666666');
        }
    }

    loadUserPreferences() {
        try {
            const savedSpeed = localStorage.getItem('communicationApp_speed');
            const savedTone = localStorage.getItem('communicationApp_tone');
            const savedVoice = localStorage.getItem('communicationApp_voice');
            const savedVolume = localStorage.getItem('communicationApp_volume');
            const savedTheme = localStorage.getItem('appTheme') || 'light';
            const savedLanguage = localStorage.getItem('appLanguage') || 'pt-BR';
            
            // Aplicar valores aos controles do modal se estiver aberto
            const speedControl = this.getSpeedControl();
            const toneControl = this.getToneControl();
            const voiceSelect = this.getVoiceSelect();
            
            if (speedControl && savedSpeed) {
                speedControl.value = savedSpeed;
            }
            if (toneControl && savedTone) {
                toneControl.value = savedTone;
            }
            if (voiceSelect && savedVoice) {
                voiceSelect.value = savedVoice;
            }
            
            if (savedVolume) this.volume = parseFloat(savedVolume);
            this.applyTheme(savedTheme);
            this.setLanguage(savedLanguage);
            
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
            const speedControl = this.getSpeedControl();
            const toneControl = this.getToneControl();
            const voiceSelect = this.getVoiceSelect();
            
            if (speedControl) {
                localStorage.setItem('communicationApp_speed', speedControl.value);
            } else {
                // Se modal não estiver aberto, manter valor salvo
                const savedSpeed = localStorage.getItem('communicationApp_speed');
                if (savedSpeed) {
                    localStorage.setItem('communicationApp_speed', savedSpeed);
                }
            }
            
            if (toneControl) {
                localStorage.setItem('communicationApp_tone', toneControl.value);
            } else {
                const savedTone = localStorage.getItem('communicationApp_tone');
                if (savedTone) {
                    localStorage.setItem('communicationApp_tone', savedTone);
                }
            }
            
            if (voiceSelect) {
                localStorage.setItem('communicationApp_voice', voiceSelect.value);
            } else {
                const savedVoice = localStorage.getItem('communicationApp_voice');
                if (savedVoice) {
                    localStorage.setItem('communicationApp_voice', savedVoice);
                }
            }
            
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
        
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        
        modal.innerHTML = `
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modalTitle" style="display: flex; flex-direction: column; max-height: 90vh;">
                <h2 id="modalTitle"><i class="fas fa-plus-circle"></i> ${t('createCategoryTitle')}</h2>
                <div style="flex: 1; overflow-y: auto; padding: 32px;">
                <form id="createCategoryForm">
                        <label style="display: block; font-size: 18px; font-weight: 600; color: #333; margin-bottom: 12px;">${t('categoryName')}:</label>
                        <input type="text" id="catName" required maxlength="30" placeholder="${t('categoryNamePlaceholder')}" autofocus style="width: 100%; padding: 14px; font-size: 16px; border: 2px solid #ddd; border-radius: 8px; margin-bottom: 20px; box-sizing: border-box;" />
                    
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; font-size: 16px; font-weight: 600; color: #333; margin-bottom: 8px;">
                                <i class="fas fa-image" style="margin-right: 6px;"></i> ${t('chooseImage')}
                        </label>
                            <div style="display: flex; gap: 10px; margin-bottom: 12px; flex-wrap: wrap;">
                                <button type="button" id="btnBuscarARASAAC" style="flex: 1; min-width: 150px; padding: 12px; background: #9C27B0; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                    <i class="fas fa-search"></i> ${t('searchPictogram')}
                        </button>
                                <button type="button" id="selectCategoryImageBtn" style="flex: 1; min-width: 150px; padding: 12px; background: #2196F3; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                    <i class="fas fa-folder-open"></i> ${t('localGallery')}
                                </button>
                            </div>
                            <input type="file" id="categoryImage" accept="image/*" style="display: none;" />
                            <input type="hidden" id="categoryImageUrl" value="" />
                            <input type="hidden" id="categoryImageBase64" value="" />
                        <div id="selectedCategoryImagePreview" style="margin-top: 12px; display: none;">
                                <img id="previewCategoryImage" src="" alt="Preview" style="max-width: 100%; max-height: 200px; border-radius: 8px; border: 2px solid #ddd; display: block; margin: 0 auto;" />
                                <p style="margin-top: 8px; font-size: 14px; color: #666; text-align: center;">${t('imageSelected')}</p>
                                <button type="button" id="removeSelectedImage" style="width: 100%; margin-top: 8px; padding: 8px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 13px; display: flex; align-items: center; justify-content: center; gap: 6px;">
                                    <i class="fas fa-times"></i> ${t('removeImage')}
                                </button>
                        </div>
                        <p style="margin-top: 8px; font-size: 13px; color: #999; font-style: italic;">
                                <i class="fas fa-info-circle"></i> ${t('autoIconInfo')}
                        </p>
                    </div>
                </form>
                </div>
                <div style="padding: 20px 32px; border-top: 2px solid #e9ecef; background: #f8f9fa; border-radius: 0 0 24px 24px; display: flex; gap: 10px; justify-content: flex-end; flex-shrink: 0;">
                    <button type="button" id="cancelModal" style="padding: 10px 20px; background: #ccc; color: #333; border: none; border-radius: 6px; cursor: pointer; font-size: 16px;">${t('cancel')}</button>
                    <button type="submit" form="createCategoryForm" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">${t('save')}</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Configurar elementos
        const imageInput = document.getElementById('categoryImage');
        const imageUrlInput = document.getElementById('categoryImageUrl');
        const imageBase64Input = document.getElementById('categoryImageBase64');
        const selectImageBtn = document.getElementById('selectCategoryImageBtn');
        const btnBuscarARASAAC = document.getElementById('btnBuscarARASAAC');
        const previewDiv = document.getElementById('selectedCategoryImagePreview');
        const previewImg = document.getElementById('previewCategoryImage');
        const removeImageBtn = document.getElementById('removeSelectedImage');
        
        let selectedImageData = null; // Armazena base64 ou URL
        
        const updatePreview = (imageSrc, isUrl = false) => {
            previewImg.src = imageSrc;
            previewDiv.style.display = 'block';
            selectedImageData = imageSrc;
            
            // Se for base64 (começa com "data:image")
            if (imageSrc && imageSrc.startsWith('data:image')) {
                imageBase64Input.value = imageSrc;
                imageUrlInput.value = ''; // Limpa URL se tiver
            } else if (isUrl) {
                // Se for URL
                imageUrlInput.value = imageSrc;
                imageBase64Input.value = ''; // Limpa base64 se tiver
            }
        };
        
        const removeSelectedImage = () => {
            previewDiv.style.display = 'none';
            selectedImageData = null;
            imageUrlInput.value = '';
            imageBase64Input.value = '';
            if (imageInput) imageInput.value = '';
        };
        
        // Botão buscar ARASAAC
        btnBuscarARASAAC.addEventListener('click', () => {
            this.openARASAACSearchModal((base64Image, imageUrl) => {
                if (base64Image) {
                    // Se veio base64, atualiza preview e salva no input hidden
                    updatePreview(base64Image, false);
                } else if (imageUrl) {
                    // Se veio URL, tenta converter para base64 primeiro
                    this.showLoading('Convertendo imagem...');
                    this.converterUrlParaBase64(imageUrl).then(base64 => {
                        updatePreview(base64, false);
                        this.hideLoading();
                    }).catch(() => {
                        // Se falhar, usa URL direto
                        updatePreview(imageUrl, true);
                        this.hideLoading();
                    });
                }
            });
        });
        
        // Botão galeria local
        selectImageBtn.addEventListener('click', () => {
            imageInput.click();
        });
        
        imageInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    updatePreview(event.target.result, false);
                    imageUrlInput.value = ''; // Limpa URL se tiver
                    imageBase64Input.value = event.target.result; // Salva base64 do arquivo local
                };
                reader.readAsDataURL(file);
            }
        });
        
        removeImageBtn.addEventListener('click', removeSelectedImage);
        
        document.getElementById('cancelModal').onclick = () => modal.remove();
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
        
        const form = document.getElementById('createCategoryForm');
        const submitBtn = document.querySelector('button[form="createCategoryForm"]');
        
        // Handler para submit do form
        const handleFormSubmit = async (e) => {
            e.preventDefault();
            await this.handleCreateCategorySubmit(e);
            modal.remove();
        };
        
        form.addEventListener('submit', handleFormSubmit);
        
        // Adiciona evento ao botão de submit que está fora do form
        if (submitBtn) {
            submitBtn.addEventListener('click', handleFormSubmit);
        }
    }
    sanitizeInput(input) {
        if (typeof input !== 'string') return '';
        return input
            .replace(/[<>]/g, '') // Remove < e >
            .replace(/javascript:/gi, '') // Remove javascript:
            .replace(/on\w+=/gi, '') // Remove event handlers
            .trim();
    }

    validateCategoryName(name) {
        if (!name || name.length === 0) {
            return { valid: false, error: 'Nome da categoria não pode estar vazio' };
        }
        if (name.length > 30) {
            return { valid: false, error: 'Nome da categoria não pode ter mais de 30 caracteres' };
        }
        if (/[<>]/.test(name)) {
            return { valid: false, error: 'Nome da categoria contém caracteres inválidos' };
        }
        return { valid: true };
    }

    validateSpeechText(text) {
        if (!text || text.length === 0) {
            return { valid: false, error: 'Texto da fala não pode estar vazio' };
        }
        if (text.length > 100) {
            return { valid: false, error: 'Texto da fala não pode ter mais de 100 caracteres' };
        }
        if (/[<>]/.test(text)) {
            return { valid: false, error: 'Texto da fala contém caracteres inválidos' };
        }
        return { valid: true };
    }

    async handleCreateCategorySubmit(e) {
        e.preventDefault();
        const nameInput = document.getElementById('catName');
        const name = this.sanitizeInput(nameInput.value);
        
        const validation = this.validateCategoryName(name);
        if (!validation.valid) {
            this.showError(validation.error);
            return;
        }
        
        let categoryPhoto = null;
        let icon = null;
        
        // Verifica se há imagem (base64, URL ARASAAC, ou arquivo local)
        const imageBase64Input = document.getElementById('categoryImageBase64');
        const imageUrlInput = document.getElementById('categoryImageUrl');
        const imageInput = document.getElementById('categoryImage');
        
        // Prioridade: base64 (ARASAAC ou arquivo local) > URL do ARASAAC > arquivo local > preview src > ícone automático
        if (imageBase64Input && imageBase64Input.value) {
            // Imagem ARASAAC ou arquivo local já convertida para base64
            categoryPhoto = imageBase64Input.value;
        } else if (imageUrlInput && imageUrlInput.value) {
            // Imagem do ARASAAC (URL) - tenta converter para base64
            this.showLoading('Salvando imagem do pictograma...');
            try {
                // Tenta converter para base64, se falhar usa URL direto
                try {
                    categoryPhoto = await this.converterUrlParaBase64(imageUrlInput.value);
                } catch (conversionError) {
                    // Se falhar conversão (CORS), salva URL direto
                    categoryPhoto = imageUrlInput.value;
                }
            } catch (error) {
                this.hideLoading();
                this.showError('Erro ao processar imagem do pictograma');
                return;
            }
            this.hideLoading();
        } else if (imageInput && imageInput.files && imageInput.files[0]) {
            // Usuário escolheu imagem local (fallback caso base64 não tenha sido salvo)
            this.showLoading('Salvando e otimizando imagem...');
            try {
                const file = imageInput.files[0];
                const reader = new FileReader();
                
                const base64 = await new Promise((resolve, reject) => {
                    reader.onload = (event) => resolve(event.target.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
                
                // Comprime se necessário
                const sizeKB = (base64.length * 3) / 4 / 1024;
                if (sizeKB > 200) {
                    categoryPhoto = await this.compressImage(base64, 800, 0.8);
                } else {
                    categoryPhoto = base64;
                }
            } catch (error) {
                this.hideLoading();
                this.showError('Erro ao carregar imagem: ' + error.message);
                return;
            }
            this.hideLoading();
        } else {
            // Verifica se há imagem no preview (última tentativa)
            const previewImg = document.getElementById('previewCategoryImage');
            if (previewImg && previewImg.src && previewImg.src.startsWith('data:image')) {
                categoryPhoto = previewImg.src;
        } else {
            // Se não escolheu imagem, detecta ícone automaticamente baseado no título
            icon = detectIconByTitle(name);
            }
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

    getARASAACLanguageCode() {
        const savedLanguage = localStorage.getItem('appLanguage') || 'pt-BR';
        const langCode = savedLanguage.split('-')[0].toLowerCase();
        
        // Mapeamento de idiomas do app para códigos ARASAAC
        const arasaacLangMap = {
            'pt': 'pt',
            'es': 'es',
            'en': 'en',
            'fr': 'fr',
            'de': 'de',
            'it': 'it',
            'ca': 'ca',
            'gl': 'gl',
            'eu': 'eu',
            'val': 'val'
        };
        
        // Retorna código ARASAAC ou 'pt' como fallback
        return arasaacLangMap[langCode] || 'pt';
    }

    async buscarPictogramasARASAAC(termo) {
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        
        if (!termo || !termo.trim()) {
            return { success: false, error: t('arasaacEnterWord') };
        }

        // Verifica se está offline
        if (!navigator.onLine) {
            return { success: false, error: t('arasaacOfflineError') };
        }

        const termoNormalizado = termo.trim().toLowerCase();
        const langCode = this.getARASAACLanguageCode();
        const cacheKey = `arasaac_cache_${langCode}_${termoNormalizado}`;
        const cacheTimestampKey = `arasaac_cache_time_${langCode}_${termoNormalizado}`;
        
        // Verifica cache (válido por 1 hora)
        try {
            const cached = sessionStorage.getItem(cacheKey);
            const cacheTime = sessionStorage.getItem(cacheTimestampKey);
            if (cached && cacheTime) {
                const age = Date.now() - parseInt(cacheTime);
                if (age < 3600000) { // 1 hora
                    return { success: true, pictogramas: JSON.parse(cached), fromCache: true };
                }
            }
        } catch (e) {
            // Ignora erros de cache
        }

        try {
            const langCode = this.getARASAACLanguageCode();
            const apiUrl = `https://api.arasaac.org/api/pictograms/${langCode}/search/${encodeURIComponent(termoNormalizado)}`;
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;

            const resposta = await fetch(proxyUrl);
            if (!resposta.ok) throw new Error(`Erro HTTP: ${resposta.status}`);

            const proxyData = await resposta.json();
            if (!proxyData || !proxyData.contents) throw new Error('Resposta inválida do proxy');

            const dados = JSON.parse(proxyData.contents);
            
            if (dados && dados.error) {
                throw new Error(`Erro da API: ${dados.error.message || dados.error.type}`);
            }

            if (!Array.isArray(dados) || dados.length === 0) {
                return { success: false, error: t('arasaacNoResults') };
            }

            const pictogramas = dados.slice(0, 20);
            
            // Salva no cache
            try {
                sessionStorage.setItem(cacheKey, JSON.stringify(pictogramas));
                sessionStorage.setItem(cacheTimestampKey, Date.now().toString());
                // Limpa cache antigo (mantém apenas últimos 50 termos)
                this.cleanARASAACCache();
            } catch (e) {
                // Ignora erros de cache
            }

            return { success: true, pictogramas: pictogramas };
            
        } catch (erro) {
            return { success: false, error: erro.message };
        }
    }

    cleanARASAACCache() {
        try {
            const keys = Object.keys(sessionStorage).filter(k => k.startsWith('arasaac_cache_'));
            if (keys.length > 50) {
                // Remove os mais antigos
                const timestamps = keys.map(k => ({
                    key: k,
                    time: parseInt(sessionStorage.getItem(`arasaac_cache_time_${k.replace('arasaac_cache_', '')}`) || '0')
                })).sort((a, b) => a.time - b.time);
                
                const toRemove = timestamps.slice(0, keys.length - 50);
                toRemove.forEach(({ key }) => {
                    const termo = key.replace('arasaac_cache_', '');
                    sessionStorage.removeItem(key);
                    sessionStorage.removeItem(`arasaac_cache_time_${termo}`);
                });
            }
        } catch (e) {
            // Ignora erros
        }
    }

    async compressImage(base64String, maxWidth = 800, quality = 0.8) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                
                // Redimensiona se necessário
                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }
                
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                try {
                    // Usa JPEG para melhor compressão
                    const compressed = canvas.toDataURL('image/jpeg', quality);
                    
                    // Verifica tamanho (limite de 500KB)
                    const sizeKB = (compressed.length * 3) / 4 / 1024;
                    if (sizeKB > 500) {
                        // Tenta com qualidade menor
                        if (quality > 0.5) {
                            return this.compressImage(base64String, maxWidth, quality - 0.1).then(resolve).catch(reject);
                        }
                    }
                    
                    resolve(compressed);
                } catch (error) {
                    reject(error);
                }
            };
            img.onerror = reject;
            img.src = base64String;
        });
    }

    async converterUrlParaBase64(imageUrl) {
        // Verifica cache primeiro
        const cacheKey = `img_cache_${btoa(imageUrl).replace(/[/+=]/g, '').substring(0, 50)}`;
        try {
            const cached = sessionStorage.getItem(cacheKey);
            if (cached) {
                return cached;
            }
        } catch (e) {
            // Ignora erros de cache
        }
        
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            
            img.onload = async () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                
                try {
                    let dataUrl = canvas.toDataURL('image/png');
                    
                    // Comprime se for muito grande
                    const sizeKB = (dataUrl.length * 3) / 4 / 1024;
                    if (sizeKB > 200) {
                        dataUrl = await this.compressImage(dataUrl, 800, 0.8);
                    }
                    
                    // Salva no cache
                    try {
                        sessionStorage.setItem(cacheKey, dataUrl);
                    } catch (e) {
                        // Ignora se cache estiver cheio
                    }
                    
                    resolve(dataUrl);
                } catch (error) {
                    reject(new Error('Erro ao converter imagem (possível problema de CORS)'));
                }
            };
            
            img.onerror = () => {
                reject(new Error('Erro ao carregar imagem da URL'));
            };
            
            img.src = imageUrl;
        });
    }

    openARASAACSearchModal(onSelect) {
        let searchModal = document.getElementById('arasaacSearchModal');
        if (searchModal) searchModal.remove();
        
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        
        searchModal = document.createElement('div');
        searchModal.id = 'arasaacSearchModal';
        searchModal.className = 'modal-bg';
        searchModal.innerHTML = `
            <div class="modal-content" role="dialog" aria-modal="true" style="max-width: 850px; max-height: 90vh; overflow-y: auto;">
                <h2 id="arasaacModalTitle" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px; color: #333;">
                    <i class="fas fa-search" style="color: #007bff;"></i> ${t('arasaacModalTitle')}
                </h2>
                
                <div id="arasaacInstruction" style="padding: 12px; background: #d1ecf1; border-left: 4px solid #0c5460; margin-bottom: 20px; border-radius: 4px; font-size: 13px; color: #0c5460;">
                    <i class="fas fa-info-circle"></i> ${t('arasaacInstruction')}
                </div>
                
                <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                    <input type="text" id="inputBuscaPictograma" placeholder="${t('arasaacPlaceholder')}" 
                           style="flex: 1; padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;"
                           autofocus />
                    <button id="btnBuscarPictograma" 
                            style="padding: 12px 24px; background: #007bff; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-search"></i> ${t('arasaacSearchBtn')}
                    </button>
                </div>
                
                <div id="resultadosPictogramas" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 15px; margin-bottom: 20px; min-height: 200px; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px; background: #f9f9f9;">
                    <div id="arasaacEmptyMessage" style="text-align: center; padding: 40px; color: #666; grid-column: 1 / -1;">
                        <i class="fas fa-search" style="font-size: 2em; color: #ccc; margin-bottom: 10px;"></i>
                        <p>${t('arasaacEmptyMessage')}</p>
                    </div>
                </div>
                
                <div style="display: flex; gap: 10px;">
                    <button type="button" id="btnConfirmarSelecaoARASAAC" 
                            style="flex: 1; padding: 12px; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; display: none; align-items: center; justify-content: center; gap: 8px;">
                        <i class="fas fa-check"></i> ${t('arasaacConfirmSelection')}
                    </button>
                    <button type="button" id="btnCancelarBuscaARASAAC" 
                            style="flex: 1; padding: 12px; background: #6c757d; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600;">
                        ${t('cancel')}
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(searchModal);
        
        const searchInput = document.getElementById('inputBuscaPictograma');
        const searchBtn = document.getElementById('btnBuscarPictograma');
        const resultadosDiv = document.getElementById('resultadosPictogramas');
        const btnConfirmar = document.getElementById('btnConfirmarSelecaoARASAAC');
        const btnCancelar = document.getElementById('btnCancelarBuscaARASAAC');
        
        let pictogramaSelecionado = null;
        
        const performSearch = async () => {
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            
            const termo = searchInput.value.trim();
            if (!termo) {
                this.showError(t('arasaacEnterWord'));
                return;
            }
            
            resultadosDiv.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #666; grid-column: 1 / -1;">
                    <i class="fas fa-spinner fa-spin" style="font-size: 2em; color: #007bff;"></i>
                    <p style="margin-top: 10px;">${t('arasaacSearchBtn')}...</p>
                </div>
            `;
            btnConfirmar.style.display = 'none';
            pictogramaSelecionado = null;
            
            const resultado = await this.buscarPictogramasARASAAC(termo);
            
            if (!resultado.success) {
                resultadosDiv.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: #dc3545; grid-column: 1 / -1;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 2em; margin-bottom: 10px;"></i>
                        <p>${resultado.error}</p>
                    </div>
                `;
                return;
            }
            
            if (!resultado.pictogramas || resultado.pictogramas.length === 0) {
                resultadosDiv.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: #666; grid-column: 1 / -1;">
                        ${t('arasaacNoResults')} "${termo}"
                    </div>
                `;
                return;
            }
            
            resultadosDiv.innerHTML = resultado.pictogramas.map(p => {
                const keyword = p.keywords && p.keywords[0] ? p.keywords[0].keyword : 'Sem nome';
                const imageUrl = `https://static.arasaac.org/pictograms/${p._id}/${p._id}_500.png`;
                const safeKeyword = keyword.replace(/'/g, "&#39;").replace(/"/g, "&quot;").replace(/&/g, "&amp;");
                
                return `
                    <div class="pictograma-item-arasaac" data-pictogram-id="${p._id}" 
                         style="background: white; border: 2px solid #ddd; border-radius: 8px; padding: 10px; text-align: center; cursor: pointer; transition: all 0.2s;"
                         onclick="app.selectARASAACPictograma(${p._id}, '${imageUrl.replace(/'/g, "\\'")}', '${safeKeyword}')">
                        <img src="${imageUrl}" alt="${safeKeyword}" loading="lazy" 
                             style="width: 90px; height: 90px; object-fit: contain; margin-bottom: 8px; display: block; margin: 0 auto 8px;">
                        <p style="font-size: 11px; color: #555; margin: 0; word-break: break-word; line-height: 1.3;">${safeKeyword}</p>
                    </div>
                `;
            }).join('');
            
            // Adicionar hover effect
            resultadosDiv.querySelectorAll('.pictograma-item-arasaac').forEach(item => {
                item.addEventListener('mouseenter', function() {
                    if (!this.classList.contains('selected')) {
                        this.style.borderColor = '#007bff';
                        this.style.background = '#e7f3ff';
                    }
                });
                item.addEventListener('mouseleave', function() {
                    if (!this.classList.contains('selected')) {
                        this.style.borderColor = '#ddd';
                        this.style.background = 'white';
                    }
                });
            });
        };
        
        // Armazenar função de seleção globalmente temporariamente
        window.tempSelectARASAAC = (id, imageUrl, keyword) => {
            // Remove seleção anterior
            resultadosDiv.querySelectorAll('.pictograma-item-arasaac').forEach(item => {
                item.classList.remove('selected');
                item.style.borderColor = '#ddd';
                item.style.background = 'white';
            });
            
            // Seleciona novo item
            const selectedItem = resultadosDiv.querySelector(`[data-pictogram-id="${id}"]`);
            if (selectedItem) {
                selectedItem.classList.add('selected');
                selectedItem.style.borderColor = '#28a745';
                selectedItem.style.background = '#d4edda';
                selectedItem.style.borderWidth = '3px';
            }
            
            pictogramaSelecionado = { id, imageUrl, keyword };
            btnConfirmar.style.display = 'flex';
        };
        
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
        
        btnConfirmar.addEventListener('click', async () => {
            if (!pictogramaSelecionado) return;
            
            this.showLoading('Carregando pictograma...');
            try {
                // Converte URL para base64
                const base64Image = await this.converterUrlParaBase64(pictogramaSelecionado.imageUrl);
                onSelect(base64Image, pictogramaSelecionado.imageUrl);
                searchModal.remove();
                delete window.tempSelectARASAAC;
            } catch (error) {
                // Se falhar conversão, usa URL direto
                onSelect(null, pictogramaSelecionado.imageUrl);
                searchModal.remove();
                delete window.tempSelectARASAAC;
            }
            this.hideLoading();
        });
        
        btnCancelar.addEventListener('click', () => {
            searchModal.remove();
            delete window.tempSelectARASAAC;
        });
        
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.remove();
                delete window.tempSelectARASAAC;
            }
        });
    }

    selectARASAACPictograma(id, imageUrl, keyword) {
        if (window.tempSelectARASAAC) {
            window.tempSelectARASAAC(id, imageUrl, keyword);
        }
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
        
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        
        modal.innerHTML = `
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="speechModalTitle" style="display: flex; flex-direction: column; max-height: 90vh;">
                <h2 id="speechModalTitle"><i class="fas fa-microphone"></i> ${t('createSpeechTitle')}</h2>
                <div style="flex: 1; overflow-y: auto; padding: 32px;">
                <form id="createSpeechForm">
                        <label style="display: block; font-size: 18px; font-weight: 600; color: #333; margin-bottom: 12px;">${t('speechText')}:</label>
                        <input type="text" id="speechText" required maxlength="100" placeholder="${t('speechTextPlaceholder')}" autofocus style="width: 100%; padding: 14px; font-size: 16px; border: 2px solid #ddd; border-radius: 8px; margin-bottom: 20px; box-sizing: border-box;" />
                    
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; font-size: 16px; font-weight: 600; color: #333; margin-bottom: 8px;">
                                <i class="fas fa-image" style="margin-right: 6px;"></i> ${t('chooseImage')}
                        </label>
                            <div style="display: flex; gap: 10px; margin-bottom: 12px; flex-wrap: wrap;">
                                <button type="button" id="btnBuscarARASAACSpeech" style="flex: 1; min-width: 150px; padding: 12px; background: #9C27B0; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                    <i class="fas fa-search"></i> ${t('searchPictogram')}
                        </button>
                                <button type="button" id="selectImageBtn" style="flex: 1; min-width: 150px; padding: 12px; background: #2196F3; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                    <i class="fas fa-folder-open"></i> ${t('localGallery')}
                                </button>
                            </div>
                            <input type="file" id="speechImage" accept="image/*" style="display: none;" />
                            <input type="hidden" id="speechImageUrl" value="" />
                            <input type="hidden" id="speechImageBase64" value="" />
                        <div id="selectedImagePreview" style="margin-top: 12px; display: none;">
                                <img id="previewImage" src="" alt="Preview" style="max-width: 100%; max-height: 200px; border-radius: 8px; border: 2px solid #ddd; display: block; margin: 0 auto;" />
                                <p style="margin-top: 8px; font-size: 14px; color: #666; text-align: center;">${t('imageSelected')}</p>
                                <button type="button" id="removeSelectedSpeechImage" style="width: 100%; margin-top: 8px; padding: 8px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 13px; display: flex; align-items: center; justify-content: center; gap: 6px;">
                                    <i class="fas fa-times"></i> ${t('removeImage')}
                                </button>
                        </div>
                            <p style="margin-top: 8px; font-size: 13px; color: #999; font-style: italic;">
                                <i class="fas fa-info-circle"></i> ${t('autoIconInfo')}
                            </p>
                    </div>
                </form>
                </div>
                <div style="padding: 20px 32px; border-top: 2px solid #e9ecef; background: #f8f9fa; border-radius: 0 0 24px 24px; display: flex; gap: 10px; justify-content: flex-end; flex-shrink: 0;">
                    <button type="button" id="cancelSpeechModal" style="padding: 10px 20px; background: #ccc; color: #333; border: none; border-radius: 6px; cursor: pointer; font-size: 16px;">${t('cancel')}</button>
                    <button type="submit" form="createSpeechForm" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">${t('save')}</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Configurar elementos
        const imageInput = document.getElementById('speechImage');
        const imageUrlInput = document.getElementById('speechImageUrl');
        const imageBase64Input = document.getElementById('speechImageBase64');
        const selectImageBtn = document.getElementById('selectImageBtn');
        const btnBuscarARASAACSpeech = document.getElementById('btnBuscarARASAACSpeech');
        const previewDiv = document.getElementById('selectedImagePreview');
        const previewImg = document.getElementById('previewImage');
        const removeImageBtn = document.getElementById('removeSelectedSpeechImage');
        
        let selectedImageData = null; // Armazena base64 ou URL
        
        const updatePreview = (imageSrc, isUrl = false) => {
            previewImg.src = imageSrc;
            previewDiv.style.display = 'block';
            selectedImageData = imageSrc;
            
            // Se for base64 (começa com "data:image")
            if (imageSrc && imageSrc.startsWith('data:image')) {
                imageBase64Input.value = imageSrc;
                imageUrlInput.value = ''; // Limpa URL se tiver
            } else if (isUrl) {
                // Se for URL
                imageUrlInput.value = imageSrc;
                imageBase64Input.value = ''; // Limpa base64 se tiver
            }
        };
        
        const removeSelectedImage = () => {
            previewDiv.style.display = 'none';
            selectedImageData = null;
            imageUrlInput.value = '';
            imageBase64Input.value = '';
            if (imageInput) imageInput.value = '';
        };
        
        // Botão buscar ARASAAC
        btnBuscarARASAACSpeech.addEventListener('click', () => {
            this.openARASAACSearchModal((base64Image, imageUrl) => {
                if (base64Image) {
                    // Se veio base64, atualiza preview e salva no input hidden
                    updatePreview(base64Image, false);
                } else if (imageUrl) {
                    // Se veio URL, tenta converter para base64 primeiro
                    this.showLoading('Convertendo imagem...');
                    this.converterUrlParaBase64(imageUrl).then(base64 => {
                        updatePreview(base64, false);
                        this.hideLoading();
                    }).catch(() => {
                        // Se falhar, usa URL direto
                        updatePreview(imageUrl, true);
                        this.hideLoading();
                    });
                }
            });
        });
        
        // Botão galeria local
        selectImageBtn.addEventListener('click', () => {
            imageInput.click();
        });
        
        imageInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    updatePreview(event.target.result, false);
                    imageUrlInput.value = ''; // Limpa URL se tiver
                    imageBase64Input.value = event.target.result; // Salva base64 do arquivo local
                };
                reader.readAsDataURL(file);
            }
        });
        
        removeImageBtn.addEventListener('click', removeSelectedImage);
        
        document.getElementById('cancelSpeechModal').onclick = () => modal.remove();
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
        
        const speechForm = document.getElementById('createSpeechForm');
        const submitSpeechBtn = document.querySelector('button[form="createSpeechForm"]');
        
        // Handler para submit do form
        const handleSpeechFormSubmit = (e) => {
            e.preventDefault();
            this.handleCreateSpeechSubmit(e);
            modal.remove();
        };
        
        speechForm.addEventListener('submit', handleSpeechFormSubmit);
        
        // Adiciona evento ao botão de submit que está fora do form
        if (submitSpeechBtn) {
            submitSpeechBtn.addEventListener('click', handleSpeechFormSubmit);
        }
    }

    async handleCreateSpeechSubmit(e) {
        e.preventDefault();
        const speechTextInput = document.getElementById('speechText');
        const speechText = this.sanitizeInput(speechTextInput.value);
        
        const validation = this.validateSpeechText(speechText);
        if (!validation.valid) {
            this.showError(validation.error);
            return;
        }

        if (!this.currentCategory) {
            this.showError('Erro: nenhuma categoria selecionada');
            return;
        }

        // Verifica se há imagem (base64 ARASAAC, URL ARASAAC, arquivo local, ou gera automaticamente)
        const imageBase64Input = document.getElementById('speechImageBase64');
        const imageUrlInput = document.getElementById('speechImageUrl');
        const imageInput = document.getElementById('speechImage');
        let cardImage = null;
        let icon = 'fas fa-comment';
        
        // Prioridade: base64 (ARASAAC ou arquivo local) > URL ARASAAC > arquivo local > geração automática
        if (imageBase64Input && imageBase64Input.value) {
            // Imagem ARASAAC ou arquivo local já convertida para base64
            cardImage = imageBase64Input.value;
        } else if (imageUrlInput && imageUrlInput.value) {
            // Imagem do ARASAAC (URL) - tenta converter para base64
            this.showLoading('Salvando imagem do pictograma...');
            try {
                // Tenta converter para base64, se falhar usa URL direto
                try {
                    cardImage = await this.converterUrlParaBase64(imageUrlInput.value);
                } catch (conversionError) {
                    // Se falhar conversão (CORS), salva URL direto
                    cardImage = imageUrlInput.value;
                }
            } catch (error) {
                this.hideLoading();
                this.showError('Erro ao processar imagem do pictograma');
                return;
            }
            this.hideLoading();
        } else if (imageInput && imageInput.files && imageInput.files[0]) {
            // Usuário escolheu imagem local (fallback caso base64 não tenha sido salvo)
            this.showLoading('Salvando e otimizando imagem...');
            
            const file = imageInput.files[0];
            const reader = new FileReader();
            
            const base64 = await new Promise((resolve, reject) => {
                reader.onload = (event) => resolve(event.target.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
            
            // Comprime se necessário
            const sizeKB = (base64.length * 3) / 4 / 1024;
            if (sizeKB > 200) {
                cardImage = await this.compressImage(base64, 800, 0.8);
            } else {
                cardImage = base64;
            }
            
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

    openEditSpeechModal(item, itemIndex) {
        if (!this.currentCategory) {
            this.showError('Erro: nenhuma categoria selecionada');
            return;
        }

        let modal = document.getElementById('editSpeechModal');
        if (modal) modal.remove();
        modal = document.createElement('div');
        modal.id = 'editSpeechModal';
        modal.className = 'modal-bg';
        
        const existingImage = item.image || '';
        const previewVisible = existingImage ? 'block' : 'none';
        
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        
        modal.innerHTML = `
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="editSpeechModalTitle">
                <h2 id="editSpeechModalTitle"><i class="fas fa-edit"></i> ${t('editSpeechTitle')}</h2>
                <form id="editSpeechForm">
                    <label style="display: block; font-size: 18px; font-weight: 600; color: #333; margin-bottom: 12px;">${t('speechText')}:</label>
                    <input type="text" id="editSpeechText" required maxlength="100" placeholder="${t('speechTextPlaceholder')}" value="${item.text || ''}" autofocus style="width: 100%; padding: 14px; font-size: 16px; border: 2px solid #ddd; border-radius: 8px; margin-bottom: 20px; box-sizing: border-box;" />
                    
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; font-size: 16px; font-weight: 600; color: #333; margin-bottom: 8px;">
                            <i class="fas fa-image" style="margin-right: 6px;"></i> ${t('chooseImage')}
                        </label>
                        <div style="display: flex; gap: 10px; margin-bottom: 12px; flex-wrap: wrap;">
                            <button type="button" id="btnBuscarARASAACEditSpeech" style="flex: 1; min-width: 150px; padding: 12px; background: #9C27B0; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                <i class="fas fa-search"></i> ${t('searchPictogram')}
                            </button>
                            <button type="button" id="selectEditImageBtn" style="flex: 1; min-width: 150px; padding: 12px; background: #2196F3; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                <i class="fas fa-folder-open"></i> ${t('localGallery')}
                            </button>
                        </div>
                        <input type="file" id="editSpeechImage" accept="image/*" style="display: none;" />
                        <input type="hidden" id="editSpeechImageUrl" value="" />
                        <input type="hidden" id="editSpeechImageBase64" value="${existingImage && existingImage.startsWith('data:image') ? existingImage : ''}" />
                        <div id="selectedEditImagePreview" style="margin-top: 12px; display: ${previewVisible};">
                            <img id="previewEditImage" src="${existingImage || ''}" alt="Preview" style="max-width: 100%; max-height: 200px; border-radius: 8px; border: 2px solid #ddd; display: block; margin: 0 auto;" />
                            <p style="margin-top: 8px; font-size: 14px; color: #666; text-align: center;">${t('imageSelected')}</p>
                            <button type="button" id="removeSelectedEditSpeechImage" style="width: 100%; margin-top: 8px; padding: 8px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 13px; display: flex; align-items: center; justify-content: center; gap: 6px;">
                                <i class="fas fa-times"></i> ${t('removeImage')}
                            </button>
                        </div>
                        <p style="margin-top: 8px; font-size: 13px; color: #999; font-style: italic;">
                            <i class="fas fa-info-circle"></i> ${t('autoIconInfo')}
                        </p>
                    </div>
                    
                    <div style="display: flex; gap: 10px; justify-content: flex-end;">
                        <button type="button" id="cancelEditSpeechModal" style="padding: 10px 20px; background: #ccc; color: #333; border: none; border-radius: 6px; cursor: pointer; font-size: 16px;">${t('cancel')}</button>
                        <button type="submit" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">${t('saveChanges')}</button>
                    </div>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Configurar elementos
        const imageInput = document.getElementById('editSpeechImage');
        const imageUrlInput = document.getElementById('editSpeechImageUrl');
        const imageBase64Input = document.getElementById('editSpeechImageBase64');
        const selectImageBtn = document.getElementById('selectEditImageBtn');
        const btnBuscarARASAACEditSpeech = document.getElementById('btnBuscarARASAACEditSpeech');
        const previewDiv = document.getElementById('selectedEditImagePreview');
        const previewImg = document.getElementById('previewEditImage');
        const removeImageBtn = document.getElementById('removeSelectedEditSpeechImage');
        
        // Se já existe imagem, configura URL ou base64
        if (existingImage && !existingImage.startsWith('data:image')) {
            imageUrlInput.value = existingImage;
        }
        
        let selectedImageData = existingImage || null;
        
        const updatePreview = (imageSrc, isUrl = false) => {
            previewImg.src = imageSrc;
            previewDiv.style.display = 'block';
            selectedImageData = imageSrc;
            
            if (imageSrc && imageSrc.startsWith('data:image')) {
                imageBase64Input.value = imageSrc;
                imageUrlInput.value = '';
            } else if (isUrl) {
                imageUrlInput.value = imageSrc;
                imageBase64Input.value = '';
            }
        };
        
        selectImageBtn.onclick = () => imageInput.click();
        btnBuscarARASAACEditSpeech.onclick = () => {
            this.openARASAACSearchModal((pictograma) => {
                updatePreview(pictograma.imageUrl, true);
                // Tenta converter para base64
                this.converterUrlParaBase64(pictograma.imageUrl).then(base64 => {
                    imageBase64Input.value = base64;
                    imageUrlInput.value = '';
                    updatePreview(base64, false);
                }).catch(() => {
                    // Se falhar, mantém URL
                });
            });
        };
        
        imageInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    updatePreview(event.target.result, false);
                };
                reader.readAsDataURL(file);
            }
        };
        
        removeImageBtn.onclick = () => {
            previewDiv.style.display = 'none';
            previewImg.src = '';
            imageInput.value = '';
            imageUrlInput.value = '';
            imageBase64Input.value = '';
            selectedImageData = null;
        };
        
        document.getElementById('cancelEditSpeechModal').onclick = () => modal.remove();
        document.getElementById('editSpeechForm').onsubmit = (e) => {
            e.preventDefault();
            this.handleEditSpeechSubmit(e, itemIndex);
            modal.remove();
        };
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    async handleEditSpeechSubmit(e, itemIndex) {
        e.preventDefault();
        
        const speechTextInput = document.getElementById('editSpeechText');
        const speechText = this.sanitizeInput(speechTextInput.value);
        
        const validation = this.validateSpeechText(speechText);
        if (!validation.valid) {
            this.showError(validation.error);
            return;
        }

        const imageBase64Input = document.getElementById('editSpeechImageBase64');
        const imageUrlInput = document.getElementById('editSpeechImageUrl');
        const imageInput = document.getElementById('editSpeechImage');
        let cardImage = null;
        let icon = 'fas fa-comment';
        
        if (imageBase64Input && imageBase64Input.value) {
            cardImage = imageBase64Input.value;
        } else if (imageUrlInput && imageUrlInput.value) {
            this.showLoading('Salvando imagem do pictograma...');
            try {
                try {
                    cardImage = await this.converterUrlParaBase64(imageUrlInput.value);
                } catch (conversionError) {
                    cardImage = imageUrlInput.value;
                }
            } catch (error) {
                this.hideLoading();
                this.showError('Erro ao processar imagem do pictograma');
                return;
            }
            this.hideLoading();
        } else if (imageInput && imageInput.files && imageInput.files[0]) {
            this.showLoading('Salvando imagem...');
            const file = imageInput.files[0];
            const reader = new FileReader();
            cardImage = await new Promise((resolve, reject) => {
                reader.onload = (event) => resolve(event.target.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
            this.hideLoading();
        } else {
            // Se não há nova imagem, mantém a anterior ou gera
            const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
            const speeches = customSpeeches[this.currentCategory] || [];
            if (speeches[itemIndex] && speeches[itemIndex].image) {
                cardImage = speeches[itemIndex].image;
            } else {
                this.showLoading('Gerando imagem do card...');
                try {
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
                    cardImage = await this.exportCardAsImage(speechText, categoryColor, icon);
                    this.hideLoading();
                } catch (error) {
                    this.hideLoading();
                    this.showError('Erro ao gerar imagem: ' + error.message);
                    return;
                }
            }
        }

        try {
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

            const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
            if (!customSpeeches[this.currentCategory]) {
                customSpeeches[this.currentCategory] = [];
            }

            // Atualiza o item específico
            if (customSpeeches[this.currentCategory][itemIndex]) {
                customSpeeches[this.currentCategory][itemIndex] = {
                    text: speechText,
                    icon: icon,
                    image: cardImage
                };
            } else {
                // Se não encontrar pelo índice, busca pelo texto
                const index = customSpeeches[this.currentCategory].findIndex(s => s.text === speechText);
                if (index !== -1) {
                    customSpeeches[this.currentCategory][index] = {
                        text: speechText,
                        icon: icon,
                        image: cardImage
                    };
                }
            }

            localStorage.setItem('customSpeeches', JSON.stringify(customSpeeches));
            this.showSubCategories(this.currentCategory);
            this.updateStatus('Fala atualizada!');
        } catch (error) {
            this.showError('Erro ao atualizar fala: ' + error.message);
            console.error('Erro ao atualizar fala:', error);
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
        
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        
        confirmModal.innerHTML = `
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="deleteModalTitle" style="display: flex; flex-direction: column; max-width: 500px; max-height: 90vh;">
                <h2 id="deleteModalTitle" style="color: #e74c3c; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-exclamation-triangle"></i> ${t('confirmDelete')}
                </h2>
                <div style="flex: 1; overflow-y: auto; padding: 20px;">
                    <p style="font-size: 18px; margin-bottom: 15px;">${count === 1 ? t('confirmDeleteCategory') : t('confirmDeleteCategories').replace('{count}', count.toString())}:</p>
                    <ul style="list-style: none; padding: 0; margin: 15px 0;">
                        ${categoriesList}
                    </ul>
                    <p style="color: #e74c3c; margin-top: 15px; font-size: 14px;">
                        <i class="fas fa-exclamation-circle"></i> ${t('deleteWarning')}
                    </p>
                </div>
                <div style="padding: 15px 20px; border-top: 2px solid #e9ecef; background: #f8f9fa; border-radius: 0 0 24px 24px; display: flex; gap: 10px; justify-content: flex-end; flex-shrink: 0;">
                    <button type="button" id="cancelDeleteBtn" style="padding: 12px 24px; background: #95a5a6; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">
                        ${t('no')}
                    </button>
                    <button type="button" id="confirmDeleteBtn" style="padding: 12px 24px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-trash"></i> ${t('yesDelete')}
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
        
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        
        confirmModal.innerHTML = `
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="deleteSubcategoryModalTitle" style="display: flex; flex-direction: column; max-width: 500px; max-height: 90vh;">
                <h2 id="deleteSubcategoryModalTitle" style="color: #e74c3c; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-exclamation-triangle"></i> ${t('confirmDelete')}
                </h2>
                <div style="flex: 1; overflow-y: auto; padding: 20px;">
                    <p style="font-size: 18px; margin-bottom: 15px;">${count === 1 ? t('confirmDeleteSpeech') : t('confirmDeleteSpeeches').replace('{count}', count.toString())}:</p>
                    <ul style="list-style: none; padding: 0; margin: 15px 0;">
                        ${itemsList}
                    </ul>
                    <p style="color: #e74c3c; margin-top: 15px; font-size: 14px;">
                        <i class="fas fa-exclamation-circle"></i> ${t('deleteWarning')}
                    </p>
                </div>
                <div style="padding: 15px 20px; border-top: 2px solid #e9ecef; background: #f8f9fa; border-radius: 0 0 24px 24px; display: flex; gap: 10px; justify-content: flex-end; flex-shrink: 0;">
                    <button type="button" id="cancelDeleteSubcategoryBtn" style="padding: 12px 24px; background: #95a5a6; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">
                        ${t('no')}
                    </button>
                    <button type="button" id="confirmDeleteSubcategoryBtn" style="padding: 12px 24px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-trash"></i> ${t('yesDelete')}
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
        window.app = new CommunicationApp();
        const app = window.app;
        
        // Salvar preferências quando mudarem e resetar timer
        const speedControl = document.getElementById('speedControl');
        const toneControl = document.getElementById('toneControl');
        const voiceSelect = document.getElementById('voiceSelect');
        
        if (speedControl) {
            speedControl.addEventListener('change', () => {
                app.saveUserPreferences();
            });
        }
        if (toneControl) {
            toneControl.addEventListener('change', () => {
                app.saveUserPreferences();
            });
        }
        if (voiceSelect) {
            voiceSelect.addEventListener('change', () => {
                app.saveUserPreferences();
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
