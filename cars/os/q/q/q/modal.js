document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');

    // Открытие модального окна
    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Закрытие модального окна
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрытие окна при клике вне модального содержимого
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
