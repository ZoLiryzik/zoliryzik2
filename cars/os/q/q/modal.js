// Показ модального окна
document.getElementById('openModal').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
});

// Закрытие модального окна
document.getElementById('closeModal').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне контента
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
