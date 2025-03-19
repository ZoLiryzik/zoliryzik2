async function fetchData() {
  const response = await fetch("data.json");
  return response.json();
}

let data = [];

// Функция для открытия модального окна
async function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";

  // Загружаем данные, если они ещё не были загружены
  if (data.length === 0) {
    data = await fetchData();
    populateMenu();
  }
}

// Функция для закрытия модального окна
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Заполнение меню
function populateMenu() {
  const menu = document.getElementById("menu");

  data.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.textContent = item.title;
    menuItem.onclick = () => displayInfo(item);
    menu.appendChild(menuItem);
  });
}

// Отображение информации при выборе раздела
function displayInfo(item) {
  const infoSection = document.getElementById("info");

  const contentHTML = Object.entries(item.content)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `<p><strong>${key}:</strong> ${value.join(", ")}</p>`;
      }
      return `<p><strong>${key}:</strong> ${value}</p>`;
    })
    .join("");

  infoSection.innerHTML = `
    <h3>${item.title}</h3>
    ${contentHTML}
  `;
}
