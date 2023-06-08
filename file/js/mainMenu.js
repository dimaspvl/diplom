let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Добавляем обработчик события при клике на ссылку в меню навигации
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Отменяем стандартное поведение ссылки

        const targetId = link.getAttribute('href').substring(1); // Получаем ID целевой секции
        const targetSection = document.getElementById(targetId); // Получаем элемент целевой секции

        if (targetSection) {
            const targetOffset = targetSection.offsetTop; // Получаем вертикальное смещение целевой секции относительно документа

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth' // Добавляем плавную прокрутку
            });

            // Удаляем класс "active" у всех ссылок в меню навигации
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Добавляем класс "active" только для выбранной ссылки
            link.classList.add('active');
        }
    });
});

// Обработчик события при прокрутке страницы
window.addEventListener('scroll', () => {
    let currentSection = null;

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            currentSection = id;
        }
    });

    // Добавляем класс "active" только для ссылки, соответствующей текущей секции
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').includes(currentSection));
    });
});
