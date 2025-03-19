document.addEventListener('DOMContentLoaded', () => {
    const infoButton = document.getElementById('infoButton');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Load JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('avatar').src = data.avatar;
            document.getElementById('name').textContent = data.name;

            document.getElementById('main').innerHTML = `<h3>${data.main.title}</h3><p>${data.main.description}</p>`;
            document.getElementById('juniper').innerHTML = `<h3>${data.juniper.title}</h3><p>${data.juniper.description}</p>`;
            document.getElementById('express').innerHTML = `<h3>${data.express.title}</h3><p>${data.express.description}</p>`;
        });

    // Open modal
    infoButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.tab-button.active').classList.remove('active');
            document.querySelector('.tab-content.active').classList.remove('active');

            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
});