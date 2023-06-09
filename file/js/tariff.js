document.addEventListener('DOMContentLoaded', () => {
    const projectsInput = document.getElementById('projects');
    const tracksInput = document.getElementById('tracks');
    const summaInput = document.getElementById('summa');

    // Функция для расчета суммы и обновления поля "Цена"
    const calculateSumma = () => {
        let projects = parseInt(projectsInput.value);
        let tracks = parseInt(tracksInput.value);

        if (projects <= 3) {
            tracks = tracks * 2000;
        } else if (projects <= 5) {
            tracks = tracks * 1800;
        } else if (projects > 5) {
            tracks = tracks * 1680;
        } else {
            tracks = 0;
        }
        let summa = projects * tracks;

        summaInput.value = summa.toLocaleString('ru-RU'); // Форматирование числа с разделителями тысяч
    };

    // Добавляем обработчики событий изменения значений в полях "Лицензия" и "Кол-во треков для 1 проекта"
    projectsInput.addEventListener('input', calculateSumma);
    tracksInput.addEventListener('input', calculateSumma);
});
