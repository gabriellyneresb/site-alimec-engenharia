window.addEventListener('scroll', () => {
    const timeline = document.getElementById('timeline');
    const progressLine = document.getElementById('progress-line');
    const items = document.querySelectorAll('.service-item');
    
    // Calcula quanto da seção de serviços já passou pela tela
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Começa a encher quando o topo da seção entra na metade da tela
    let progress = (windowHeight / 2 - rect.top) / rect.height * 100;
    
    // Limita entre 0 e 100%
    progress = Math.min(Math.max(progress, 0), 100);
    
    progressLine.style.height = `${progress}%`;
    
    // Ativa os itens individualmente conforme a linha passa
    items.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight / 2) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});