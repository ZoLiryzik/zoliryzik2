const scriptURL = 'https://script.google.com/macros/s/AKfycbxgcOgjxFfQ1mRJlnsx1MMeRdcWIUuj8ONKcedr7mQdw8zJfzfe2h23I6eOgy3TJ-qO/exec'; // URL вашего Google Apps Script Web App
const form = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviews');

// Обработка отправки формы
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
        const response = await fetch(scriptURL, { method: 'POST', body: formData });
        if (response.ok) {
            alert('Отзыв отправлен!');
            form.reset();
            loadReviews();
        } else {
            alert('Ошибка при отправке отзыва.');
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
});

// Загрузка отзывов
async function loadReviews() {
    try {
        const response = await fetch(scriptURL + '?read=true');
        const data = await response.json();
        reviewsContainer.innerHTML = '';
        data.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            reviewDiv.innerHTML = `<strong>${review.name}</strong><p>${review.review}</p>`;
            reviewsContainer.appendChild(reviewDiv);
        });
    } catch (error) {
        console.error('Ошибка загрузки отзывов:', error);
    }
}

// Загрузить отзывы при загрузке страницы
loadReviews();
