fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('avatar').src = data.avatar;
        document.getElementById('name').textContent = data.name;

        const infoButton = document.getElementById('infoButton');
        const modal = document.getElementById('modal');
        const closeModal = document.querySelector('.close');

        infoButton.addEventListener('click', () => {
            // Загружаем данные для каждой вкладки
            document.getElementById('tab1-title').textContent = data.info.tab1.title;
            document.getElementById('tab1-description').textContent = data.info.tab1.description;

            document.getElementById('tab2-title').textContent = data.info.tab2.title;
            document.getElementById('tab2-description').textContent = data.info.tab2.description;

            document.getElementById('tab3-title').textContent = data.info.tab3.title;
            document.getElementById('tab3-description').textContent = data.info.tab3.description;

            modal.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        const tabs = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                tab.classList.add('active');
                document.getElementById(tab.dataset.tab).classList.add('active');
            });
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));