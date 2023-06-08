document.addEventListener('DOMContentLoaded', () => {
    // Получаем ссылки на элементы
    const aboutCard = document.querySelector('.aboutCard');
    const svgEnable = document.querySelector('.aboutImg .svgEnable');
    const svgHover = document.querySelector('.aboutImg .svgHover');
  
    // Добавляем обработчик события наведения
    aboutCard.addEventListener('mouseenter', () => {
      svgEnable.style.display = 'none';
      svgHover.style.display = 'inline';
    });
  
    // Добавляем обработчик события снятия наведения
    aboutCard.addEventListener('mouseleave', () => {
      svgEnable.style.display = 'inline';
      svgHover.style.display = 'none';
    });
  });  