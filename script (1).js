// Check if data exists in localStorage, otherwise, initialize with an empty array
let data = JSON.parse(localStorage.getItem('data')) || [];

function saveDataToLocalStorage() {
  localStorage.setItem('data', JSON.stringify(data));
}

function loadDataFromLocalStorage() {
  data = JSON.parse(localStorage.getItem('data')) || [];
}

function init() {
  loadDataFromLocalStorage();
  displayCards(data);
}

function displayCards(data) {
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.innerHTML = '';

  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = item;
    cardsContainer.appendChild(card);
  });
}

function searchContent() {
  const contentSearchInput = document.getElementById('contentSearchInput');
  const searchTerm = contentSearchInput.value.toLowerCase();

  const filteredData = data.filter(item => item.toLowerCase().includes(searchTerm));
  displayCards(filteredData);
}

function openModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
  document.getElementById('newCardNameInput').value = '';
}

function addNewCard() {
  const newCardNameInput = document.getElementById('newCardNameInput');
  const newCardName = newCardNameInput.value.trim();
  if (newCardName !== '') {
    data.push(newCardName);
    saveDataToLocalStorage();
    displayCards(data);
    newCardNameInput.value = '';
    closeModal();
  }
}

window.onload = init;