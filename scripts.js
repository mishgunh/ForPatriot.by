// Переключение темы (светлая/темная)
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Светлая тема';
    } else {
        themeToggleBtn.textContent = 'Темная тема';
    }
});

// Показать/скрыть дополнительную информацию
const toggleInfoBtn = document.getElementById('toggle-info');
const extraInfo = document.getElementById('extra-info');
toggleInfoBtn.addEventListener('click', () => {
    if (extraInfo.style.display === 'none') {
        extraInfo.style.display = 'block';
        toggleInfoBtn.textContent = 'Скрыть информацию';
    } else {
        extraInfo.style.display = 'none';
        toggleInfoBtn.textContent = 'Показать больше информации';
    }
});

// Кнопка прокрутки наверх
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
