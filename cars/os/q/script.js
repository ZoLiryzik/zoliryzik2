// Открытие модального окна
const openModal = document.getElementById("openModal");
const modal = document.getElementById("myModal");
const closeModal = document.querySelector(".close");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

// Закрытие модального окна
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закрытие окна при клике вне его
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Подтверждение выбора
const confirmChoice = document.getElementById("confirmChoice");
const modalSelect = document.getElementById("modalSelect");

confirmChoice.addEventListener("click", () => {
  alert(`Вы выбрали: ${modalSelect.value}`);
  modal.style.display = "none";
});
