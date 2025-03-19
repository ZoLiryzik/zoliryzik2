// Загружаем JSON данные
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Инициализация данных для карточки
        document.getElementById('avatar').src = data.card.avatar;
        document.getElementById('name').textContent = data.card.name;

        // Логика модального окна
        const infoButton = document.getElementById('infoButton');
        const modal = document.getElementById('modal');
        const closeModal = document.querySelector('.close');

        infoButton.addEventListener('click', () => {
            data.modal.tabs.forEach(tab => {
                const tabTitle = document.getElementById(`${tab.id}-title`);
                const tabContent = document.getElementById(`${tab.id}-content`);
                if (tabTitle && tabContent) {
                    tabTitle.textContent = tab.title;
                    tabContent.textContent = tab.content;
                }
            });
            modal.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Управление вкладками
        const tabs = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                tab.classList.add('active');
                tabContents[index].classList.add('active');
            });
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));