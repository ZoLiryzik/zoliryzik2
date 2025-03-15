// Данные блоков
const data = {
    payment: { title: "Основное", content: "Это основная информация о сервисе." },
    workTypes: { title: "Виды работы", content: "Мы предоставляем широкий спектр услуг для вашего автомобиля." },
    carBrands: { title: "Марки автомобилей", content: "Мы работаем с такими брендами, как Toyota, BMW, Mercedes и другие." },
    oilChange: { title: "Замена масла", content: "Замена масла производится профессионально и быстро." },
    paymentMethod: { title: "Способы оплаты", content: "Мы принимаем наличные, карты и другие способы оплаты." },
};

// Логика обновления контента
const blockSelector = document.getElementById('blockSelector');
const contentDiv = document.getElementById('content');

blockSelector.addEventListener('change', () => {
    const selectedValue = blockSelector.value;

    if (selectedValue === "none") {
        contentDiv.style.display = "none"; // Скрыть блок
        contentDiv.innerHTML = ""; // Очистить содержимое
    } else {
        const blockData = data[selectedValue];
        contentDiv.style.display = "block"; // Показать блок
        contentDiv.innerHTML = `<h2>${blockData.title}</h2><p>${blockData.content}</p>`;
    }
});
