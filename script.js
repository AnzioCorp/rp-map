// Функция для начала воспроизведения видео и фонового звука
function startVideo() {
    document.getElementById('popup').style.display = 'none'; // Закрытие popup сообщения
    document.getElementById('video-player').play(); // Запуск видео
    document.getElementById('background-audio').play(); // Запуск фонового звука
}

var isRotated = false; // Track the current state of rotation

// Функция для изменения стилей
function changeStyles() {
    var bodyStyle = document.body.style;

    if (isRotated) {
        // Revert styles
        bodyStyle.transform = '';
        bodyStyle.transformOrigin = '';
        bodyStyle.top = '';

        isRotated = false;
    } else {
        // Apply rotated styles
        bodyStyle.transform = 'rotate(-90deg)';
        bodyStyle.transformOrigin = 'left top';
        bodyStyle.top = '100%';

        isRotated = true;
    }
}
