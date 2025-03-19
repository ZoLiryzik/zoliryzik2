async function fetchData() {
  const response = await fetch("data.json");
  return response.json();
}

function createModal(id, title, content) {
  return `
    <div id="${id}" class="modal">
      <div class="modal-content">
        <button class="close-button" onclick="closeModal('${id}')">Закрыть</button>
        <h2>${title}</h2>
        ${Object.entries(content)
          .map(([key, value]) => {
            if (Array.isArray(value)) {
              return `<p>${key}: ${value.join(", ")}</p>`;
            }
            return `<p>${key}: ${value}</p>`;
          })
          .join("")}
      </div>
    </div>
  `;
}

async function initPage() {
  const data = await fetchData();
  const modalsContainer = document.getElementById("modals-container");
  const buttonsContainer = document.getElementById("buttons-container");

  data.forEach((item) => {
    // Создание кнопок
    const button = document.createElement("button");
    button.textContent = item.title;
    button.onclick = () => openModal(item.id);
    buttonsContainer.appendChild(button);

    // Создание модальных окон
    const modalHTML = createModal(item.id, item.title, item.content);
    modalsContainer.innerHTML += modalHTML;
  });
}

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Инициализация
document.addEventListener("DOMContentLoaded", initPage);
