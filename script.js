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
        'edit': 'Editar',
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
        'loadMore': 'Carregar mais',
        'category': 'Categoria',
        'presentationModeActivated': 'Modo Apresentação ativado',
        'presentationModeDeactivated': 'Modo Apresentação desativado',
        'speechUpdated': 'Fala atualizada!',
        'multipleCategoriesDeleted': '{count} categorias excluídas!',
        'multipleSpeechesDeleted': '{count} falas excluídas!',
        'speaking': 'Falando:',
        'loadingVoices': 'Carregando vozes...',
        'initializing': 'Inicializando aplicativo...',
        'categoryDeleted': 'Categoria excluída!',
        'speechDeleted': 'Fala excluída!',
        'categoryCreated': 'Nova categoria criada!',
        'speechCreated': 'Nova fala criada!',
        'categoryUpdated': 'Categoria atualizada!',
        'emptyCategoryMessage': 'Esta categoria ainda não tem itens. Clique em "Criar Fala" para adicionar.',
        'dataExported': 'Dados exportados com sucesso!',
        'dataImported': 'Dados importados com sucesso!',
        'deleteModeCategories': 'Modo exclusão ativado - Marque as categorias para excluir',
        'deleteModeSpeeches': 'Modo exclusão ativado - Marque as falas para excluir',
        'editModeCategories': 'Modo edição ativado - Marque as categorias para editar',
        'editModeSpeeches': 'Modo edição ativado - Marque as falas para editar',
        'editSelected': 'Editar Selecionados',
        
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
        'noTextSelected': 'Nenhum texto selecionado',
        'browserNotSupported': 'Seu navegador não suporta síntese de voz',
        'connectionRestored': 'Conexão restaurada',
        'offlineMode': 'Modo offline - Alguns recursos podem estar indisponíveis',
        
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
        'edit': 'Edit',
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
        'loadMore': 'Load more',
        'category': 'Category',
        'presentationModeActivated': 'Presentation mode activated',
        'presentationModeDeactivated': 'Presentation mode deactivated',
        'speechUpdated': 'Speech updated!',
        'multipleCategoriesDeleted': '{count} categories deleted!',
        'multipleSpeechesDeleted': '{count} speeches deleted!',
        'speaking': 'Speaking:',
        'loadingVoices': 'Loading voices...',
        'initializing': 'Initializing application...',
        'categoryDeleted': 'Category deleted!',
        'speechDeleted': 'Speech deleted!',
        'categoryCreated': 'New category created!',
        'speechCreated': 'New speech created!',
        'categoryUpdated': 'Category updated!',
        'emptyCategoryMessage': 'This category has no items yet. Click "Create Speech" to add.',
        'dataExported': 'Data exported successfully!',
        'dataImported': 'Data imported successfully!',
        'deleteModeCategories': 'Delete mode activated - Mark categories to delete',
        'deleteModeSpeeches': 'Delete mode activated - Mark speeches to delete',
        'editModeCategories': 'Edit mode activated - Mark categories to edit',
        'editModeSpeeches': 'Edit mode activated - Mark speeches to edit',
        'editSelected': 'Edit Selected',
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
        'noTextSelected': 'No text selected',
        'browserNotSupported': 'Your browser does not support speech synthesis',
        'connectionRestored': 'Connection restored',
        'offlineMode': 'Offline mode - Some resources may be unavailable',
        
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
        'edit': 'Editar',
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
        'loadMore': 'Cargar más',
        'category': 'Categoría',
        'presentationModeActivated': 'Modo presentación activado',
        'presentationModeDeactivated': 'Modo presentación desactivado',
        'speechUpdated': 'Habla actualizada!',
        'multipleCategoriesDeleted': '{count} categorías eliminadas!',
        'multipleSpeechesDeleted': '{count} hablas eliminadas!',
        'speaking': 'Hablando:',
        'loadingVoices': 'Cargando voces...',
        'initializing': 'Inicializando aplicación...',
        'categoryDeleted': '¡Categoría eliminada!',
        'speechDeleted': '¡Habla eliminada!',
        'categoryCreated': '¡Nueva categoría creada!',
        'speechCreated': '¡Nueva habla creada!',
        'categoryUpdated': '¡Categoría actualizada!',
        'emptyCategoryMessage': 'Esta categoría aún no tiene elementos. Haz clic en "Crear Habla" para agregar.',
        'dataExported': '¡Datos exportados con éxito!',
        'dataImported': '¡Datos importados con éxito!',
        'deleteModeCategories': 'Modo eliminación activado - Marque las categorías para eliminar',
        'deleteModeSpeeches': 'Modo eliminación activado - Marque las hablas para eliminar',
        'editModeCategories': 'Modo edición activado - Marque las categorías para editar',
        'editModeSpeeches': 'Modo edición activado - Marque las hablas para editar',
        'editSelected': 'Editar Seleccionados',
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
        'noTextSelected': 'Ningún texto seleccionado',
        'browserNotSupported': 'Su navegador no soporta síntesis de voz',
        'connectionRestored': 'Conexión restaurada',
        'offlineMode': 'Modo offline - Algunos recursos pueden no estar disponibles',
        
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
// STORAGE MANAGER - IndexedDB com Blobs
// ============================================
class StorageManager {
    constructor() {
        this.db = null;
        this.isInitialized = false;
        this.useFallback = false; // Flag para usar localStorage como fallback
    }

    // Inicializa o banco de dados IndexedDB
    async initDB() {
        if (this.isInitialized) {
            return this.db;
        }

        try {
            // Verifica se IndexedDB está disponível
            if (!window.indexedDB) {
                console.warn('IndexedDB não está disponível, usando localStorage como fallback');
                this.useFallback = true;
                return null;
            }

            // Cria ou abre o banco de dados
            this.db = new Dexie('communicationAppDB');
            
            // Define o schema
            this.db.version(1).stores({
                speeches: '++id, categoryId, text, icon, imageBlob, imageUrl'
            });

            // Abre o banco
            await this.db.open();
            this.isInitialized = true;
            
            // Tenta migrar dados do localStorage se necessário
            await this.migrateFromLocalStorage();
            
            return this.db;
        } catch (error) {
            console.error('Erro ao inicializar IndexedDB:', error);
            this.useFallback = true;
            return null;
        }
    }

    // Converte base64 para Blob
    async base64ToBlob(base64String) {
        if (!base64String || typeof base64String !== 'string') {
            return null;
        }

        // Se já é uma URL (não base64), retorna null
        if (base64String.startsWith('http://') || base64String.startsWith('https://')) {
            return null;
        }

        try {
            const response = await fetch(base64String);
            const blob = await response.blob();
            return blob;
        } catch (error) {
            console.error('Erro ao converter base64 para Blob:', error);
            return null;
        }
    }

    // Converte Blob para base64 (para exportação)
    async blobToBase64(blob) {
        if (!blob) return null;
        
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    // Migra dados do localStorage para IndexedDB
    async migrateFromLocalStorage() {
        // Verifica se já foi migrado
        const migrationCompleted = localStorage.getItem('indexedDB_migrationCompleted');
        if (migrationCompleted === 'true') {
            return;
        }

        // Verifica se há dados no localStorage
        const customSpeechesStr = localStorage.getItem('customSpeeches');
        if (!customSpeechesStr) {
            localStorage.setItem('indexedDB_migrationCompleted', 'true');
            return;
        }

        try {
            const customSpeeches = JSON.parse(customSpeechesStr);
            let migratedCount = 0;

            // Itera sobre todas as categorias
            for (const [categoryId, speeches] of Object.entries(customSpeeches)) {
                if (!Array.isArray(speeches)) continue;

                // Migra cada fala
                for (const speech of speeches) {
                    try {
                        let imageBlob = null;
                        
                        // Se tem imagem em base64, converte para Blob
                        if (speech.image && typeof speech.image === 'string') {
                            // Verifica se é base64
                            if (speech.image.startsWith('data:image')) {
                                imageBlob = await this.base64ToBlob(speech.image);
                            }
                            // Se for URL, mantém como string (não precisa converter)
                        }

                        // Salva no IndexedDB
                        await this.db.speeches.add({
                            categoryId: categoryId,
                            text: speech.text || '',
                            icon: speech.icon || '',
                            imageBlob: imageBlob,
                            imageUrl: (speech.image && !speech.image.startsWith('data:image')) ? speech.image : null
                        });

                        migratedCount++;
                    } catch (error) {
                        console.error('Erro ao migrar fala:', error);
                    }
                }
            }

            // Marca migração como concluída
            if (migratedCount > 0) {
                localStorage.setItem('indexedDB_migrationCompleted', 'true');
                // Remove dados do localStorage após migração bem-sucedida
                localStorage.removeItem('customSpeeches');
                console.log(`Migração concluída: ${migratedCount} falas migradas para IndexedDB`);
            }
        } catch (error) {
            console.error('Erro durante migração:', error);
            // Não marca como concluída se houver erro
        }
    }

    // Retorna todas as falas de uma categoria
    async getSpeeches(categoryId) {
        // Se estiver usando fallback, retorna do localStorage
        if (this.useFallback) {
            return this.getSpeechesFromLocalStorage(categoryId);
        }

        try {
            await this.initDB();
            const speeches = await this.db.speeches.where('categoryId').equals(categoryId).toArray();
            
            // Converte Blobs para URLs
            return speeches.map(speech => {
                const result = {
                    id: speech.id,
                    text: speech.text,
                    icon: speech.icon,
                    image: null
                };

                // Se tem Blob, cria URL
                if (speech.imageBlob) {
                    result.image = URL.createObjectURL(speech.imageBlob);
                    result._blobUrl = result.image; // Guarda para cleanup depois
                } else if (speech.imageUrl) {
                    // Se tem URL, usa diretamente
                    result.image = speech.imageUrl;
                }

                return result;
            });
        } catch (error) {
            console.error('Erro ao buscar falas:', error);
            return this.getSpeechesFromLocalStorage(categoryId);
        }
    }

    // Fallback: busca do localStorage
    getSpeechesFromLocalStorage(categoryId) {
        try {
            const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
            return customSpeeches[categoryId] || [];
        } catch (error) {
            console.error('Erro ao buscar do localStorage:', error);
            return [];
        }
    }

    // Salva uma nova fala
    async saveSpeech(categoryId, text, icon, imageData) {
        // Se estiver usando fallback, salva no localStorage
        if (this.useFallback) {
            return this.saveSpeechToLocalStorage(categoryId, text, icon, imageData);
        }

        try {
            await this.initDB();
            
            let imageBlob = null;
            let imageUrl = null;

            // Processa a imagem
            if (imageData) {
                if (typeof imageData === 'string') {
                    // Se é base64, converte para Blob
                    if (imageData.startsWith('data:image')) {
                        imageBlob = await this.base64ToBlob(imageData);
                    } else {
                        // Se é URL, salva como string
                        imageUrl = imageData;
                    }
                } else if (imageData instanceof Blob) {
                    // Se já é Blob, usa diretamente
                    imageBlob = imageData;
                }
            }

            // Salva no IndexedDB
            const id = await this.db.speeches.add({
                categoryId: categoryId,
                text: text,
                icon: icon || '',
                imageBlob: imageBlob,
                imageUrl: imageUrl
            });

            return id;
        } catch (error) {
            console.error('Erro ao salvar fala:', error);
            // Tenta fallback para localStorage
            return this.saveSpeechToLocalStorage(categoryId, text, icon, imageData);
        }
    }

    // Fallback: salva no localStorage
    saveSpeechToLocalStorage(categoryId, text, icon, imageData) {
        try {
            const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
            if (!customSpeeches[categoryId]) {
                customSpeeches[categoryId] = [];
            }

            customSpeeches[categoryId].push({
                text: text,
                icon: icon || '',
                image: imageData || null
            });

            localStorage.setItem('customSpeeches', JSON.stringify(customSpeeches));
            return Date.now(); // Retorna um ID temporário
        } catch (error) {
            console.error('Erro ao salvar no localStorage:', error);
            throw new Error('Erro ao salvar fala: ' + error.message);
        }
    }

    // Atualiza uma fala existente
    async updateSpeech(id, updates) {
        // Se estiver usando fallback, atualiza no localStorage
        if (this.useFallback) {
            return this.updateSpeechInLocalStorage(id, updates);
        }

        try {
            await this.initDB();
            
            const updateData = {};

            if (updates.text !== undefined) updateData.text = updates.text;
            if (updates.icon !== undefined) updateData.icon = updates.icon;

            // Processa imagem se fornecida
            if (updates.image !== undefined) {
                if (typeof updates.image === 'string') {
                    if (updates.image.startsWith('data:image')) {
                        // Base64: converte para Blob
                        updateData.imageBlob = await this.base64ToBlob(updates.image);
                        updateData.imageUrl = null;
                    } else {
                        // URL: salva como string
                        updateData.imageUrl = updates.image;
                        updateData.imageBlob = null;
                    }
                } else if (updates.image instanceof Blob) {
                    updateData.imageBlob = updates.image;
                    updateData.imageUrl = null;
                } else if (updates.image === null) {
                    updateData.imageBlob = null;
                    updateData.imageUrl = null;
                }
            }

            await this.db.speeches.update(id, updateData);
            return true;
        } catch (error) {
            console.error('Erro ao atualizar fala:', error);
            return this.updateSpeechInLocalStorage(id, updates);
        }
    }

    // Fallback: atualiza no localStorage
    updateSpeechInLocalStorage(id, updates) {
        // No localStorage, precisamos encontrar a fala pelo índice ou texto
        // Por enquanto, retorna false (será tratado pelo código que chama)
        return false;
    }

    // Remove uma fala
    async deleteSpeech(id) {
        // Se estiver usando fallback, remove do localStorage
        if (this.useFallback) {
            return this.deleteSpeechFromLocalStorage(id);
        }

        try {
            await this.initDB();
            await this.db.speeches.delete(id);
            return true;
        } catch (error) {
            console.error('Erro ao deletar fala:', error);
            return this.deleteSpeechFromLocalStorage(id);
        }
    }

    // Fallback: remove do localStorage
    deleteSpeechFromLocalStorage(id) {
        // No localStorage, precisamos encontrar e remover
        // Por enquanto, retorna false
        return false;
    }

    // Remove todas as falas de uma categoria
    async deleteSpeechesByCategory(categoryId) {
        // Se estiver usando fallback, remove do localStorage
        if (this.useFallback) {
            return this.deleteSpeechesByCategoryFromLocalStorage(categoryId);
        }

        try {
            await this.initDB();
            await this.db.speeches.where('categoryId').equals(categoryId).delete();
            return true;
        } catch (error) {
            console.error('Erro ao deletar falas da categoria:', error);
            return this.deleteSpeechesByCategoryFromLocalStorage(categoryId);
        }
    }

    // Fallback: remove do localStorage
    deleteSpeechesByCategoryFromLocalStorage(categoryId) {
        try {
            const customSpeeches = JSON.parse(localStorage.getItem('customSpeeches') || '{}');
            delete customSpeeches[categoryId];
            localStorage.setItem('customSpeeches', JSON.stringify(customSpeeches));
            return true;
        } catch (error) {
            console.error('Erro ao deletar do localStorage:', error);
            return false;
        }
    }

    // Retorna todas as falas (para exportação)
    async getAllSpeeches() {
        // Se estiver usando fallback, retorna do localStorage
        if (this.useFallback) {
            return this.getAllSpeechesFromLocalStorage();
        }

        try {
            await this.initDB();
            const speeches = await this.db.speeches.toArray();
            
            // Converte para formato de exportação (com base64)
            const result = {};
            
            for (const speech of speeches) {
                if (!result[speech.categoryId]) {
                    result[speech.categoryId] = [];
                }

                const exportSpeech = {
                    text: speech.text,
                    icon: speech.icon,
                    image: null
                };

                // Converte Blob para base64 se necessário
                if (speech.imageBlob) {
                    exportSpeech.image = await this.blobToBase64(speech.imageBlob);
                } else if (speech.imageUrl) {
                    exportSpeech.image = speech.imageUrl;
                }

                result[speech.categoryId].push(exportSpeech);
            }

            return result;
        } catch (error) {
            console.error('Erro ao buscar todas as falas:', error);
            return this.getAllSpeechesFromLocalStorage();
        }
    }

    // Fallback: retorna do localStorage
    getAllSpeechesFromLocalStorage() {
        try {
            return JSON.parse(localStorage.getItem('customSpeeches') || '{}');
        } catch (error) {
            console.error('Erro ao buscar do localStorage:', error);
            return {};
        }
    }

    // Limpa URLs de Blobs (para evitar memory leaks)
    revokeBlobURL(url) {
        if (url && typeof url === 'string' && url.startsWith('blob:')) {
            try {
                URL.revokeObjectURL(url);
            } catch (error) {
                // Ignora erros ao revogar URL
            }
        }
    }
}

// Instância global do StorageManager
const storageManager = new StorageManager();

// Função auxiliar para forçar download de arquivo
function forceDownload(blob, filename) {
    return new Promise((resolve, reject) => {
        try {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.style.display = 'none';
            link.setAttribute('download', filename);
            
            // Adiciona ao DOM
            document.body.appendChild(link);
            
            // Tenta múltiplas abordagens para garantir o download
            const triggerDownload = () => {
                try {
                    // Método 1: click() direto
                    link.click();
                    
                    // Método 2: Se não funcionar, tenta dispatchEvent
                    setTimeout(() => {
                        const clickEvent = new MouseEvent('click', {
                            view: window,
                            bubbles: true,
                            cancelable: true
                        });
                        link.dispatchEvent(clickEvent);
                    }, 50);
                } catch (e) {
                    console.warn('Erro ao tentar download:', e);
                }
            };
            
            // Aguarda um pouco para garantir que o DOM está pronto
            setTimeout(() => {
                triggerDownload();
                
                // Limpa após um delay maior
                setTimeout(() => {
                    try {
                        if (link.parentNode) {
                            document.body.removeChild(link);
                        }
                        URL.revokeObjectURL(url);
                        resolve();
                    } catch (e) {
                        console.warn('Erro ao limpar link:', e);
                        resolve(); // Resolve mesmo com erro de limpeza
                    }
                }, 200);
            }, 10);
        } catch (error) {
            reject(error);
        }
    });
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
        this.categoryBatchSize = 12;
        this.categoryRenderQueue = [];
        this.categoryRenderOffset = 0;
        this.subcategoryBatchSize = 12;
        this.subcategoryRenderQueue = [];
        this.subcategoryRenderOffset = 0;
        this.currentCategoryTitle = '';
        this.loadMoreWrapper = null;
        this.statsPanel = null;
        this.statsPanelContent = null;
        this.statsPanelFilters = null;
        this.statsPanelSubtitle = null;
        this.statsPanelPeriod = 'allTime';
        
        this.initializeElements();
        this.bindEvents();
        this.loadUserPreferences();
        this.initializeApp();
        this.setupOfflineDetection();
    }

    setupOfflineDetection() {
        // Detecta quando fica offline
        window.addEventListener('online', () => {
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            this.updateStatus(getTranslation('connectionRestored', lang));
            this.hideOfflineWarning();
        });
        
        window.addEventListener('offline', () => {
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            this.updateStatus(getTranslation('offlineMode', lang));
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
        if (this.categoriesContainer && this.categoriesContainer.parentElement) {
            this.loadMoreWrapper = document.createElement('div');
            this.loadMoreWrapper.className = 'load-more-wrapper';
            this.loadMoreWrapper.style.display = 'none';
            this.categoriesContainer.parentElement.appendChild(this.loadMoreWrapper);
        }
        this.statsPanel = document.getElementById('statsPanel');
        this.statsPanelContent = this.statsPanel ? this.statsPanel.querySelector('.stats-panel-content') : null;
        this.statsPanelFilters = this.statsPanel ? this.statsPanel.querySelector('#statsPanelFilters') : null;
        this.statsPanelSubtitle = document.getElementById('statsPanelSubtitle');
        this.closeStatsPanelBtn = document.getElementById('closeStatsPanel');
        if (this.closeStatsPanelBtn) {
            this.closeStatsPanelBtn.addEventListener('click', () => this.closeStatsPanel());
        }
        if (this.statsPanel) {
            this.statsPanel.setAttribute('aria-hidden', 'true');
        }
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
        this.toggleEditModeBtn = document.getElementById('toggleEditModeBtn');
        this.toggleEditSubcategoryBtn = document.getElementById('toggleEditSubcategoryBtn');
        this.editSelectedCategoriesBtn = document.getElementById('editSelectedCategoriesBtn');
        this.editSelectedSubcategoriesBtn = document.getElementById('editSelectedSubcategoriesBtn');
        this.selectedCategoriesCountEdit = document.getElementById('selectedCategoriesCountEdit');
        this.selectedSubcategoriesCountEdit = document.getElementById('selectedSubcategoriesCountEdit');
        this.editMode = false;
        this.editSubcategoryMode = false;
        // Salvar referências aos métodos originais de edição
        this.originalOpenEditCategoryModal = null;
        this.originalOpenEditSpeechModal = null;
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
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        
        if (!voiceSelectModal) {
            this.showError(t('error') + ': ' + t('noVoices'));
            return;
        }
        
        // Se vozes ainda não foram carregadas, tentar carregar primeiro
        if (!this.availableVoices || this.availableVoices.length === 0) {
            this.showLoading(t('loadingVoices'));
            this.loadVoices().then(() => {
                this.hideLoading();
                // Tentar novamente após carregar vozes
                this.testVoiceFromModal();
            }).catch(() => {
                this.hideLoading();
                this.showError(t('errorLoadingVoices'));
            });
            return;
        }
        
        const selectedVoice = voiceSelectModal.value;
        
        // Se não houver voz selecionada, tentar selecionar a primeira disponível
        if (!selectedVoice || selectedVoice === '') {
            const langCode = lang.split('-')[0];
            const filteredVoices = this.availableVoices.filter(voice => {
                return voice.lang && voice.lang.toLowerCase().startsWith(langCode.toLowerCase());
            });
            
            if (filteredVoices.length > 0) {
                // Selecionar a primeira voz do idioma atual
                voiceSelectModal.value = filteredVoices[0].name;
                // Tentar novamente com a voz selecionada
                this.testVoiceFromModal();
                return;
            } else {
                // Se não houver vozes do idioma, usar a primeira disponível
                if (this.availableVoices.length > 0) {
                    voiceSelectModal.value = this.availableVoices[0].name;
                    this.testVoiceFromModal();
                    return;
                } else {
                    this.showError(t('noVoices'));
                    return;
                }
            }
        }
        
        // Buscar a voz selecionada
        const voice = this.availableVoices.find(v => v.name === selectedVoice);
        
        if (!voice) {
            // Se a voz não foi encontrada, tentar usar a primeira do idioma atual
            const langCode = lang.split('-')[0];
            const filteredVoices = this.availableVoices.filter(v => {
                return v.lang && v.lang.toLowerCase().startsWith(langCode.toLowerCase());
            });
            
            if (filteredVoices.length > 0) {
                voiceSelectModal.value = filteredVoices[0].name;
                this.testVoiceFromModal();
                return;
            } else {
                this.showError(t('noVoices'));
                return;
            }
        }
        
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
            } else if (voice.lang.startsWith('pt')) {
                testMessage = 'Olá, esta é uma voz de teste.';
            }
        }
        
        // Usar speakText que já configura a voz corretamente
        this.speakText(testMessage);
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
        if (this.toggleEditModeBtn) {
            this.toggleEditModeBtn.addEventListener('click', () => this.toggleEditMode());
        }
        if (this.toggleEditSubcategoryBtn) {
            this.toggleEditSubcategoryBtn.addEventListener('click', () => this.toggleEditSubcategoryMode());
        }
        if (this.editSelectedCategoriesBtn) {
            this.editSelectedCategoriesBtn.addEventListener('click', () => this.handleEditSelectedCategories());
        }
        if (this.editSelectedSubcategoriesBtn) {
            this.editSelectedSubcategoriesBtn.addEventListener('click', () => this.handleEditSelectedSubcategories());
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
        // Desativar modo de edição se estiver ativo (mutuamente exclusivos)
        if (this.editSubcategoryMode) {
            this.editSubcategoryMode = false;
            if (this.toggleEditSubcategoryBtn) {
                this.toggleEditSubcategoryBtn.style.background = 'rgba(33, 150, 243, 0.1)';
                this.toggleEditSubcategoryBtn.style.borderColor = 'rgba(33, 150, 243, 0.3)';
            }
            if (this.editSelectedSubcategoriesBtn) {
                this.editSelectedSubcategoriesBtn.style.display = 'none';
            }
        }
        
        this.deleteSubcategoryMode = !this.deleteSubcategoryMode;
        
        if (this.deleteSubcategoryMode) {
            this.toggleDeleteSubcategoryBtn.style.background = 'rgba(231, 76, 60, 0.2)';
            this.toggleDeleteSubcategoryBtn.style.borderColor = '#e74c3c';
            this.toggleDeleteSubcategoryBtn.style.color = '#e74c3c';
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            this.updateStatus(getTranslation('deleteModeSpeeches', lang));
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

    toggleEditMode() {
        // Desativar modo de exclusão se estiver ativo (mutuamente exclusivos)
        if (this.deleteMode) {
            this.deleteMode = false;
            if (this.toggleDeleteModeBtn) {
                this.toggleDeleteModeBtn.style.background = 'rgba(231, 76, 60, 0.1)';
                this.toggleDeleteModeBtn.style.borderColor = 'rgba(231, 76, 60, 0.3)';
            }
            if (this.deleteSelectedCategoriesBtn) {
                this.deleteSelectedCategoriesBtn.style.display = 'none';
            }
        }
        
        this.editMode = !this.editMode;
        
        if (this.editMode) {
            if (this.toggleEditModeBtn) {
                this.toggleEditModeBtn.style.background = 'rgba(33, 150, 243, 0.2)';
                this.toggleEditModeBtn.style.borderColor = '#2196F3';
                this.toggleEditModeBtn.style.color = '#2196F3';
            }
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            this.updateStatus(getTranslation('editModeCategories', lang));
        } else {
            if (this.toggleEditModeBtn) {
                this.toggleEditModeBtn.style.background = 'rgba(33, 150, 243, 0.1)';
                this.toggleEditModeBtn.style.borderColor = 'rgba(33, 150, 243, 0.3)';
                this.toggleEditModeBtn.style.color = '#2196F3';
            }
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            this.updateStatus(getTranslation('ready', lang));
            // Ocultar botão de editar selecionados ao desativar modo
            if (this.editSelectedCategoriesBtn) {
                this.editSelectedCategoriesBtn.style.display = 'none';
            }
        }
        
        // Recarrega categorias para mostrar/ocultar checkboxes
        if (this.currentCategory === null) {
            this.renderMainCategories();
            // Atualiza botão após renderizar (com pequeno delay para garantir que os checkboxes foram criados)
            setTimeout(() => this.updateEditSelectedButton(), 100);
        } else {
            // Atualiza botão de editar selecionados
            this.updateEditSelectedButton();
        }
    }

    toggleEditSubcategoryMode() {
        // Desativar modo de exclusão se estiver ativo (mutuamente exclusivos)
        if (this.deleteSubcategoryMode) {
            this.deleteSubcategoryMode = false;
            if (this.toggleDeleteSubcategoryBtn) {
                this.toggleDeleteSubcategoryBtn.style.background = 'rgba(231, 76, 60, 0.1)';
                this.toggleDeleteSubcategoryBtn.style.borderColor = 'rgba(231, 76, 60, 0.3)';
            }
            if (this.deleteSelectedSubcategoriesBtn) {
                this.deleteSelectedSubcategoriesBtn.style.display = 'none';
            }
        }
        
        this.editSubcategoryMode = !this.editSubcategoryMode;
        
        if (this.editSubcategoryMode) {
            if (this.toggleEditSubcategoryBtn) {
                this.toggleEditSubcategoryBtn.style.background = 'rgba(33, 150, 243, 0.2)';
                this.toggleEditSubcategoryBtn.style.borderColor = '#2196F3';
                this.toggleEditSubcategoryBtn.style.color = '#2196F3';
            }
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            this.updateStatus(getTranslation('editModeSpeeches', lang));
        } else {
            if (this.toggleEditSubcategoryBtn) {
                this.toggleEditSubcategoryBtn.style.background = 'rgba(33, 150, 243, 0.1)';
                this.toggleEditSubcategoryBtn.style.borderColor = 'rgba(33, 150, 243, 0.3)';
                this.toggleEditSubcategoryBtn.style.color = '#2196F3';
            }
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            this.updateStatus(getTranslation('ready', lang));
            // Ocultar botão de editar selecionados ao desativar modo
            if (this.editSelectedSubcategoriesBtn) {
                this.editSelectedSubcategoriesBtn.style.display = 'none';
            }
        }
        
        // Recarrega subcategorias para mostrar/ocultar checkboxes
        if (this.currentCategory !== null) {
            this.showSubCategories(this.currentCategory);
            // Atualiza botão após renderizar (com pequeno delay para garantir que os checkboxes foram criados)
            setTimeout(() => this.updateEditSelectedButton(), 100);
        } else {
            // Atualiza botão de editar selecionados
            this.updateEditSelectedButton();
        }
    }

    toggleDeleteMode() {
        // Desativar modo de edição se estiver ativo (mutuamente exclusivos)
        if (this.editMode) {
            this.editMode = false;
            if (this.toggleEditModeBtn) {
                this.toggleEditModeBtn.style.background = 'rgba(33, 150, 243, 0.1)';
                this.toggleEditModeBtn.style.borderColor = 'rgba(33, 150, 243, 0.3)';
            }
            if (this.editSelectedCategoriesBtn) {
                this.editSelectedCategoriesBtn.style.display = 'none';
            }
        }
        
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
            // Ocultar botão de exclusão/edição de subcategorias na tela principal
            if (this.toggleDeleteSubcategoryBtn) {
                this.toggleDeleteSubcategoryBtn.style.display = 'none';
            }
            if (this.deleteSelectedSubcategoriesBtn) {
                this.deleteSelectedSubcategoriesBtn.style.display = 'none';
            }
            if (this.toggleEditSubcategoryBtn) {
                this.toggleEditSubcategoryBtn.style.display = 'none';
            }
            if (this.editSelectedSubcategoriesBtn) {
                this.editSelectedSubcategoriesBtn.style.display = 'none';
            }
            // Mostrar botão de exclusão/edição de categorias na tela principal
            if (this.toggleDeleteModeBtn) {
                this.toggleDeleteModeBtn.style.display = 'flex';
            }
            if (this.toggleEditModeBtn) {
                this.toggleEditModeBtn.style.display = 'flex';
            }
            // Mostrar botão toggle de controles de voz na tela principal
        } else {
            // Dentro de categoria: mostrar "Criar Fala"
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            this.createCategoryBtn.innerHTML = `<i class="fas fa-microphone" style="font-size: 1.2em; margin-right: 6px;"></i> ${t('createSpeech')}`;
            this.createCategoryBtn.setAttribute('aria-label', t('createSpeech'));
            // Mostrar botão de exclusão/edição de subcategorias quando dentro de uma categoria
            if (this.toggleDeleteSubcategoryBtn) {
                this.toggleDeleteSubcategoryBtn.style.display = 'flex';
            }
            if (this.toggleEditSubcategoryBtn) {
                this.toggleEditSubcategoryBtn.style.display = 'flex';
            }
            // Ocultar botão de exclusão/edição de categorias quando dentro de uma categoria
            if (this.toggleDeleteModeBtn) {
                this.toggleDeleteModeBtn.style.display = 'none';
            }
            if (this.deleteSelectedCategoriesBtn) {
                this.deleteSelectedCategoriesBtn.style.display = 'none';
            }
            if (this.toggleEditModeBtn) {
                this.toggleEditModeBtn.style.display = 'none';
            }
            if (this.editSelectedCategoriesBtn) {
                this.editSelectedCategoriesBtn.style.display = 'none';
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

    updateEditSelectedButton() {
        if (this.editMode && this.currentCategory === null) {
            // Modo edição de categorias ativo
            const selected = this.getSelectedCategoriesForEdit();
            const count = selected.length;
            
            if (this.editSelectedCategoriesBtn && this.selectedCategoriesCountEdit) {
                if (count > 0) {
                    this.editSelectedCategoriesBtn.style.display = 'flex';
                    this.selectedCategoriesCountEdit.textContent = count;
                } else {
                    this.editSelectedCategoriesBtn.style.display = 'none';
                }
            }
        }
        
        if (this.editSubcategoryMode && this.currentCategory !== null) {
            // Modo edição de subcategorias ativo
            const selected = this.getSelectedSubcategoriesForEdit();
            const count = selected.length;
            
            if (this.editSelectedSubcategoriesBtn && this.selectedSubcategoriesCountEdit) {
                if (count > 0) {
                    this.editSelectedSubcategoriesBtn.style.display = 'flex';
                    this.selectedSubcategoriesCountEdit.textContent = count;
                } else {
                    this.editSelectedSubcategoriesBtn.style.display = 'none';
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

    getSelectedCategoriesForEdit() {
        const selected = [];
        const checkboxes = document.querySelectorAll('.edit-checkbox:checked');
        checkboxes.forEach(checkbox => {
            const categoryId = checkbox.getAttribute('data-category-id');
            if (categoryId) {
                selected.push(categoryId);
            }
        });
        return selected;
    }

    getSelectedSubcategoriesForEdit() {
        const selected = [];
        const checkboxes = document.querySelectorAll('.edit-subcategory-checkbox:checked');
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

    handleEditSelectedCategories() {
        const selected = this.getSelectedCategoriesForEdit();
        if (selected.length === 0) {
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            this.showError(t('noCategoriesSelected') || 'Nenhuma categoria selecionada');
            return;
        }
        
        // Armazenar lista de categorias para editar
        this.categoriesToEdit = [...selected];
        this.currentEditIndex = 0;
        
        // Abrir modal do primeiro item
        this.openNextCategoryForEdit();
    }

    openNextCategoryForEdit() {
        if (!this.categoriesToEdit || this.currentEditIndex >= this.categoriesToEdit.length) {
            // Finalizou todas as edições
            this.categoriesToEdit = null;
            this.currentEditIndex = 0;
            // Restaurar método original se foi salvo
            if (this.originalOpenEditCategoryModal) {
                this.openEditCategoryModal = this.originalOpenEditCategoryModal;
                this.originalOpenEditCategoryModal = null;
            }
            // Desativar modo de edição
            if (this.editMode) {
                this.toggleEditMode();
            }
            return;
        }
        
        const categoryId = this.categoriesToEdit[this.currentEditIndex];
        
        // Salvar método original na primeira vez
        if (!this.originalOpenEditCategoryModal) {
            this.originalOpenEditCategoryModal = this.openEditCategoryModal.bind(this);
        }
        
        // Modificar o modal de edição para chamar openNextCategoryForEdit após salvar/cancelar
        const self = this;
        this.openEditCategoryModal = function(id) {
            console.log('openEditCategoryModal chamado com id:', id);
            const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
            const cat = customCategories.find(c => c.id === id);
            if (!cat) {
                console.warn('Categoria não encontrada:', id);
                self.openNextCategoryForEdit();
                return;
            }
            console.log('Categoria encontrada:', cat.title);
            
            let modal = document.getElementById('editCategoryModal');
            if (modal) modal.remove();
            modal = document.createElement('div');
            modal.id = 'editCategoryModal';
            modal.className = 'modal-bg';
            
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            const progressText = this.categoriesToEdit.length > 1 
                ? ` (${this.currentEditIndex + 1} de ${this.categoriesToEdit.length})` 
                : '';
            
            const existingImage = cat.photo || '';
            const previewVisible = existingImage ? 'block' : 'none';
            
            modal.innerHTML = `
                <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="editModalTitle" style="display: flex; flex-direction: column; max-height: 90vh; max-width: 600px; width: 90vw;">
                    <h2 id="editModalTitle"><i class="fas fa-edit"></i> Editar Categoria${progressText}</h2>
                    <div style="flex: 1; overflow-y: auto; overflow-x: hidden; padding: 32px; min-height: 0;">
                        <form id="editCategoryForm">
                            <label style="display: block; font-size: 18px; font-weight: 600; color: #333; margin-bottom: 12px;">${t('categoryName')}:</label>
                            <input type="text" id="editCatName" required maxlength="30" placeholder="${t('categoryNamePlaceholder')}" value="${cat.title}" autofocus style="width: 100%; padding: 14px; font-size: 16px; border: 2px solid #ddd; border-radius: 8px; margin-bottom: 20px; box-sizing: border-box;" />
                        
                            <div style="margin-bottom: 20px;">
                                <label style="display: block; font-size: 16px; font-weight: 600; color: #333; margin-bottom: 8px;">
                                    <i class="fas fa-image" style="margin-right: 6px;"></i> ${t('chooseImage')}
                                </label>
                                <div style="display: flex; gap: 10px; margin-bottom: 12px; flex-wrap: wrap;">
                                    <button type="button" id="btnBuscarARASAACEdit" style="flex: 1; min-width: 150px; padding: 12px; background: #9C27B0; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                        <i class="fas fa-search"></i> ${t('searchPictogram')}
                                    </button>
                                    <button type="button" id="selectEditCategoryImageBtn" style="flex: 1; min-width: 150px; padding: 12px; background: #2196F3; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                        <i class="fas fa-folder-open"></i> ${t('localGallery')}
                                    </button>
                                </div>
                                <input type="file" id="editCategoryImage" accept="image/*" style="display: none;" />
                                <input type="hidden" id="editCategoryImageUrl" value="" />
                                <input type="hidden" id="editCategoryImageBase64" value="${existingImage && existingImage.startsWith('data:image') ? existingImage : ''}" />
                                <div id="selectedEditCategoryImagePreview" style="margin-top: 12px; display: ${previewVisible};">
                                    <img id="previewEditCategoryImage" src="${existingImage || ''}" alt="Preview" style="max-width: 100%; max-height: 200px; border-radius: 8px; border: 2px solid #ddd; display: block; margin: 0 auto;" />
                                    <p style="margin-top: 8px; font-size: 14px; color: #666; text-align: center;">${t('imageSelected')}</p>
                                    <button type="button" id="removeSelectedEditImage" style="width: 100%; margin-top: 8px; padding: 8px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 13px; display: flex; align-items: center; justify-content: center; gap: 6px;">
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
                        <button type="button" id="cancelEditModal" style="padding: 10px 20px; background: #ccc; color: #333; border: none; border-radius: 6px; cursor: pointer; font-size: 16px;">${t('cancel')}</button>
                        <button type="submit" form="editCategoryForm" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">${t('saveChanges')}</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            
            // Configurar elementos
            const imageInput = document.getElementById('editCategoryImage');
            const imageUrlInput = document.getElementById('editCategoryImageUrl');
            const imageBase64Input = document.getElementById('editCategoryImageBase64');
            const selectImageBtn = document.getElementById('selectEditCategoryImageBtn');
            const btnBuscarARASAACEdit = document.getElementById('btnBuscarARASAACEdit');
            const previewDiv = document.getElementById('selectedEditCategoryImagePreview');
            const previewImg = document.getElementById('previewEditCategoryImage');
            const removeImageBtn = document.getElementById('removeSelectedEditImage');
            
        // Se já existe imagem, configura URL ou base64
        if (existingImage && !existingImage.startsWith('data:image')) {
            imageUrlInput.value = existingImage;
        } else if (existingImage && existingImage.startsWith('data:image')) {
            imageBase64Input.value = existingImage;
        }
        
        let selectedImageData = existingImage || null;
        let imageWasRemoved = false;
        
        const updatePreview = (imageSrc, isUrl = false) => {
            previewImg.src = imageSrc;
            previewDiv.style.display = 'block';
            selectedImageData = imageSrc;
            imageWasRemoved = false; // Nova imagem foi selecionada
            
            if (imageSrc && imageSrc.startsWith('data:image')) {
                imageBase64Input.value = imageSrc;
                imageUrlInput.value = '';
            } else if (isUrl) {
                imageUrlInput.value = imageSrc;
                imageBase64Input.value = '';
            }
        };
        
        const removeSelectedImage = () => {
            previewDiv.style.display = 'none';
            previewImg.src = '';
            selectedImageData = null;
            imageWasRemoved = true; // Marca que a imagem foi removida
            imageUrlInput.value = '';
            imageBase64Input.value = '';
            if (imageInput) imageInput.value = '';
        };
        
        // Botão buscar ARASAAC
        btnBuscarARASAACEdit.addEventListener('click', () => {
            self.openARASAACSearchModal((base64Image, imageUrl) => {
                if (base64Image) {
                    updatePreview(base64Image, false);
                } else if (imageUrl) {
                    self.showLoading('Convertendo imagem...');
                    self.converterUrlParaBase64(imageUrl).then(base64 => {
                        updatePreview(base64, false);
                        self.hideLoading();
                    }).catch(() => {
                        updatePreview(imageUrl, true);
                        self.hideLoading();
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
                    imageUrlInput.value = '';
                    imageBase64Input.value = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
        
        removeImageBtn.addEventListener('click', removeSelectedImage);
        
        const closeAndNext = () => {
            modal.remove();
            self.currentEditIndex++;
            // Pequeno delay antes de abrir próximo para garantir que o modal foi removido
            setTimeout(() => self.openNextCategoryForEdit(), 100);
        };
        
        document.getElementById('cancelEditModal').onclick = closeAndNext;
        
        const form = document.getElementById('editCategoryForm');
        const submitBtn = document.querySelector('button[form="editCategoryForm"]');
        
        // Handler para submit do form
        const handleFormSubmit = async (e) => {
            e.preventDefault();
            const categoryName = document.getElementById('editCatName').value.trim();
            
            if (!categoryName) {
                self.showError('Nome da categoria é obrigatório');
                return;
            }
            
            cat.title = categoryName;
            
            // Prioriza os inputs hidden (que são atualizados quando nova imagem é selecionada)
            if (imageBase64Input.value) {
                cat.photo = imageBase64Input.value;
            } else if (imageUrlInput.value) {
                cat.photo = imageUrlInput.value;
            } else if (imageWasRemoved) {
                // Se a imagem foi removida explicitamente, salva como vazio
                cat.photo = '';
            } else if (selectedImageData) {
                // Se selectedImageData existe mas os inputs estão vazios, usa selectedImageData (imagem original)
                cat.photo = selectedImageData;
            } else {
                // Se não há imagem, salva como vazio
                cat.photo = '';
            }
            
            localStorage.setItem('customCategories', JSON.stringify(customCategories));
            self.renderMainCategories();
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            self.updateStatus(t('categoryUpdated'));
            closeAndNext();
        };
        
        form.addEventListener('submit', handleFormSubmit);
        
        // Adiciona evento ao botão de submit que está fora do form
        if (submitBtn) {
            submitBtn.addEventListener('click', handleFormSubmit);
        }
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAndNext();
        });
        };
        
        console.log('Chamando openEditCategoryModal com categoryId:', categoryId);
        // Chama a função redefinida
        this.openEditCategoryModal(categoryId);
    }

    handleEditSelectedSubcategories() {
        const selected = this.getSelectedSubcategoriesForEdit();
        if (selected.length === 0) {
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            this.showError(t('noSpeechesSelected') || 'Nenhuma fala selecionada');
            return;
        }
        
        // Armazenar lista de falas para editar
        this.subcategoriesToEdit = [...selected];
        this.currentEditSubcategoryIndex = 0;
        
        // Abrir modal do primeiro item
        this.openNextSubcategoryForEdit();
    }

    async openNextSubcategoryForEdit() {
        if (!this.subcategoriesToEdit || this.currentEditSubcategoryIndex >= this.subcategoriesToEdit.length) {
            // Finalizou todas as edições
            this.subcategoriesToEdit = null;
            this.currentEditSubcategoryIndex = 0;
            // Restaurar método original se foi salvo
            if (this.originalOpenEditSpeechModal) {
                this.openEditSpeechModal = this.originalOpenEditSpeechModal;
                this.originalOpenEditSpeechModal = null;
            }
            // Desativar modo de edição
            if (this.editSubcategoryMode) {
                this.toggleEditSubcategoryMode();
            }
            return;
        }
        
        const itemToEdit = this.subcategoriesToEdit[this.currentEditSubcategoryIndex];
        
        // Buscar o item completo do StorageManager
        const categorySpeeches = await storageManager.getSpeeches(this.currentCategory);
        const item = categorySpeeches[itemToEdit.index];
        
        if (!item) {
            this.currentEditSubcategoryIndex++;
            setTimeout(() => this.openNextSubcategoryForEdit(), 100);
            return;
        }
        
        // Salvar método original na primeira vez
        if (!this.originalOpenEditSpeechModal) {
            this.originalOpenEditSpeechModal = this.openEditSpeechModal.bind(this);
        }
        
        // Modificar o modal de edição para chamar openNextSubcategoryForEdit após salvar/cancelar
        this.openEditSpeechModal = (itemData, itemIndex) => {
            if (!this.currentCategory) {
                return;
            }
            
            let modal = document.getElementById('editSpeechModal');
            if (modal) modal.remove();
            modal = document.createElement('div');
            modal.id = 'editSpeechModal';
            modal.className = 'modal-bg';
            
            const existingImage = itemData.image || '';
            const previewVisible = existingImage ? 'block' : 'none';
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            const progressText = this.subcategoriesToEdit.length > 1 
                ? ` (${this.currentEditSubcategoryIndex + 1} de ${this.subcategoriesToEdit.length})` 
                : '';
            
            modal.innerHTML = `
                <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="editSpeechModalTitle" style="display: flex; flex-direction: column; max-height: 90vh; max-width: 600px; width: 90vw;">
                    <h2 id="editSpeechModalTitle"><i class="fas fa-edit"></i> ${t('editSpeechTitle')}${progressText}</h2>
                    <div style="flex: 1; overflow-y: auto; overflow-x: hidden; padding: 32px; min-height: 0;">
                        <form id="editSpeechForm">
                            <label style="display: block; font-size: 18px; font-weight: 600; color: #333; margin-bottom: 12px;">${t('speechText')}:</label>
                            <input type="text" id="editSpeechText" required maxlength="100" placeholder="${t('speechTextPlaceholder')}" value="${itemData.text || ''}" autofocus style="width: 100%; padding: 14px; font-size: 16px; border: 2px solid #ddd; border-radius: 8px; margin-bottom: 20px; box-sizing: border-box;" />
                            
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
                        </form>
                    </div>
                    <div style="padding: 20px 32px; border-top: 2px solid #e9ecef; background: #f8f9fa; border-radius: 0 0 24px 24px; display: flex; gap: 10px; justify-content: flex-end; flex-shrink: 0;">
                        <button type="button" id="cancelEditSpeechModal" style="padding: 10px 20px; background: #ccc; color: #333; border: none; border-radius: 6px; cursor: pointer; font-size: 16px;">${t('cancel')}</button>
                        <button type="submit" form="editSpeechForm" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">${t('saveChanges')}</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            
            // Configurar elementos (código similar ao openEditSpeechModal original)
            const imageInput = document.getElementById('editSpeechImage');
            const imageUrlInput = document.getElementById('editSpeechImageUrl');
            const imageBase64Input = document.getElementById('editSpeechImageBase64');
            const selectImageBtn = document.getElementById('selectEditImageBtn');
            const btnBuscarARASAACEditSpeech = document.getElementById('btnBuscarARASAACEditSpeech');
            const previewDiv = document.getElementById('selectedEditImagePreview');
            const previewImg = document.getElementById('previewEditImage');
            const removeImageBtn = document.getElementById('removeSelectedEditSpeechImage');
            
            if (existingImage && !existingImage.startsWith('data:image')) {
                imageUrlInput.value = existingImage;
            } else if (existingImage && existingImage.startsWith('data:image')) {
                imageBase64Input.value = existingImage;
            }
            
            let selectedImageData = existingImage || null;
            let imageWasRemoved = false;
            
            const updatePreview = (imageSrc, isUrl = false) => {
                previewImg.src = imageSrc;
                previewDiv.style.display = 'block';
                selectedImageData = imageSrc;
                imageWasRemoved = false; // Nova imagem foi selecionada
                
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
                this.openARASAACSearchModal((base64Image, imageUrl) => {
                    if (base64Image) {
                        updatePreview(base64Image, false);
                    } else if (imageUrl) {
                        this.showLoading('Convertendo imagem...');
                        this.converterUrlParaBase64(imageUrl).then(base64 => {
                            updatePreview(base64, false);
                            this.hideLoading();
                        }).catch(() => {
                            updatePreview(imageUrl, true);
                            this.hideLoading();
                        });
                    }
                });
            };
            
            imageInput.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        updatePreview(event.target.result, false);
                        imageUrlInput.value = '';
                        imageBase64Input.value = event.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            };
            
            const removeSelectedImage = () => {
                previewDiv.style.display = 'none';
                previewImg.src = '';
                selectedImageData = null;
                imageWasRemoved = true; // Marca que a imagem foi removida
                imageUrlInput.value = '';
                imageBase64Input.value = '';
                if (imageInput) imageInput.value = '';
            };
            
            removeImageBtn.onclick = removeSelectedImage;
            
            const closeAndNext = () => {
                modal.remove();
                this.currentEditSubcategoryIndex++;
                setTimeout(() => this.openNextSubcategoryForEdit(), 100);
            };
            
            document.getElementById('cancelEditSpeechModal').onclick = closeAndNext;
            document.getElementById('editSpeechForm').onsubmit = (e) => {
                e.preventDefault();
                this.handleEditSpeechSubmit(e, itemIndex);
                closeAndNext();
            };
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeAndNext();
            });
        };
        
        this.openEditSpeechModal(item, itemToEdit.index);
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
            // Portfólio inicial removido - usuários começam com cards limpos
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
        // Função removida - usuários começam com cards limpos para criar seus próprios
        // Não cria nenhum portfólio inicial automaticamente
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
        
        // Checkbox para modo exclusão e edição (apenas categorias customizadas)
        const isCustom = category.id && category.id.startsWith('custom_');
        const t = (key) => getTranslation(key, lang);
        const deleteCheckboxHtml = (this.deleteMode && isCustom) ? `
            <div class="delete-checkbox-wrapper">
                <input type="checkbox" class="delete-checkbox" data-category-id="${category.id}" id="delete-${category.id}" />
                <label for="delete-${category.id}" class="delete-checkbox-label">${t('delete')}</label>
            </div>
        ` : '';
        const editCheckboxHtml = (this.editMode && isCustom) ? `
            <div class="edit-checkbox-wrapper">
                <input type="checkbox" class="edit-checkbox" data-category-id="${category.id}" id="edit-${category.id}" />
                <label for="edit-${category.id}" class="edit-checkbox-label">${t('edit')}</label>
            </div>
        ` : '';
        const checkboxHtml = deleteCheckboxHtml + editCheckboxHtml;
        
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
        
        // Se modo exclusão ou edição ativo, não abre categoria ao clicar
        if (!this.deleteMode && !this.editMode) {
            card.addEventListener('click', () => this.showSubCategories(category.id));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.showSubCategories(category.id);
                }
            });
        } else if (isCustom) {
            // No modo exclusão, checkboxes apenas marcam/desmarcam sem ação imediata
            const deleteCheckbox = card.querySelector('.delete-checkbox');
            if (deleteCheckbox) {
                deleteCheckbox.addEventListener('change', () => {
                    this.updateDeleteSelectedButton();
                });
            }
            // No modo edição, checkboxes apenas marcam/desmarcam sem ação imediata
            const editCheckbox = card.querySelector('.edit-checkbox');
            if (editCheckbox) {
                editCheckbox.addEventListener('change', () => {
                    this.updateEditSelectedButton();
                });
            }
        }
        
        // Evento duplo clique para editar apenas customizadas (desabilitado no modo exclusão e edição)
        if (isCustom && !this.deleteMode && !this.editMode) {
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

    createSubCategoryCard(item, itemIndex = null, speechId = null) {
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
        
        // Só mostra checkbox se modo exclusão ou edição estiver ativo E o item não for padrão (itemIndex !== null)
        // Itens padrão não podem ser excluídos ou editados
        const canDelete = this.deleteSubcategoryMode && itemIndex !== null;
        const canEdit = this.editSubcategoryMode && itemIndex !== null;
        const t = (key) => getTranslation(key, lang);
        const deleteCheckboxHtml = canDelete ? `
            <div class="delete-checkbox-wrapper">
                <input type="checkbox" class="delete-subcategory-checkbox" data-item-text="${originalText}" data-item-index="${itemIndex}" id="delete-sub-${itemIndex}-${originalText.replace(/[^a-zA-Z0-9]/g, '')}" />
                <label for="delete-sub-${itemIndex}-${originalText.replace(/[^a-zA-Z0-9]/g, '')}" class="delete-checkbox-label">${t('delete')}</label>
            </div>
        ` : '';
        const editCheckboxHtml = canEdit ? `
            <div class="edit-checkbox-wrapper">
                <input type="checkbox" class="edit-subcategory-checkbox" data-item-text="${originalText}" data-item-index="${itemIndex}" id="edit-sub-${itemIndex}-${originalText.replace(/[^a-zA-Z0-9]/g, '')}" />
                <label for="edit-sub-${itemIndex}-${originalText.replace(/[^a-zA-Z0-9]/g, '')}" class="edit-checkbox-label">${t('edit')}</label>
            </div>
        ` : '';
        const checkboxHtml = deleteCheckboxHtml + editCheckboxHtml;
        
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
        
        
        // Se modo exclusão ou edição ativo E item pode ser excluído/editado, não seleciona item ao clicar
        if (!canDelete && !canEdit) {
            // Passar tanto o texto original quanto o traduzido
            card.addEventListener('click', () => this.selectItem(originalText, card, translatedText));
            // Duplo clique para editar
            card.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                this.openEditSpeechModal(item, itemIndex, speechId);
            });
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.selectItem(originalText, card, translatedText);
                }
            });
        } else {
            // No modo exclusão, checkboxes apenas marcam/desmarcam sem ação imediata
            const deleteCheckbox = card.querySelector('.delete-subcategory-checkbox');
            if (deleteCheckbox) {
                deleteCheckbox.addEventListener('change', () => {
                    this.updateDeleteSelectedButton();
                });
            }
            // No modo edição, checkboxes apenas marcam/desmarcam sem ação imediata
            const editCheckbox = card.querySelector('.edit-subcategory-checkbox');
            if (editCheckbox) {
                editCheckbox.addEventListener('change', () => {
                    this.updateEditSelectedButton();
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
    
    async getUnusedSpeeches(days = 30) {
        const usageStats = JSON.parse(localStorage.getItem('usageStats') || '{}');
        const history = usageStats.history || [];
        const customSpeeches = await storageManager.getAllSpeeches();
        
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
    async exportStats(format = 'json') {
        try {
            const usageStats = JSON.parse(localStorage.getItem('usageStats') || '{}');
            const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
            const customSpeeches = await storageManager.getAllSpeeches();
            
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
                const filename = `estatisticas-${new Date().toISOString().split('T')[0]}.csv`;
                
                await forceDownload(blob, filename);
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
                const filename = `estatisticas-${new Date().toISOString().split('T')[0]}.json`;
                
                await forceDownload(blob, filename);
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
            this.renderStatsPanelContent(this.statsPanelPeriod);
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

    async showSubCategories(categoryId) {
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
            
            // Carrega falas customizadas do IndexedDB via StorageManager
            const categoryCustomSpeeches = await storageManager.getSpeeches(categoryId);
            if (categoryCustomSpeeches.length > 0) {
                const sortedCustomSpeeches = [...categoryCustomSpeeches].sort((a, b) => {
                    const usageA = this.getUsageCount(a.text);
                    const usageB = this.getUsageCount(b.text);
                    return usageB - usageA; // Ordem decrescente
                });
                subItems = [...subItems, ...sortedCustomSpeeches];
            }
            
            // Verifica custom
            const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
            const custom = customCategories.find(cat=>cat.id===categoryId);
            if(custom && Array.isArray(custom.items) && custom.items.length > 0) {
                const customItems = custom.items.map(txt=> ({text: txt, icon: custom.icon, photo: custom.photo }));
                subItems = [...subItems, ...customItems];
            }
            
            const defaultSubCount = subCategories[categoryId] ? subCategories[categoryId].length : 0;
            const customSpeechesList = categoryCustomSpeeches;
            this.subcategoryRenderQueue = subItems.map((item, index) => {
                let itemIndex = null;
                let speechId = null;
                
                if (index >= defaultSubCount) {
                    const adjustedIndex = index - defaultSubCount;
                    if (adjustedIndex < customSpeechesList.length) {
                        itemIndex = adjustedIndex;
                        speechId = customSpeechesList[adjustedIndex].id; // Guarda ID do IndexedDB
                    }
                }
                
                return { item, itemIndex, speechId };
            });
            this.subcategoryRenderOffset = 0;
            
            const customObj = mainCategories.find(c=>c.id===categoryId) || custom;
            this.currentCategoryTitle = customObj?.title || categoryId;
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            this.updateStatus(`${t('category')}: ${this.currentCategoryTitle}`);
            this.updateCreateButton();

            if (this.subcategoryRenderQueue.length === 0) {
                if (this.categoriesContainer) {
                    const lang = localStorage.getItem('appLanguage') || 'pt-BR';
                    const t = (key) => getTranslation(key, lang);
                    this.categoriesContainer.innerHTML = `<p style="text-align: center; padding: 40px; color: #666;">${t('emptyCategoryMessage')}</p>`;
                }
                this.updateLoadMoreButton('subcategory');
                if (this.deleteSubcategoryMode) {
                    this.updateDeleteSelectedButton();
                }
                if (this.editSubcategoryMode) {
                    this.updateEditSelectedButton();
                }
                return;
            }

            this.renderSubcategoryBatch();
        } catch (error) {
            this.showError('Erro ao carregar subcategorias: ' + error.message);
        }
    }

    renderSubcategoryBatch() {
        if (!this.categoriesContainer) return;
        const queue = this.subcategoryRenderQueue || [];
        const total = queue.length;
        if (total === 0) {
            this.updateLoadMoreButton('subcategory');
            return;
        }

        const end = Math.min(this.subcategoryRenderOffset + this.subcategoryBatchSize, total);
        for (let i = this.subcategoryRenderOffset; i < end; i++) {
            const entry = queue[i];
            if (!entry) continue;
            const card = this.createSubCategoryCard(entry.item, entry.itemIndex, entry.speechId);
            this.categoriesContainer.appendChild(card);
        }
        this.subcategoryRenderOffset = end;
        this.updateLoadMoreButton('subcategory');

        if (this.deleteSubcategoryMode) {
            setTimeout(() => this.updateDeleteSelectedButton(), 100);
        }
        if (this.editSubcategoryMode) {
            setTimeout(() => this.updateEditSelectedButton(), 100);
        }
    }

    updateLoadMoreButton(type) {
        if (!this.loadMoreWrapper) return;
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        let remaining = 0;

        if (type === 'category') {
            remaining = (this.categoryRenderQueue?.length || 0) - this.categoryRenderOffset;
        } else {
            remaining = (this.subcategoryRenderQueue?.length || 0) - this.subcategoryRenderOffset;
        }

        if (remaining > 0) {
            this.loadMoreWrapper.innerHTML = '';
            this.loadMoreWrapper.appendChild(this.createLoadMoreButton(type, t('loadMore')));
            this.loadMoreWrapper.style.display = 'flex';
        } else {
            this.loadMoreWrapper.innerHTML = '';
            this.loadMoreWrapper.style.display = 'none';
        }
    }

    createLoadMoreButton(type, label) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'load-more-btn';
        button.textContent = label;
        button.addEventListener('click', () => {
            if (type === 'category') {
                this.renderCategoryBatch();
            } else {
                this.renderSubcategoryBatch();
            }
        });
        return button;
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
        
        // Desativa modo de edição de subcategorias ao voltar
        if (this.editSubcategoryMode) {
            this.editSubcategoryMode = false;
            if (this.toggleEditSubcategoryBtn) {
                this.toggleEditSubcategoryBtn.style.background = 'rgba(33, 150, 243, 0.1)';
                this.toggleEditSubcategoryBtn.style.borderColor = 'rgba(33, 150, 243, 0.3)';
                this.toggleEditSubcategoryBtn.style.color = '#2196F3';
            }
            if (this.editSelectedSubcategoriesBtn) {
                this.editSelectedSubcategoriesBtn.style.display = 'none';
            }
        }
        
        // Mostrar botão toggle de controles de voz ao voltar para principal
        
        this.renderMainCategories();
        this.updateCreateButton();
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        this.updateStatus(getTranslation('ready', lang));
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
        
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        this.updateStatus(this.presentationMode ? getTranslation('presentationModeActivated', lang) : getTranslation('presentationModeDeactivated', lang));
    }

    renderMainCategories() {
        if (!this.categoriesContainer) return;
        
        const allCategories = this.getAllCategories();
        this.categoryRenderQueue = allCategories;
        this.categoryRenderOffset = 0;
        this.categoriesContainer.innerHTML = '';
        this.renderCategoryBatch();
        this.updateCreateButton();
        // Garantir que o botão de configurações está visível na página principal
        if (this.settingsButton) {
            this.settingsButton.style.display = 'block';
        }
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        this.updateStatus(getTranslation('ready', lang));
    }

    getAllCategories() {
        const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
        return [...mainCategories, ...customCategories];
    }

    renderCategoryBatch() {
        if (!this.categoriesContainer) return;
        const queue = this.categoryRenderQueue || [];
        const total = queue.length;
        if (total === 0) {
            this.updateLoadMoreButton('category');
            return;
        }

        const end = Math.min(this.categoryRenderOffset + this.categoryBatchSize, total);
        for (let i = this.categoryRenderOffset; i < end; i++) {
            const category = queue[i];
            if (!category) continue;
            const card = this.createCategoryCard(category);
            this.categoriesContainer.appendChild(card);
        }
        this.categoryRenderOffset = end;
        this.updateLoadMoreButton('category');
        this.updateCreateButton();

        if (this.deleteMode) {
            setTimeout(() => this.updateDeleteSelectedButton(), 100);
        }
        if (this.editMode) {
            setTimeout(() => this.updateEditSelectedButton(), 100);
        }
    }

    speakText(text) {
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        
        if (!text) {
            this.showError(t('noTextSelected'));
            return;
        }
        
        if (!('speechSynthesis' in window)) {
            this.showError(t('browserNotSupported'));
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
                this.updateStatus(`${t('speaking')} "${text}"`);
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
                        <label id="volumeLabel">${t('volume')}:</label>
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
                            <option value="sv-SE">🇸🇪 Svenska (Sweden)</option>
                            <option value="no-NO">🇳🇴 Norsk (Norway)</option>
                            <option value="da-DK">🇩🇰 Dansk (Denmark)</option>
                            <option value="fi-FI">🇫🇮 Suomi (Finland)</option>
                        </select>
                    </div>
                    <div style="margin-top: 25px; padding-top: 25px; border-top: 2px solid #e9ecef;">
                        <h3 id="voiceLabel" style="font-size: 16px; margin-bottom: 15px; color: #333;"><i class="fas fa-microphone"></i> ${t('voice')}</h3>
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
                        <h3 id="speedLabel" style="font-size: 16px; margin-bottom: 15px; color: #333;"><i class="fas fa-tachometer-alt"></i> ${t('speed')}</h3>
                        <select id="speedControlModal" style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 14px; margin-bottom: 15px;">
                            <option value="0.8">${t('slow')}</option>
                            <option value="1.0" selected>${t('normal')}</option>
                            <option value="1.2">${t('fast')}</option>
                        </select>
                    </div>
                    <div style="margin-top: 25px; padding-top: 25px; border-top: 2px solid #e9ecef;">
                        <h3 id="toneLabel" style="font-size: 16px; margin-bottom: 15px; color: #333;"><i class="fas fa-music"></i> ${t('tone')}</h3>
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
            this.openStatsPanel();
        };
        
        // Carregar idioma salvo (não aplicar ainda, apenas mostrar)
        const savedLanguage = localStorage.getItem('appLanguage') || 'pt-BR';
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.value = savedLanguage;
            // Não aplicar automaticamente - só quando clicar em "Salvar Alterações"
            
            // Atualizar vozes disponíveis e traduzir modal quando o idioma mudar no select
            languageSelect.addEventListener('change', (e) => {
                const selectedLang = e.target.value;
                // Obter voz selecionada atual do modal antes de atualizar
                const voiceSelectModal = this.getVoiceSelectFromModal();
                const currentVoice = voiceSelectModal?.value || null;
                this.updateVoicesForLanguage(selectedLang, currentVoice);
                this.updateSettingsModalLanguage(selectedLang);
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

    async exportData() {
        try {
            const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
            // Busca falas do IndexedDB via StorageManager
            const customSpeeches = await storageManager.getAllSpeeches();
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
            const filename = `comunicacao-alternativa-backup-${new Date().toISOString().split('T')[0]}.json`;
            
            await forceDownload(dataBlob, filename);
            
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            this.updateStatus(t('dataExported'));
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
            
            // Importa falas para IndexedDB via StorageManager
            // Primeiro, limpa falas existentes (opcional - pode querer fazer merge)
            // Depois, importa cada fala
            for (const [categoryId, speeches] of Object.entries(importData.speeches)) {
                if (Array.isArray(speeches)) {
                    for (const speech of speeches) {
                        await storageManager.saveSpeech(categoryId, speech.text, speech.icon, speech.image);
                    }
                }
            }

            // Importar preferências se existirem
            if (importData.preferences) {
                if (importData.preferences.speed) localStorage.setItem('communicationApp_speed', importData.preferences.speed);
                if (importData.preferences.tone) localStorage.setItem('communicationApp_tone', importData.preferences.tone);
                if (importData.preferences.voice) localStorage.setItem('communicationApp_voice', importData.preferences.voice);
                if (importData.preferences.volume) localStorage.setItem('communicationApp_volume', importData.preferences.volume);
                if (importData.preferences.createCategoryBtnVisible) localStorage.setItem('createCategoryBtnVisible', importData.preferences.createCategoryBtnVisible);
            }

            this.hideLoading();
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            this.updateStatus(t('dataImported'));
            
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

    openStatsPanel(selectedPeriod = 'allTime') {
        this.statsPanelPeriod = selectedPeriod;
        this.buildStatsPanelFilters(selectedPeriod);
        this.renderStatsPanelContent(selectedPeriod);
        if (this.statsPanel) {
            this.statsPanel.classList.add('stats-panel-visible');
            this.statsPanel.setAttribute('aria-hidden', 'false');
        }
    }

    closeStatsPanel() {
        if (this.statsPanel) {
            this.statsPanel.classList.remove('stats-panel-visible');
            this.statsPanel.setAttribute('aria-hidden', 'true');
        }
    }

    buildStatsPanelFilters(activePeriod) {
        if (!this.statsPanelFilters) return;
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        const options = [
            { value: 'today', label: t('today') },
            { value: 'thisWeek', label: t('thisWeek') },
            { value: 'thisMonth', label: t('thisMonth') },
            { value: 'last7Days', label: t('last7Days') },
            { value: 'last30Days', label: t('last30Days') },
            { value: 'allTime', label: t('allTime') }
        ];
        this.statsPanelFilters.innerHTML = '';
        options.forEach(option => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'stats-filter-btn';
            button.textContent = option.label;
            if (option.value === activePeriod) {
                button.classList.add('active');
            }
            button.dataset.period = option.value;
            button.addEventListener('click', () => this.openStatsPanel(option.value));
            this.statsPanelFilters.appendChild(button);
        });
    }

    async renderStatsPanelContent(period) {
        if (!this.statsPanelContent) return;
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        const stats = this.filterStatsByPeriod(period);
        const usageByTime = this.getUsageByTimeOfDay(period);
        const usagePatterns = this.getUsagePatterns(period);
        const mostUsedCategory = this.getMostUsedCategory(period);
        const mostUsedSpeech = this.getMostUsedSpeech(period);
        const unusedSpeeches = await this.getUnusedSpeeches(30);
        const suggestions = this.generateSuggestions(period);
        const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
        const totalCategories = mainCategories.length + customCategories.length;
        const totalSpeechTypes = Object.keys(stats.speeches || {}).length;
        const totalUses = stats.totalUses || 0;
        const periodLabel = t(period) || period;
        if (this.statsPanelSubtitle) {
            this.statsPanelSubtitle.textContent = `${t('filterPeriod')}: ${periodLabel}`;
        }

        const topSpeeches = Object.entries(stats.speeches || {})
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
        const topList = topSpeeches.length > 0
            ? topSpeeches.map(([text, count]) => `
                <li>
                    <span title="${text}">${text}</span>
                    <strong>${count}</strong>
                </li>
            `).join('')
            : `<li style="color:#999;font-style:italic;">${t('noData')}</li>`;

        const timeSegments = [
            { key: 'morning', label: t('morning'), value: usageByTime.morning },
            { key: 'afternoon', label: t('afternoon'), value: usageByTime.afternoon },
            { key: 'night', label: t('night'), value: usageByTime.night }
        ];
        const maxTimeValue = Math.max(...timeSegments.map(s => s.value), 1);
        const timeBars = timeSegments.map(seg => {
            const width = Math.round((seg.value / maxTimeValue) * 100);
            return `
                <div class="time-bar">
                    <span>${seg.label} (${seg.value})</span>
                    <div class="time-bar-track">
                        <div class="time-bar-fill" style="width: ${width}%;"></div>
                    </div>
                </div>
            `;
        }).join('');

        const dayNames = {
            'pt-BR': ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            'en-US': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            'es-ES': ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
        };
        const dayLabels = dayNames[lang] || dayNames['pt-BR'];
        const dayMax = Math.max(...Object.values(usagePatterns.dayCounts), 1);
        const dayBars = Object.entries(usagePatterns.dayCounts).map(([day, count]) => {
            const percentage = Math.round((count / dayMax) * 100);
            const label = dayLabels[parseInt(day)] || day;
            return `
                <div class="weekday-bar">
                    <span>${label}</span>
                    <div class="weekday-bar-track">
                        <div class="weekday-bar-fill" style="width: ${percentage}%;"></div>
                    </div>
                </div>
            `;
        }).join('');

        const suggestionsHTML = suggestions.length > 0
            ? suggestions.slice(0, 3).map(s => `<li>${s.message}</li>`).join('')
            : `<li style="color:#999;font-style:italic;">${t('noSuggestions')}</li>`;
        const unusedHTML = unusedSpeeches.length > 0
            ? unusedSpeeches.slice(0, 4).map(item => `
                <li>
                    <span title="${item.text}">${item.text}</span>
                    <small>${t('unusedForDays').replace('{days}', item.daysSince)}</small>
                </li>
            `).join('')
            : `<li style="color:#999;font-style:italic;">${t('noAlerts')}</li>`;

        const categoryCTA = mostUsedCategory
            ? `
                <div class="stats-panel-section">
                    <h3>${t('mostUsedCategory')}</h3>
                    <div style="font-weight:700;">${mostUsedCategory.title}</div>
                    <div style="margin-top:8px; font-size:0.85rem;">${mostUsedCategory.count} ${t('uses')}</div>
                    <div style="margin-top:10px; display:flex; gap:6px; flex-wrap: wrap;">
                        <button type="button" class="goToCategoryBtn" data-category="${mostUsedCategory.categoryId}">${t('goToCategory')}</button>
                        <button type="button" class="createSpeechInCategoryBtn" data-category="${mostUsedCategory.categoryId}">${t('createSpeech')}</button>
                    </div>
                </div>
            `
            : '';

        this.statsPanelContent.innerHTML = `
            <div class="stats-panel-section stats-panel-summary">
                <div class="stats-stat-card">
                    <span>${totalCategories}</span>
                    <p>${t('totalCategories')}</p>
                </div>
                <div class="stats-stat-card">
                    <span>${totalSpeechTypes}</span>
                    <p>${t('totalSpeeches')}</p>
                </div>
                <div class="stats-stat-card">
                    <span>${totalUses}</span>
                    <p>${t('totalUses')}</p>
                </div>
            </div>
            ${categoryCTA}
            ${mostUsedSpeech ? `
                <div class="stats-panel-section">
                    <h3>${t('mostUsedSpeech')}</h3>
                    <div style="font-weight:700;">"${mostUsedSpeech.text}"</div>
                    <div style="margin-top:6px; font-size:0.9rem;">${mostUsedSpeech.count} ${t('uses')}</div>
                </div>
            ` : ''}
            <div class="stats-panel-section">
                <h3>${t('usageByTime')}</h3>
                ${timeBars}
            </div>
            <div class="stats-panel-section">
                <h3>${t('usagePatterns')}</h3>
                ${dayBars}
            </div>
            <div class="stats-panel-section stats-panel-top">
                <h3>${t('topUsed')}</h3>
                <ul>${topList}</ul>
            </div>
            <div class="stats-panel-section stats-panel-top">
                <h3>${t('suggestions')}</h3>
                <ul>${suggestionsHTML}</ul>
            </div>
            <div class="stats-panel-section stats-panel-unused">
                <h3>${t('alerts')}</h3>
                <ul>${unusedHTML}</ul>
            </div>
            <div class="stats-panel-actions">
                <button type="button" class="csv" id="statsExportCSVBtn">${t('exportCSV')}</button>
                <button type="button" class="json" id="statsExportJSONBtn">${t('exportJSON')}</button>
                <button type="button" class="clear" id="statsClearStatsBtn">${t('clearStats')}</button>
            </div>
        `;

        this.statsPanelContent.querySelectorAll('.goToCategoryBtn').forEach(btn => {
            btn.addEventListener('click', () => {
                const categoryId = btn.getAttribute('data-category');
                if (categoryId && categoryId !== 'main') {
                    this.showSubCategories(categoryId);
                }
                this.closeStatsPanel();
            });
        });
        this.statsPanelContent.querySelectorAll('.createSpeechInCategoryBtn').forEach(btn => {
            btn.addEventListener('click', () => {
                const categoryId = btn.getAttribute('data-category');
                if (categoryId) {
                    this.currentCategory = categoryId;
                    this.showSubCategories(categoryId);
                    setTimeout(() => this.openCreateSpeechModal(), 100);
                }
                this.closeStatsPanel();
            });
        });
        this.statsPanelContent.querySelector('#statsExportCSVBtn')?.addEventListener('click', () => this.exportStats('csv'));
        this.statsPanelContent.querySelector('#statsExportJSONBtn')?.addEventListener('click', () => this.exportStats('json'));
        this.statsPanelContent.querySelector('#statsClearStatsBtn')?.addEventListener('click', () => {
            this.clearStats();
            setTimeout(() => this.renderStatsPanelContent(this.statsPanelPeriod), 300);
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
        
        // Retraduz todos os elementos renderizados dinamicamente
        this.retranslateAllElements();

        if (this.statsPanel && this.statsPanel.classList.contains('stats-panel-visible')) {
            this.buildStatsPanelFilters(this.statsPanelPeriod);
            this.renderStatsPanelContent(this.statsPanelPeriod);
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
    
    retranslateAllElements() {
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        
        // Recarrega os cards principais se estiver na página principal
        if (this.currentCategory === null) {
            this.renderMainCategories();
        } else {
            // Se estiver em uma subcategoria, recarrega as subcategorias também
            this.showSubCategories(this.currentCategory);
        }
        
        // Atualiza botões dinâmicos após renderização
        setTimeout(() => {
            if (this.deleteMode) {
                this.updateDeleteSelectedButton();
            }
            if (this.editMode) {
                this.updateEditSelectedButton();
            }
            // Os botões de subcategorias são atualizados automaticamente quando os checkboxes mudam
            // Não há métodos específicos para eles, então apenas atualizamos os existentes
            
            // Atualiza botão criar categoria/fala
            this.updateCreateButton();
        }, 100);
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
        
        // Traduz botões de edição selecionados
        const editSelectedCategories = document.getElementById('editSelectedCategoriesBtn');
        if (editSelectedCategories) {
            const count = editSelectedCategories.querySelector('span')?.textContent || '0';
            const icon = editSelectedCategories.querySelector('i');
            editSelectedCategories.innerHTML = icon ? `${icon.outerHTML} ${t('editSelected')} (${count})` : `${t('editSelected')} (${count})`;
        }
        
        const editSelectedSubcategories = document.getElementById('editSelectedSubcategoriesBtn');
        if (editSelectedSubcategories) {
            const count = editSelectedSubcategories.querySelector('span')?.textContent || '0';
            const icon = editSelectedSubcategories.querySelector('i');
            editSelectedSubcategories.innerHTML = icon ? `${icon.outerHTML} ${t('editSelected')} (${count})` : `${t('editSelected')} (${count})`;
        }
        
        // Traduz botões de modo (edição/exclusão)
        const toggleEditModeBtn = document.getElementById('toggleEditModeBtn');
        if (toggleEditModeBtn) {
            toggleEditModeBtn.setAttribute('aria-label', t('editModeCategories'));
            toggleEditModeBtn.setAttribute('title', t('editModeCategories'));
        }
        
        const toggleDeleteModeBtn = document.getElementById('toggleDeleteModeBtn');
        if (toggleDeleteModeBtn) {
            toggleDeleteModeBtn.setAttribute('aria-label', t('deleteModeCategories'));
            toggleDeleteModeBtn.setAttribute('title', t('deleteModeCategories'));
        }
        
        const toggleEditSubcategoryBtn = document.getElementById('toggleEditSubcategoryBtn');
        if (toggleEditSubcategoryBtn) {
            toggleEditSubcategoryBtn.setAttribute('aria-label', t('editModeSpeeches'));
            toggleEditSubcategoryBtn.setAttribute('title', t('editModeSpeeches'));
        }
        
        const toggleDeleteSubcategoryBtn = document.getElementById('toggleDeleteSubcategoryBtn');
        if (toggleDeleteSubcategoryBtn) {
            toggleDeleteSubcategoryBtn.setAttribute('aria-label', t('deleteModeSpeeches'));
            toggleDeleteSubcategoryBtn.setAttribute('title', t('deleteModeSpeeches'));
        }
        
        // Traduz labels de checkboxes já renderizados
        document.querySelectorAll('.delete-checkbox-label').forEach(label => {
            if (label.textContent.trim() === 'Excluir' || label.textContent.trim() === 'Delete' || label.textContent.trim() === 'Eliminar') {
                label.textContent = t('delete');
            }
        });
        
        document.querySelectorAll('.edit-checkbox-label').forEach(label => {
            if (label.textContent.trim() === 'Editar' || label.textContent.trim() === 'Edit' || label.textContent.trim() === 'Editar') {
                label.textContent = t('edit');
            }
        });
        
        // Atualiza status se estiver visível
        const statusText = document.getElementById('statusText');
        if (statusText) {
            // Traduz qualquer mensagem de status conhecida
            const statusMessages = {
                'Pronto para uso': t('ready'),
                'Ready to use': t('ready'),
                'Listo para usar': t('ready'),
                'Modo exclusão ativado - Marque as categorias para excluir': t('deleteModeCategories'),
                'Modo exclusão ativado - Marque as falas para excluir': t('deleteModeSpeeches'),
                'Modo edição ativado - Marque as categorias para editar': t('editModeCategories'),
                'Modo edição ativado - Marque as falas para editar': t('editModeSpeeches')
            };
            
            const currentStatus = statusText.textContent.trim();
            if (statusMessages[currentStatus]) {
                statusText.textContent = statusMessages[currentStatus];
            } else if (currentStatus === 'Pronto para uso' || currentStatus === 'Ready to use' || currentStatus === 'Listo para usar') {
                statusText.textContent = t('ready');
            }
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

    updateSettingsModalLanguage(lang) {
        const modal = document.getElementById('settingsModal');
        if (!modal) return;
        
        const t = (key) => getTranslation(key, lang);
        
        // Salvar valores atuais dos controles antes de atualizar
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeValue = volumeSlider?.value;
        const speedControlModal = document.getElementById('speedControlModal');
        const speedValue = speedControlModal?.value;
        const toneControlModal = document.getElementById('toneControlModal');
        const toneValue = toneControlModal?.value;
        const voiceSelectModal = document.getElementById('voiceSelectModal');
        const voiceValue = voiceSelectModal?.value;
        const themeSelect = document.getElementById('themeSelect');
        const themeValue = themeSelect?.value;
        const languageSelect = document.getElementById('languageSelect');
        const languageValue = languageSelect?.value;
        
        // Atualizar título do modal
        const settingsTitle = document.getElementById('settingsTitle');
        if (settingsTitle) {
            const icon = settingsTitle.querySelector('i');
            settingsTitle.innerHTML = icon ? `${icon.outerHTML} ${t('settingsTitle')}` : t('settingsTitle');
        }
        
        // Atualizar label Volume
        const volumeLabel = document.getElementById('volumeLabel');
        if (volumeLabel) {
            volumeLabel.textContent = `${t('volume')}:`;
        }
        
        // Atualizar label Idioma
        const languageLabel = document.getElementById('languageLabel');
        if (languageLabel) {
            const icon = languageLabel.querySelector('i');
            languageLabel.innerHTML = icon ? `${icon.outerHTML} ${t('language')}` : t('language');
        }
        
        // Atualizar label Voz
        const voiceLabel = document.getElementById('voiceLabel');
        if (voiceLabel) {
            const icon = voiceLabel.querySelector('i');
            voiceLabel.innerHTML = icon ? `${icon.outerHTML} ${t('voice')}` : t('voice');
        }
        
        // Atualizar opção "Carregando vozes..." se existir
        if (voiceSelectModal) {
            const loadingOption = voiceSelectModal.querySelector('option[value=""]');
            if (loadingOption && (loadingOption.textContent.includes('Carregando') || loadingOption.textContent.includes('Loading') || loadingOption.textContent.includes('Cargando'))) {
                loadingOption.textContent = t('loadingVoices');
            }
        }
        
        // Atualizar opções do select de velocidade
        if (speedControlModal) {
            const options = speedControlModal.querySelectorAll('option');
            options.forEach(opt => {
                if (opt.value === '0.8') opt.textContent = t('slow');
                else if (opt.value === '1.0') opt.textContent = t('normal');
                else if (opt.value === '1.2') opt.textContent = t('fast');
            });
        }
        
        // Atualizar label Velocidade
        const speedLabel = document.getElementById('speedLabel');
        if (speedLabel) {
            const icon = speedLabel.querySelector('i');
            speedLabel.innerHTML = icon ? `${icon.outerHTML} ${t('speed')}` : t('speed');
        }
        
        // Atualizar opções do select de tom
        if (toneControlModal) {
            const options = toneControlModal.querySelectorAll('option');
            options.forEach(opt => {
                if (opt.value === '0.5') opt.textContent = t('veryLow');
                else if (opt.value === '0.75') opt.textContent = t('low');
                else if (opt.value === '1.0') opt.textContent = t('normal');
                else if (opt.value === '1.25') opt.textContent = t('high');
                else if (opt.value === '1.5') opt.textContent = t('veryHigh');
            });
        }
        
        // Atualizar label Tom
        const toneLabel = document.getElementById('toneLabel');
        if (toneLabel) {
            const icon = toneLabel.querySelector('i');
            toneLabel.innerHTML = icon ? `${icon.outerHTML} ${t('tone')}` : t('tone');
        }
        
        // Atualizar opções do select de tema
        if (themeSelect) {
            const options = themeSelect.querySelectorAll('option');
            options.forEach(opt => {
                if (opt.value === 'light') opt.textContent = t('light');
                else if (opt.value === 'dark') opt.textContent = t('dark');
                else if (opt.value === 'high-contrast') opt.textContent = t('highContrast');
            });
        }
        
        // Atualizar label Tema
        const themeLabel = document.getElementById('themeLabel');
        if (themeLabel) {
            const icon = themeLabel.querySelector('i');
            themeLabel.innerHTML = icon ? `${icon.outerHTML} ${t('theme')}` : t('theme');
        }
        
        // Atualizar label Estatísticas
        const statsLabel = document.getElementById('statsLabel');
        if (statsLabel) {
            const icon = statsLabel.querySelector('i');
            statsLabel.innerHTML = icon ? `${icon.outerHTML} ${t('statsTitle')}` : t('statsTitle');
        }
        
        // Atualizar botão Ver Estatísticas
        const showStatsBtn = document.getElementById('showStatsBtn');
        if (showStatsBtn) {
            const icon = showStatsBtn.querySelector('i');
            showStatsBtn.innerHTML = icon ? `${icon.outerHTML} ${t('showStats')}` : t('showStats');
        }
        
        // Atualizar label Backup
        const backupLabel = document.getElementById('backupLabel');
        if (backupLabel) {
            const icon = backupLabel.querySelector('i');
            backupLabel.innerHTML = icon ? `${icon.outerHTML} ${t('exportTitle')}` : t('exportTitle');
        }
        
        // Atualizar botão Exportar
        const exportDataBtn = document.getElementById('exportDataBtn');
        if (exportDataBtn) {
            const icon = exportDataBtn.querySelector('i');
            exportDataBtn.innerHTML = icon ? `${icon.outerHTML} ${t('export')}` : t('export');
        }
        
        // Atualizar botão Importar
        const importDataBtn = document.getElementById('importDataBtn');
        if (importDataBtn) {
            const icon = importDataBtn.querySelector('i');
            importDataBtn.innerHTML = icon ? `${icon.outerHTML} ${t('import')}` : t('import');
        }
        
        // Atualizar botão Excluir Todas as Categorias
        
        // Atualizar botão Salvar Alterações
        const applySettingsBtn = document.getElementById('applySettingsBtn');
        if (applySettingsBtn) {
            const icon = applySettingsBtn.querySelector('i');
            applySettingsBtn.innerHTML = icon ? `${icon.outerHTML} ${t('saveChanges')}` : t('saveChanges');
        }
        
        // Atualizar botão Fechar
        const closeSettingsModal = document.getElementById('closeSettingsModal');
        if (closeSettingsModal) {
            closeSettingsModal.textContent = t('close');
        }
        
        // Atualizar botão Testar Voz
        const testVoiceBtnModal = document.getElementById('testVoiceBtnModal');
        if (testVoiceBtnModal) {
            const icon = testVoiceBtnModal.querySelector('i');
            testVoiceBtnModal.innerHTML = icon ? `${icon.outerHTML} ${t('test')}` : t('test');
        }
        
        // Restaurar valores dos controles após atualizar textos
        if (volumeSlider && volumeValue !== undefined) {
            volumeSlider.value = volumeValue;
            const volumeValueSpan = document.getElementById('volumeValue');
            if (volumeValueSpan) {
                volumeValueSpan.textContent = Math.round(parseFloat(volumeValue) * 100) + '%';
            }
        }
        if (speedControlModal && speedValue !== undefined) {
            speedControlModal.value = speedValue;
        }
        if (toneControlModal && toneValue !== undefined) {
            toneControlModal.value = toneValue;
        }
        if (voiceSelectModal && voiceValue !== undefined) {
            voiceSelectModal.value = voiceValue;
        }
        if (themeSelect && themeValue !== undefined) {
            themeSelect.value = themeValue;
        }
        if (languageSelect && languageValue !== undefined) {
            languageSelect.value = languageValue;
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
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        this.updateStatus(t('categoryCreated'));
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
        const cacheKey = `img_cache_${btoa(imageUrl).replace(/[/+=]/g, '')}`;
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

            // Salva fala usando StorageManager (IndexedDB)
            await storageManager.saveSpeech(this.currentCategory, speechText, icon, cardImage);
            
            // Recarrega subcategorias para mostrar a nova fala
            await this.showSubCategories(this.currentCategory);
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            this.updateStatus(t('speechCreated'));
        } catch (error) {
            this.showError('Erro ao salvar fala: ' + error.message);
            console.error('Erro ao salvar fala:', error);
        }
    }

    openEditSpeechModal(item, itemIndex, speechId = null) {
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
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="editSpeechModalTitle" style="display: flex; flex-direction: column; max-height: 90vh; max-width: 600px; width: 90vw;">
                <h2 id="editSpeechModalTitle"><i class="fas fa-edit"></i> ${t('editSpeechTitle')}</h2>
                <div style="flex: 1; overflow-y: auto; overflow-x: hidden; padding: 32px; min-height: 0;">
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
                    </form>
                </div>
                <div style="padding: 20px 32px; border-top: 2px solid #e9ecef; background: #f8f9fa; border-radius: 0 0 24px 24px; display: flex; gap: 10px; justify-content: flex-end; flex-shrink: 0;">
                    <button type="button" id="cancelEditSpeechModal" style="padding: 10px 20px; background: #ccc; color: #333; border: none; border-radius: 6px; cursor: pointer; font-size: 16px;">${t('cancel')}</button>
                    <button type="submit" form="editSpeechForm" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">${t('saveChanges')}</button>
                </div>
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
        } else if (existingImage && existingImage.startsWith('data:image')) {
            imageBase64Input.value = existingImage;
        }
        
        let selectedImageData = existingImage || null;
        let imageWasRemoved = false;
        
        const updatePreview = (imageSrc, isUrl = false) => {
            previewImg.src = imageSrc;
            previewDiv.style.display = 'block';
            selectedImageData = imageSrc;
            imageWasRemoved = false; // Nova imagem foi selecionada
            
            // Sempre atualiza os inputs hidden corretamente
            if (imageSrc && (imageSrc.startsWith('data:image') || !isUrl)) {
                // Se é base64 ou não foi marcado como URL, trata como base64
                imageBase64Input.value = imageSrc;
                imageUrlInput.value = '';
            } else if (isUrl && imageSrc) {
                // Se foi marcado como URL, salva como URL
                imageUrlInput.value = imageSrc;
                imageBase64Input.value = '';
            }
        };
        
        selectImageBtn.onclick = () => imageInput.click();
        btnBuscarARASAACEditSpeech.onclick = () => {
            this.openARASAACSearchModal((base64Image, imageUrl) => {
                if (base64Image) {
                    updatePreview(base64Image, false);
                } else if (imageUrl) {
                    this.showLoading('Convertendo imagem...');
                    this.converterUrlParaBase64(imageUrl).then(base64 => {
                        updatePreview(base64, false);
                        this.hideLoading();
                    }).catch(() => {
                        updatePreview(imageUrl, true);
                        this.hideLoading();
                    });
                }
            });
        };
        
        imageInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    updatePreview(event.target.result, false);
                    imageUrlInput.value = '';
                    imageBase64Input.value = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        };
        
        const removeSelectedImage = () => {
            previewDiv.style.display = 'none';
            previewImg.src = '';
            selectedImageData = null;
            imageWasRemoved = true; // Marca que a imagem foi removida
            imageUrlInput.value = '';
            imageBase64Input.value = '';
            if (imageInput) imageInput.value = '';
        };
        
        removeImageBtn.onclick = removeSelectedImage;
        
        document.getElementById('cancelEditSpeechModal').onclick = () => modal.remove();
        document.getElementById('editSpeechForm').onsubmit = (e) => {
            e.preventDefault();
            this.handleEditSpeechSubmit(e, itemIndex, speechId || item.id);
            modal.remove();
        };
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    async handleEditSpeechSubmit(e, itemIndex, speechId = null) {
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
        const previewDivCheck = document.getElementById('selectedEditImagePreview');
        let cardImage = null;
        let icon = 'fas fa-comment';
        
        // Verifica se a imagem foi removida explicitamente (preview está oculto e inputs vazios)
        const imageWasRemoved = previewDivCheck && previewDivCheck.style.display === 'none' && 
                                (!imageBase64Input || !imageBase64Input.value) && 
                                (!imageUrlInput || !imageUrlInput.value) &&
                                (!imageInput || !imageInput.files || !imageInput.files[0]);
        
        // Prioriza inputs hidden (que são atualizados quando nova imagem é selecionada)
        // IMPORTANTE: Esta é a ordem correta - primeiro verifica inputs hidden que são atualizados pelo updatePreview
        if (imageBase64Input && imageBase64Input.value && imageBase64Input.value.trim() !== '') {
            // Se tem base64 no input, usa ele (imagem foi selecionada e convertida)
            cardImage = imageBase64Input.value;
        } else if (imageUrlInput && imageUrlInput.value && imageUrlInput.value.trim() !== '') {
            // Se tem URL no input, tenta converter para base64
            this.showLoading('Salvando imagem do pictograma...');
            try {
                try {
                    cardImage = await this.converterUrlParaBase64(imageUrlInput.value);
                    // Atualiza o input base64 com o valor convertido
                    if (imageBase64Input) {
                        imageBase64Input.value = cardImage;
                        imageUrlInput.value = '';
                    }
                } catch (conversionError) {
                    // Se falhar conversão, usa URL direto
                    cardImage = imageUrlInput.value;
                }
            } catch (error) {
                this.hideLoading();
                this.showError('Erro ao processar imagem do pictograma');
                return;
            }
            this.hideLoading();
        } else if (imageInput && imageInput.files && imageInput.files[0]) {
            // Se tem arquivo no input file, lê e converte para base64
            this.showLoading('Salvando imagem...');
            const file = imageInput.files[0];
            const reader = new FileReader();
            cardImage = await new Promise((resolve, reject) => {
                reader.onload = (event) => {
                    const base64 = event.target.result;
                    // Atualiza o input base64 com o valor lido
                    if (imageBase64Input) {
                        imageBase64Input.value = base64;
                    }
                    resolve(base64);
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
            this.hideLoading();
        } else if (imageWasRemoved) {
            // Se a imagem foi removida explicitamente, salva como null/vazio
            cardImage = null;
        } else {
            // Se não há nova imagem selecionada, mantém a anterior ou gera
            let existingSpeech = null;
            if (speechId) {
                // Busca pelo ID
                const speeches = await storageManager.getSpeeches(this.currentCategory);
                existingSpeech = speeches.find(s => s.id === speechId);
            } else if (itemIndex !== null) {
                // Busca pelo índice
                const speeches = await storageManager.getSpeeches(this.currentCategory);
                if (itemIndex < speeches.length) {
                    existingSpeech = speeches[itemIndex];
                }
            }
            
            if (existingSpeech && existingSpeech.image) {
                // Se a imagem é uma blob URL, precisamos buscar o blob original
                // Por enquanto, mantém a URL (será convertida ao salvar se necessário)
                cardImage = existingSpeech.image;
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

            // Atualiza usando StorageManager (IndexedDB)
            if (speechId) {
                // Se temos ID do IndexedDB, atualiza diretamente
                await storageManager.updateSpeech(speechId, {
                    text: speechText,
                    icon: icon,
                    image: cardImage
                });
            } else {
                // Fallback: busca pelo itemIndex (compatibilidade com localStorage)
                const speeches = await storageManager.getSpeeches(this.currentCategory);
                if (itemIndex !== null && itemIndex < speeches.length) {
                    const speech = speeches[itemIndex];
                    if (speech && speech.id) {
                        await storageManager.updateSpeech(speech.id, {
                            text: speechText,
                            icon: icon,
                            image: cardImage
                        });
                    }
                }
            }
            
            await this.showSubCategories(this.currentCategory);
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            this.updateStatus(t('speechUpdated'));
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
        
        const lang = localStorage.getItem('appLanguage') || 'pt-BR';
        const t = (key) => getTranslation(key, lang);
        
        const existingImage = cat.photo || '';
        const previewVisible = existingImage ? 'block' : 'none';
        
        modal.innerHTML = `
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="editModalTitle" style="display: flex; flex-direction: column; max-height: 90vh; max-width: 600px; width: 90vw;">
                <h2 id="editModalTitle"><i class="fas fa-edit"></i> Editar Categoria</h2>
                <div style="flex: 1; overflow-y: auto; overflow-x: hidden; padding: 32px; min-height: 0;">
                    <form id="editCategoryForm">
                        <label style="display: block; font-size: 18px; font-weight: 600; color: #333; margin-bottom: 12px;">${t('categoryName')}:</label>
                        <input type="text" id="editCatName" required maxlength="30" placeholder="${t('categoryNamePlaceholder')}" value="${cat.title}" autofocus style="width: 100%; padding: 14px; font-size: 16px; border: 2px solid #ddd; border-radius: 8px; margin-bottom: 20px; box-sizing: border-box;" />
                    
                        <div style="margin-bottom: 20px;">
                            <label style="display: block; font-size: 16px; font-weight: 600; color: #333; margin-bottom: 8px;">
                                <i class="fas fa-image" style="margin-right: 6px;"></i> ${t('chooseImage')}
                            </label>
                            <div style="display: flex; gap: 10px; margin-bottom: 12px; flex-wrap: wrap;">
                                <button type="button" id="btnBuscarARASAACEdit" style="flex: 1; min-width: 150px; padding: 12px; background: #9C27B0; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                    <i class="fas fa-search"></i> ${t('searchPictogram')}
                                </button>
                                <button type="button" id="selectEditCategoryImageBtn" style="flex: 1; min-width: 150px; padding: 12px; background: #2196F3; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                    <i class="fas fa-folder-open"></i> ${t('localGallery')}
                                </button>
                            </div>
                            <input type="file" id="editCategoryImage" accept="image/*" style="display: none;" />
                            <input type="hidden" id="editCategoryImageUrl" value="" />
                            <input type="hidden" id="editCategoryImageBase64" value="${existingImage && existingImage.startsWith('data:image') ? existingImage : ''}" />
                            <div id="selectedEditCategoryImagePreview" style="margin-top: 12px; display: ${previewVisible};">
                                <img id="previewEditCategoryImage" src="${existingImage || ''}" alt="Preview" style="max-width: 100%; max-height: 200px; border-radius: 8px; border: 2px solid #ddd; display: block; margin: 0 auto;" />
                                <p style="margin-top: 8px; font-size: 14px; color: #666; text-align: center;">${t('imageSelected')}</p>
                                <button type="button" id="removeSelectedEditImage" style="width: 100%; margin-top: 8px; padding: 8px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 13px; display: flex; align-items: center; justify-content: center; gap: 6px;">
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
                    <button type="button" id="cancelEditModal" style="padding: 10px 20px; background: #ccc; color: #333; border: none; border-radius: 6px; cursor: pointer; font-size: 16px;">${t('cancel')}</button>
                    <button type="submit" form="editCategoryForm" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">${t('saveChanges')}</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Configurar elementos
        const imageInput = document.getElementById('editCategoryImage');
        const imageUrlInput = document.getElementById('editCategoryImageUrl');
        const imageBase64Input = document.getElementById('editCategoryImageBase64');
        const selectImageBtn = document.getElementById('selectEditCategoryImageBtn');
        const btnBuscarARASAACEdit = document.getElementById('btnBuscarARASAACEdit');
        const previewDiv = document.getElementById('selectedEditCategoryImagePreview');
        const previewImg = document.getElementById('previewEditCategoryImage');
        const removeImageBtn = document.getElementById('removeSelectedEditImage');
        
        // Se já existe imagem, configura URL ou base64
        if (existingImage && !existingImage.startsWith('data:image')) {
            imageUrlInput.value = existingImage;
        } else if (existingImage && existingImage.startsWith('data:image')) {
            imageBase64Input.value = existingImage;
        }
        
        let selectedImageData = existingImage || null;
        let imageWasRemoved = false;
        
        const updatePreview = (imageSrc, isUrl = false) => {
            previewImg.src = imageSrc;
            previewDiv.style.display = 'block';
            selectedImageData = imageSrc;
            imageWasRemoved = false; // Nova imagem foi selecionada
            
            if (imageSrc && imageSrc.startsWith('data:image')) {
                imageBase64Input.value = imageSrc;
                imageUrlInput.value = '';
            } else if (isUrl) {
                imageUrlInput.value = imageSrc;
                imageBase64Input.value = '';
            }
        };
        
        const removeSelectedImage = () => {
            previewDiv.style.display = 'none';
            previewImg.src = '';
            selectedImageData = null;
            imageWasRemoved = true; // Marca que a imagem foi removida
            imageUrlInput.value = '';
            imageBase64Input.value = '';
            if (imageInput) imageInput.value = '';
        };
        
        // Botão buscar ARASAAC
        btnBuscarARASAACEdit.addEventListener('click', () => {
            this.openARASAACSearchModal((base64Image, imageUrl) => {
                if (base64Image) {
                    updatePreview(base64Image, false);
                } else if (imageUrl) {
                    this.showLoading('Convertendo imagem...');
                    this.converterUrlParaBase64(imageUrl).then(base64 => {
                        updatePreview(base64, false);
                        this.hideLoading();
                    }).catch(() => {
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
                    imageUrlInput.value = '';
                    imageBase64Input.value = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
        
        removeImageBtn.addEventListener('click', removeSelectedImage);
        
        document.getElementById('cancelEditModal').onclick = () => modal.remove();
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
        
        const form = document.getElementById('editCategoryForm');
        const submitBtn = document.querySelector('button[form="editCategoryForm"]');
        
        // Handler para submit do form
        const handleFormSubmit = async (e) => {
            e.preventDefault();
            const categoryName = document.getElementById('editCatName').value.trim();
            
            if (!categoryName) {
                this.showError('Nome da categoria é obrigatório');
                return;
            }
            
            cat.title = categoryName;
            
            // Prioriza os inputs hidden (que são atualizados quando nova imagem é selecionada)
            if (imageBase64Input.value) {
                cat.photo = imageBase64Input.value;
            } else if (imageUrlInput.value) {
                cat.photo = imageUrlInput.value;
            } else if (imageWasRemoved) {
                // Se a imagem foi removida explicitamente, salva como vazio
                cat.photo = '';
            } else if (selectedImageData) {
                // Se selectedImageData existe mas os inputs estão vazios, usa selectedImageData (imagem original)
                cat.photo = selectedImageData;
            } else {
                // Se não há imagem, salva como vazio
                cat.photo = '';
            }
            
            localStorage.setItem('customCategories', JSON.stringify(customCategories));
            modal.remove();
            this.renderMainCategories();
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            this.updateStatus(t('categoryUpdated'));
        };
        
        form.addEventListener('submit', handleFormSubmit);
        
        // Adiciona evento ao botão de submit que está fora do form
        if (submitBtn) {
            submitBtn.addEventListener('click', handleFormSubmit);
        }
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

    async deleteCategoriesMultiple(categoryIds) {
        try {
            // Remove categorias do localStorage
            const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
            const filteredCategories = customCategories.filter(cat => !categoryIds.includes(cat.id));
            localStorage.setItem('customCategories', JSON.stringify(filteredCategories));
            
            // Remove também as falas customizadas associadas a estas categorias usando StorageManager
            for (const categoryId of categoryIds) {
                await storageManager.deleteSpeechesByCategory(categoryId);
            }
            
            // Atualiza visualização
            this.renderMainCategories();
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            if (categoryIds.length === 1) {
                this.updateStatus(t('categoryDeleted'));
            } else {
                this.updateStatus(t('multipleCategoriesDeleted').replace('{count}', categoryIds.length));
            }
            
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

    async deleteSubcategoriesMultiple(itemsToDelete) {
        try {
            if (!this.currentCategory) {
                this.showError('Erro: nenhuma categoria selecionada');
                return;
            }

            let deletedCount = 0;

            // Busca todas as falas da categoria para obter IDs
            const speeches = await storageManager.getSpeeches(this.currentCategory);
            
            // Prepara conjunto de textos para remoção
            const textsToRemove = new Set(itemsToDelete.map(item => item.text));
            
            // Remove pelo ID quando disponível, ou pelo texto
            for (const item of itemsToDelete) {
                let deleted = false;
                
                // Tenta encontrar pelo speechId se disponível
                if (item.speechId) {
                    await storageManager.deleteSpeech(item.speechId);
                    deleted = true;
                } else {
                    // Busca pelo texto ou índice
                    const speech = speeches.find(s => 
                        s.text === item.text || 
                        (item.index !== null && speeches.indexOf(s) === parseInt(item.index))
                    );
                    
                    if (speech && speech.id) {
                        await storageManager.deleteSpeech(speech.id);
                        deleted = true;
                    }
                }
                
                if (deleted) {
                    deletedCount++;
                }
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
            await this.showSubCategories(this.currentCategory);
            const lang = localStorage.getItem('appLanguage') || 'pt-BR';
            const t = (key) => getTranslation(key, lang);
            if (deletedCount === 1) {
                this.updateStatus(t('speechDeleted'));
            } else {
                this.updateStatus(t('multipleSpeechesDeleted').replace('{count}', deletedCount));
            }
            
            // Atualiza botão de excluir selecionados
            this.updateDeleteSelectedButton();
        } catch (error) {
            this.showError('Erro ao excluir falas: ' + error.message);
            console.error('Erro ao excluir falas:', error);
        }
    }
}

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Inicializa StorageManager primeiro
        await storageManager.initDB();
        
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

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CommunicationApp };
}
