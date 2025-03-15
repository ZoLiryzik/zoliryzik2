// Загружаем данные из JSON
const data = {
    "blocks": [
        {
            "id": "payment",
            "title": "Оплата и обслуживание",
            "content": "Оплата картой, Базовое сервисное обслуживание, Шиномонтаж."
        },
        {
            "id": "workTypes",
            "title": "Виды работы",
            "content": "Здесь описываются виды работы."
        },
        {
            "id": "carBrands",
            "title": "Марки автомобилей",
            "content": "Китайские, корейские, японские, отечественные, европейские, легковые, импортные."
        },
        {
            "id": "oilChange",
            "title": "Замена масла",
            "content": "В легковых автомобилях."
        },
        {
            "id": "paymentMethod",
            "title": "Способы оплаты",
            "content": "Банковским переводом, оплата картой, наличными."
        }
    ]
};

document.getElementById("blockSelector").addEventListener("change", function() {
    const selectedValue = this.value;
    const contentDiv = document.getElementById("content");

    // Очистка контента
    contentDiv.style.display = "none";
    contentDiv.innerHTML = "";

    if (selectedValue !== "none") {
        const selectedBlock = data.blocks.find(block => block.id === selectedValue);
        if (selectedBlock) {
            contentDiv.style.display = "block";
            contentDiv.innerHTML = `<h2>${selectedBlock.title}</h2><p>${selectedBlock.content}</p>`;
        }
    }
});
