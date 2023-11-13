// Функция для начала воспроизведения видео и фонового звука
function startVideo() {
    document.getElementById('popup').style.display = 'none'; // Закрытие popup сообщения
    document.getElementById('video-player').play(); // Запуск видео
    document.getElementById('background-audio').play(); // Запуск фонового звука
}
