function toggleSection(apresentacao) {
    var section = document.getElementById(apresentacao + 'Content'); // Adicione 'Content' aos IDs
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        adjustVideoHeight(); // Chame uma função para ajustar a altura do vídeo quando a seção é expandida
    } else {
        section.style.display = 'none';
    }
}
function adjustVideoHeight() {
    var videoContainer = document.querySelector('.video-container iframe');
    if (videoContainer) {
        videoContainer.style.height = videoContainer.offsetWidth * 0.5625 + 'px'; // Ajuste a altura com base na proporção 16:9
    }
}
function toggleSection(portfolio) {
    var section = document.getElementById(portfolio + 'Content'); // Adicione 'Content' aos IDs
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}
