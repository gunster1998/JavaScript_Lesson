// Получаем элемент canvas и контекст
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Задаем параметры героев (кругов)
const hero1 = {
    x: 50,  // Положение по оси X
    y: canvas.height / 2,  // Начальная позиция по оси Y
    radius: 20,  // Радиус круга
    speedY: 2  // Скорость по оси Y
};

const hero2 = {
    x: canvas.width - 50,
    y: canvas.height / 2,
    radius: 20,
    speedY: 2
};

// Функция для рисования круга
function drawCircle(hero) {
    ctx.beginPath();
    ctx.arc(hero.x, hero.y, hero.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

// Функция обновления положения героев
function updateHero(hero) {
    hero.y += hero.speedY;
    // Проверяем границы и меняем направление движения
    if (hero.y + hero.radius > canvas.height || hero.y - hero.radius < 0) {
        hero.speedY *= -1;  // Меняем направление
    }
}

// Главная функция игры
function gameLoop() {
    // Очищаем Canvas перед каждым кадром
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Обновляем положение и рисуем героев
    updateHero(hero1);
    updateHero(hero2);
    
    drawCircle(hero1);
    drawCircle(hero2);
    
    // Рекурсивно запускаем gameLoop для создания анимации
    requestAnimationFrame(gameLoop);
}

// Запускаем игру
gameLoop();
